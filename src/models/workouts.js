import { api } from './api';

export async function GetWorkouts(data) {
  const x = await api('workouts/individual', data);
  return x;
}

export async function addWorkout(data) {
  const x = await api('workouts', data);
  return x;
}
