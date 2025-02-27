import Prompt from "@models/prompt";
import { connectToDB } from "@utils/datsbase";

export const GET = async (req) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch", { status: 500 });
  }
};
