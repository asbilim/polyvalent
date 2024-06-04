import TrainWords from "./train";
import { getWords } from "@/functions/words";
import { revalidateTag } from "next/cache";
export default async function Page() {
  const words = await getWords();
  revalidateTag("words");

  return <TrainWords words={words} />;
}
