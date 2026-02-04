export default function OnboardingPage() {
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

        <section className="rounded-2xl border border-dashed border-zinc-300 bg-white p-6 text-sm text-zinc-600">
          Repo picker goes here.
        </section>
      </main>
    </div>
  );
}
