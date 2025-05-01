import User from '../model/user.js';

export async function service(req) {
  const { name, surname } = req.body;
  const user = new User({ name, surname });
  await user.save();
  return user;
}