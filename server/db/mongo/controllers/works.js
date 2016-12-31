import Works from '../models/works';

/**
 * List them all
 */
export function all(req, res) {
  const selector = {archived: {$ne: 1}};
  const limit = 12;
  const sort = {insertion_date: 1};

  Works.find(selector).sort(sort).limit(limit).exec((err, works) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(works);
  });
}

/**
* Update a work
*/
export function update(req, res) {
  const query = { wid: req.params.id };
  const data = req.body;

  Works.findOneAndUpdate(query, {$set: data}, (err) => {
    if (err) {
      console.log('Error on save!');
      return res.status(500).send('We failed to save for some reason');
    }

    return res.status(200).send('Updated successfully');
  });
}

/**
 * Add a Work
export function add(req, res) {
  Works.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}
*/


/**
 * Remove a work
export function remove(req, res) {
  const query = { id: req.params.id };
  Works.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed Successfully');
  });
}
*/

export default {
  all,
  update,
  // add,
  // remove
};
