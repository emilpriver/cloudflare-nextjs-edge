// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextRequest} from "next/server"

export const config = {
  runtime: "experimental-edge",
};


export default async function handler(req: NextRequest) {
  return new Response(
    JSON.stringify({
      name: process.env.NEXT_RUNTIME,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}

