import { api } from './api';

export async function GetRoutines() {
  const x = await api('routines');
  return x;
}

export async function addRoutine(data) {
  const x = await api('routines', data);
  return x;
}

export async function MyRoutines(data) {
  const x = await api('routines/myroutines', data);
  return x;
}

export async function GetMyRoutine(data) {
  const x = await api('routines/getmyroutine', data);
  return x;
}

export async function routineexercises(data) {
  const x = await api('routineExercises/routine', data);
  return x;
}

export async function addexercisetoroutine(data) {
  const x = await api('routineExercises', data);
  return x;
}

export async function deleteroutine(data) {
  const x = await api('routines/deleteroutine', data);
  return x;
}
