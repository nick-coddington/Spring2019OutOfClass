import { api } from './api';

//This will come from the friends table will need to update query and do a join on tables
export async function GetFriends() {
  const x = await api('users');
  return x;
}

export async function Login(data) {
  const x = await api('users/login', data);
  return x;
}

export async function Register(data) {
  const x = await api('users', data);
  return x;
}
