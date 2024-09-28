import { cookies } from "next/headers";
import { v4 as generateUUID } from "uuid";
import redis from "@/lib/redis";

export const setUserSession = async (userId) => {
  const token = generateUUID();
  const key = `heliosUser:${token}`;
  const repeatedToken = await redis.exists(key);
  if (repeatedToken === 1) return setUserSession(userId);
  await redis.hset(key, { userId });
  await redis.expire(key, Number(process.env.SESSIONS_TTL));
  cookies().set({
    name: "heliosAuth",
    value: token,
    maxAge: process.env.SESSIONS_TTL,
    sameSite: "Strict",
    path: "/",
    httpOnly: `${process.env.NODE_ENV !== "development" && "; Secure"}`,
  });
};
