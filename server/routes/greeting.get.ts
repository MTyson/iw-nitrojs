import { getGreeting } from '../utils/getGreeting';

export default defineEventHandler((event) => {
  const { name = 'World' } = getQuery(event);
  return {
    message: getGreeting(name as string),
  };
});
