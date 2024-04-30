import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "Page not found - Blog Cms (library for the best trending articles at the moment.)"
}

export default function NotFound() {
  return (
    <div className="min-h-screen w-screen items-center justify-center flex flex-col gap-5">
      <p className="text-3xl">Ooops! Something went wrong!</p>
      <Link href="/" className="underline text-lg">Go to homepage</Link>
    </div>
  )
}
