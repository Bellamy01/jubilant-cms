import ThemeSwitcher from "./theme-switcher";

export default function Header() {
  return (
    <div className="flex py-6 mx-auto max-w-5xl items-center justify-between">
        <h1>Blog CMS</h1>
        <ThemeSwitcher/>
    </div>
  )
}
