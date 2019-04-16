import { api } from "./api";

export async function GetFriends() { //This will come from the friends table will need to update query and do a join on tables
  const x = await api('users');
  return x;
}

export async function Register(data) {
    const x = await api('users', data)
    return x;
}