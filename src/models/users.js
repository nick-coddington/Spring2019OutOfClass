import { api, Globals } from './api';

export async function GetUsers() {
  const x = await api('users');
  return x;
}

export async function Login(data) {
  const x = await api('users/login', data);
  Globals.user = x.user;
  Globals.token = x.token;
  return x;
}

export async function Register(data) {
  const x = await api('users', data);
  return x;
}

export async function getFriends1(data) {
  const x = await api('userRelationships/getfriends1', data);
  return x;
}

export async function getFriends2(data) {
  const x = await api('userRelationships/getfriends2', data);
  return x;
}

export async function getName(data) {
  const x = await api('users/getName', data);
  return x;
}

export async function addFriend(data) {
  const x = await api('userRelationships', data);
  return x;
}

export async function getrequests1(data) {
  const x = await api('userRelationships/getrequests1', data);
  return x;
}

export async function getrequests2(data) {
  const x = await api('userRelationships/getrequests2', data);
  return x;
}

export async function block(data) {
  const x = await api('userRelationships/block', data);
  return x;
}

export async function accept(data) {
  const x = await api('userRelationships/friends', data);
  return x;
}
