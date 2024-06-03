import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="main py-4 flex items-center justify-center flex-col gap-16 min-h-[50vh]">
      <h2 className="text-4xl font-semibold">Welcome to Polyvalent</h2>
      <p className="text-xl text-center max-w-2xl">
        Discover a platform where you can seamlessly practice and master the
        words {"you've"} learned in any language. Polyvalent offers interactive
        and engaging exercises designed to boost your vocabulary and language
        skills effortlessly.
      </p>
      <Button className="text-xl px-6 py-3 mt-8  rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        Get Started
      </Button>
    </main>
  );
}
