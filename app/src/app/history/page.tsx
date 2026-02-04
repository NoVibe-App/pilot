import { isMockMode } from "@/lib/mock";

export default function HistoryPage() {
  const mockWeeks = [
    {
      week: "2026-W06",
      status: "Shipped",
      summary:
        "Repo picker UI landed and the onboarding flow is now navigable.",
      nextStep: "Persist selected repo and show it on check-in.",
    },
    {
      week: "2026-W05",
      status: "Partial",
      summary: "Defined data model and created initial auth routes.",
      nextStep: "Add repo list fetch from GitHub.",
    },
    {
      week: "2026-W04",
      status: "Paused",
      summary: "Paused to clarify GitHub/GitLab requirements.",
      nextStep: "Restart with repo-based project selection.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            History
          </p>
          <h1 className="mt-3 text-3xl font-semibold">Your weekly momentum</h1>
          <p className="mt-2 text-base text-zinc-600">
            A quick view of prior weeks and what shipped.
          </p>
        </header>
        {isMockMode ? (
          <div className="inline-flex w-fit items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase text-amber-900">
            Mock data
          </div>
        ) : null}

        <section className="rounded-2xl border border-dashed border-zinc-300 bg-white p-6 text-sm text-zinc-600">
          {isMockMode ? (
            <div className="flex flex-col gap-4">
              {mockWeeks.map((week) => (
                <div
                  key={week.week}
                  className="rounded-xl border border-zinc-200 bg-white p-4"
                >
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>{week.week}</span>
                    <span className="rounded-full bg-zinc-100 px-2 py-1 text-zinc-700">
                      {week.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-800">{week.summary}</p>
                  <p className="mt-2 text-xs text-zinc-500">
                    Next: {week.nextStep}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <>Weekly history cards go here.</>
          )}
        </section>
      </main>
    </div>
  );
}
