import { isMockMode } from "@/lib/mock";

export default function OnboardingPage() {
  const mockRepos = [
    "novibe/app",
    "novibe/continuity-engine",
    "novibe/weekly-summary-action",
  ];

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Onboarding
          </p>
          <h1 className="mt-3 text-3xl font-semibold">
            Pick a repo to anchor this week
          </h1>
          <p className="mt-2 text-base text-zinc-600">
            Sign in with GitHub or GitLab and select the repo you want to ship
            from this week.
          </p>
        </header>
        {isMockMode ? (
          <div className="inline-flex w-fit items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase text-amber-900">
            Mock data
          </div>
        ) : null}

        <section className="rounded-2xl border border-dashed border-zinc-300 bg-white p-6 text-sm text-zinc-600">
          {isMockMode ? (
            <div className="flex flex-col gap-2">
              <p>Mock repos:</p>
              <ul className="list-disc pl-5 text-zinc-700">
                {mockRepos.map((repo) => (
                  <li key={repo}>{repo}</li>
                ))}
              </ul>
            </div>
          ) : (
            <>Repo picker goes here.</>
          )}
        </section>
      </main>
    </div>
  );
}
