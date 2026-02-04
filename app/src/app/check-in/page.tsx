import { isMockMode } from "@/lib/mock";

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
        {isMockMode ? (
          <div className="inline-flex w-fit items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase text-amber-900">
            Mock data
          </div>
        ) : null}

        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="flex flex-col gap-3 text-sm text-zinc-600">
            <div className="rounded-xl border border-dashed border-zinc-300 p-4">
              {isMockMode ? (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-zinc-500">
                    Intention
                  </p>
                  <p className="text-zinc-800">
                    Ship the onboarding repo picker and save a project.
                  </p>
                </div>
              ) : (
                <>Intention input goes here.</>
              )}
            </div>
            <div className="rounded-xl border border-dashed border-zinc-300 p-4">
              {isMockMode ? (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-zinc-500">
                    Optional note
                  </p>
                  <p className="text-zinc-800">
                    Focus on GitHub first, then GitLab.
                  </p>
                </div>
              ) : (
                <>Optional note goes here.</>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
