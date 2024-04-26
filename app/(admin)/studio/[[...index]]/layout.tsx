import CmsHeader from "@/components/cms-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <CmsHeader/>
      {children}
    </main>
  );
}
