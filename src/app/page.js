import Image from "next/image";
import Link from "next/link";
import siteConfig from "./site.config";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-8 sm:p-20">
      <main className="flex flex-col items-center sm:items-start gap-6 max-w-lg text-center sm:text-left">
        <Image
          src="https://github.com/immodded.png"
          alt="Profile Image"
          width={120}
          height={120}
          className="rounded-full filter grayscale shadow-lg"
        />
        <h1 className="text-3xl font-bold text-gray-800">{siteConfig.title}</h1>
        <p className="text-gray-600 leading-relaxed">
          {siteConfig.title} is a platform that lets you explore and watch anime by fetching content from publicly accessible APIs. We don’t store, host, or own any of the content; instead, we provide a simple, ad-free interface to browse and watch anime directly from third-party sources. Enjoy a vast library of anime without sign-ups or downloads. <strong>Note:</strong> We do not store or distribute content; all anime is streamed via links to public APIs.
        </p>
      </main>
    </div>
  );
}
