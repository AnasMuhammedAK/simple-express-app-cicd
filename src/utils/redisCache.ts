import { RedisClientType } from "redis";

export const setCache = async (
  client: RedisClientType,
  key: string,
  value: any,
  ttl: number = 3600 // 1 hour default
) => {
  const data = typeof value === "string" ? value : JSON.stringify(value);

  await client.set(key, data, { EX: ttl });
};

export const getCache = async (client: RedisClientType, key: string) => {
  const data = await client.get(key);
  try {
    return JSON.parse(data!);
  } catch {
    return data;
  }
};

export const delCache = async (client: RedisClientType, key: string) => {
  await client.del(key);
};
