import { createClient } from "@vercel/kv";
import { config } from "dotenv";

config();

export async function gm(fid: number) {
  const redis = createClient({
    url: process.env.KV_REST_API_URL as string,
    token: process.env.KV_REST_API_TOKEN as string,
  });
  const id = fid.toString();
  await redis.zincrby("gm", 1, id);
}
