import { User } from 'dtos';

export function getIndex(req, res) {
  res.json(new User(1, 'Mislav'));
}

export function postIndex(req, res) {
  res.send('Success');
}
