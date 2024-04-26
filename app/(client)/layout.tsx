import Header from '@/components/header';
import React from 'react'

export default function Layout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-5xl mx-auto h-auto px-6">
      <Header />
      {children}
    </main>
  );
}
