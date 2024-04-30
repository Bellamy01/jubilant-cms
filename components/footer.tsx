import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center justify-center py-6 text-sm">
      <p className="text-blue-600 dark:text-blue-400">
        Made by{" "}
        <Link
          href="https://www.dan-bellamy.com"
          className="underline underline-offset-1"
          target="_blank"
        >
          Dan Bellamy
        </Link>
      </p>
    </div>
  );
}
