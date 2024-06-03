import AddWord from "@/components/data/add-word-form";
export default function Home() {
  return (
    <main className="main py-4 flex items-center justify-center flex-col gap-16 min-h-[50vh]">
      <h2 className="text-4xl font-semibold">Add your favorite words here</h2>
      <p className="text-sm text-center">
        You have learn a new word and you are afraid to forget it ? add it to
        the list of your words
      </p>
      <AddWord />
    </main>
  );
}
