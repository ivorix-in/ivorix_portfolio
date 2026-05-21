export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-[#FAFBFD]">
      {children}
    </main>
  );
}