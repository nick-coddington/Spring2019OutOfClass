import { api } from './api';

export async function GetExercises() {
  const x = await api('exercises');
  return x;
}
