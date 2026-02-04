import { isMockMode } from "@/lib/mock";

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header>
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Weekly Review
          </p>
          <h1 className="mt-3 text-3xl font-semibold">
            Here’s what moved forward
          </h1>
          <p className="mt-2 text-base text-zinc-600">
            Evidence is pulled from GitHub or GitLab. Edit the summary if
            needed.
          </p>
        </header>
        {isMockMode ? (
          <div className="inline-flex w-fit items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase text-amber-900">
            Mock data
          </div>
        ) : null}

        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="flex flex-col gap-4 text-sm text-zinc-600">
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
                <>Intention summary goes here.</>
              )}
            </div>
            <div className="rounded-xl border border-dashed border-zinc-300 p-4">
              {isMockMode ? (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-zinc-500">
                    Evidence
                  </p>
                  <ul className="list-disc space-y-1 pl-5 text-zinc-800">
                    <li>3 commits on novibe/app</li>
                    <li>1 PR opened: “Add repo picker UI”</li>
                    <li>2 active days</li>
                  </ul>
                </div>
              ) : (
                <>Evidence list goes here.</>
              )}
            </div>
            <div className="rounded-xl border border-dashed border-zinc-300 p-4">
              {isMockMode ? (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-zinc-500">
                    Continuity summary
                  </p>
                  <p className="text-zinc-800">
                    You built the repo picker UI and moved onboarding forward.
                    One more step to persist the selection.
                  </p>
                </div>
              ) : (
                <>Continuity summary goes here.</>
              )}
            </div>
            <div className="rounded-xl border border-dashed border-zinc-300 p-4">
              {isMockMode ? (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase text-zinc-500">
                    Next step
                  </p>
                  <p className="text-zinc-800">
                    Save the selected repo to the Project table and show it on
                    the check-in page.
                  </p>
                </div>
              ) : (
                <>Next step goes here.</>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
