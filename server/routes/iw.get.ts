
export default defineEventHandler(async () => {
  const storage = useStorage('data');
  const message = await storage.getItem('message');
  return { message };
});
