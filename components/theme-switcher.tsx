"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

export default function ThemeSwitcher() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[])

    if (!mounted) {
        return null;
    }
  return (
    <button 
    className="border p-1 rounded-full border-amber-50 dark:border-slate-900"
    onClick={() => { setTheme(theme == 'dark' ? 'light': 'dark')}}>
        {theme == 'dark' ? <GoSun/>: <GoMoon/>}
    </button>
  )
}
