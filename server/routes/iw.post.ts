export default defineEventHandler(async (event) => {
  const storage = useStorage('data');
  const body = await readBody(event);
  await storage.setItem('message', body.message);
  return { message: 'Message saved!' };
});
