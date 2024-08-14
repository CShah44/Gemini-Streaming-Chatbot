import { Send } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {RenderForm()}
    </main>
  );

  function RenderForm() {
    return (
      <form
        action=""
        className="w-full flex flex-row gap-2 items-center h-full"
      >
        <input
          type="text"
          placeholder="Ask Something..."
          className="text-right focus:placeholder-transparent border-b border-dashed outline-none w-full px-4 py-2 text-blue-700"
        />
        <button
          type="submit"
          className="rounded-full shadow-md border flex flex-row"
        >
          <Send className="p-3 w-10 h-10 stroke-stone-700" />
        </button>
      </form>
    );
  }
}
