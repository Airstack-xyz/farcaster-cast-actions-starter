import {
  Frog,
  getFarcasterUserDetails,
  validateFramesMessage,
} from "@airstack/frog";
import { devtools } from "@airstack/frog/dev";
import { serveStatic } from "@airstack/frog/serve-static";
import { handle } from "@airstack/frog/vercel";
import { config } from "dotenv";

config();

const ADD_URL =
  "https://warpcast.com/~/add-cast-action?actionType=post&name=GM&icon=sun&postUrl=https%3A%2F%2Fgm-fc.vercel.app%2Fapi%2Fgm";

export const app = new Frog({
  apiKey: process.env.AIRSTACK_API_KEY as string,
  basePath: "/api",
  browserLocation: ADD_URL,
});

// Cast action handler
app.hono.post("/gm", async (c) => {
  const { isValid, message } =
    process.env.NODE_ENV === "development"
      ? { isValid: true, message: {} }
      : await validateFramesMessage(await c.req.json?.());
  const interactorFid = message?.data?.fid ?? 0;
  const castFid = message?.data?.frameActionBody?.castId?.fid ?? 1;
  if (isValid) {
    if (interactorFid === castFid) {
      return c.json({ message: "Nice try." }, 400);
    }

    const { data, error } = await getFarcasterUserDetails({
      fid: castFid,
    });

    if (error) {
      console.error(error);
      return c.json({ message: "Error. Try Again." }, 500);
    }

    let message = `GM ${data?.profileName}!`;
    if (message.length > 30) {
      message = "GM!";
    }

    return c.json({ message });
  } else {
    return c.json({ message: "Unauthorized" }, 401);
  }
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
