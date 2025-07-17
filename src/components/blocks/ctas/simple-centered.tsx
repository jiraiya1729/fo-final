export default function SimpleCentered() {
    return (
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl font-[var(--font-display)]">
              Ready to build with the best?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-muted-foreground">
              Join an exclusive collective of ambitious founders who are actively building, shipping, and scaling. Applications are reviewed quarterly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Apply Now
              </a>
              <a href="#" className="text-sm/6 font-semibold text-muted-foreground hover:text-foreground">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }