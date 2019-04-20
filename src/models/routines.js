import { api } from './api';

export async function GetRoutines() {
  const x = await api('routines');
  return x;
}
