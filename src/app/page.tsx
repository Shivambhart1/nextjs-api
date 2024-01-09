"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-4xl">Enter your name: </h1>
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <input
            type="text"
            className="rounded-lg p-3 text-black"
            placeholder="Name..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </form>
        <h1 className="relative left-5 text-2xl">Predict Data</h1>
      </div>
    </main>
  );
}
