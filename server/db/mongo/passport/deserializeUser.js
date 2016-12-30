import User from '../models/users';

export default (id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
};
