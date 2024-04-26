import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

export default function Header() {
  return (
    <div className="flex py-4 mx-auto max-w-5xl items-center justify-between">
      <Link href="/">
        <h1 className="text-2xl uppercase font-bold">Blog CMS</h1>
      </Link>
      <ThemeSwitcher />
    </div>
  );
}
