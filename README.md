
A workaway.info paginated crawler for better organizing your search results. Express on the backend and React + Redux + Material UI for the frontend

##### TODO

- [ ] Dynamic crawling with regions as a parameter
- [x] Archive, favorite actions
- [x] Display excerpt
- [ ] "Load more" when scrolling

### Prerequisites
```shell
$ pip install scrapy pymongo
$ brew update && brew install node mongodb
```
1. Start your MongoDB service
```shell
$ cd / && mongod
```

2. Do your first crawl
```shell
$ cd workaway && scrapy crawl works
```

### Run
```shell
$ npm i && npm run dev
```
