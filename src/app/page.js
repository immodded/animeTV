import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Link
  href="/play?url=https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
  className="inline-block bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform transition-all hover:bg-red-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
>
  Produce Error
</Link>

        <Image
          src="https://github.com/immodded.png"
          alt="Profile Image"
          width={300} // Adjust the width as needed
          height={300} // Adjust the height as needed
          className="rounded-full filter grayscale"
        />
      </main>
    </div>
  );
}
