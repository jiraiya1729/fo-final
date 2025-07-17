import { Ship, Network, TrendingUp } from 'lucide-react'

const features = [
  {
    name: 'Vibeship Initiative',
    description:
      'Connect with fellow founders through curated experiences and exclusive events. Build meaningful relationships that last beyond transactions.',
    href: '#',
    icon: Ship,
  },
  {
    name: 'High-Signal Network',
    description:
      'Join a carefully vetted community of ambitious builders. Every member is thoroughly screened for impact and potential.',
    href: '#',
    icon: Network,
  },
  {
    name: 'Growth Acceleration',
    description:
      'Access mentorship, resources, and partnerships that help you ship faster and scale smarter.',
    href: '#',
    icon: TrendingUp,
  },
]

export default function SimpleThreeColumnWithSmallIcons() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-muted-foreground font-[var(--font-body)]">Community Benefits</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-foreground sm:text-5xl lg:text-balance font-[var(--font-display)]">
            Everything you need to build the future
          </p>
          <p className="mt-6 text-lg/8 text-muted-foreground font-[var(--font-body)]">
            First Order connects ambitious founders with the resources, relationships, and opportunities they need to build exceptional companies.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-foreground font-[var(--font-display)]">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-foreground" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-muted-foreground font-[var(--font-body)]">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm/6 font-semibold text-foreground hover:text-muted-foreground font-[var(--font-body)]">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}