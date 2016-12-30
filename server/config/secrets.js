/** Important **/
/** You should not be committing this file to GitHub **/
/** Repeat: DO! NOT! COMMIT! THIS! FILE! TO! YOUR! REPO! **/
export const sessionSecret = process.env.SESSION_SECRET || 'Your Session Secret goes here';
export const google = {
  clientID: process.env.GOOGLE_CLIENTID || 'xxx.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET || 'xyz',
  callbackURL: process.env.GOOGLE_CALLBACK || '/auth/google/callback'
};

export default {
  sessionSecret,
  google
};
