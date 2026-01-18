export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 bg-background text-foreground">
      <main className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Fedda Hub</h1>
        <p className="text-xl text-muted-foreground">System Initialization Complete.</p>
        <div className="flex gap-4 mt-8">
          <button className="px-4 py-2 bg-foreground text-background rounded-md">
            Getting Started
          </button>
        </div>
      </main>
    </div>
  );
}
