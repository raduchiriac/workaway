import scrapy

from scrapy.selector import Selector
from scrapy.http.request import Request
from pymongo import MongoClient
from datetime import datetime

base_url = "https://www.workaway.info"
region = "provence-alpes-azur"
client = MongoClient()

class WorksSpider(scrapy.Spider):
    name = "works"
    allowed_domains = ["workaway.info"]
    start_urls = [base_url + "/hostlist-FR.html?country=FR&region=" + region]

    client = MongoClient("mongodb://localhost:27017")

    def parse(self, response):
        global base_url
        global region
        db = client.workaway

        if response is not None:
            coll = db.works
            hosts = response.css('.listitem')
            hxs = Selector(response)
            next_page = hxs.xpath('//div[@class="splitResult"]/a[.=">"]/@href')

            for host in hosts:
                selector = {
                    'wid': host.xpath('@class').extract()[0].replace('listitem ', ''),
                }
                data = {
                    'wid': host.xpath('@class').extract()[0].replace('listitem ', ''),
                    'title': (host.css('.lname span::text').extract_first()),
                    'excerpt': (host.css('.col-md-8::text').extract_first().strip()),
                    'img': (host.css('.searchlist_userpic a img::attr(data-src)').extract_first()),
                    'link': (base_url + host.css('.searchlist_userpic a::attr(href)').extract_first()),
                    'region': region
                }
                now = datetime.utcnow()

                coll.update(selector, {
                    "$set": data,
                    "$setOnInsert": {"insertion_date": now}
                }, True);

            if len(next_page) > 0:
                yield Request((base_url + next_page[0].extract()), self.parse)
