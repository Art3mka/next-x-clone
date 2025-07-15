"use server";

export async function postTweet(formdData: FormData) {
  const content = formdData.get("content");
  console.log(content);
}
