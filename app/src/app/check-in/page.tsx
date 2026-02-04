export default function CheckInPage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Weekly Check-in
          </p>
          <h1 className="mt-3 text-3xl font-semibold">
            What will you ship this week?
          </h1>
          <p className="mt-2 text-base text-zinc-600">
            Keep it small. One sentence is enough.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="flex flex-col gap-3 text-sm text-zinc-600">
            <div className="rounded-xl border border-dashed border-zinc-300 p-4">
              Intention input goes here.
            </div>
            <div className="rounded-xl border border-dashed border-zinc-300 p-4">
              Optional note goes here.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
