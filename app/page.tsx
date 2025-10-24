export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <h1 className="text-6xl font-bold text-foreground">
            Bells <span className="text-primary">Boxing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Elite boxing training and fitness
          </p>
        </div>
      </div>
    </main>
  );
}
