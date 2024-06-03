import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex px-1 mb-12 w-full items-center justify-between">
      <h1 className="text-4xl font-semibold">Polyvalent</h1>
      <Link href="https://x.com/iampaullilian" target="_blank">
        <AiFillTwitterCircle className="cursor-pointer" size={35} />
      </Link>
    </div>
  );
}
