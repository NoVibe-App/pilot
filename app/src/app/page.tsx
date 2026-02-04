export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <header className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            NoVibe.app
          </p>
          <h1 className="text-4xl font-semibold leading-tight">
            Ship weekly, not vibes.
          </h1>
          <p className="max-w-2xl text-lg text-zinc-600">
            NoVibe turns weekly intention into evidence-backed progress and a
            concrete next step. Sign in with GitHub or GitLab and pick a repo to
            start.
          </p>
        </header>

        <section className="flex flex-wrap gap-3">
          <a
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
            href="/api/auth/signin/github"
          >
            Continue with GitHub
          </a>
          <a
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900"
            href="/api/auth/signin/gitlab"
          >
            Continue with GitLab
          </a>
          <a
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900"
            href="/onboarding"
          >
            Preview the flow
          </a>
        </section>

        <section className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="text-base font-semibold">Weekly intention</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Set one sentence for what you plan to ship this week.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="text-base font-semibold">Evidence</h2>
            <p className="mt-2 text-sm text-zinc-600">
              We pull activity from your repo to ground progress in real code.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 className="text-base font-semibold">Next step</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Get a concrete action you can ship in a short session.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
