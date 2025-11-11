import React from 'react'

const features = [
  {
    title: 'Tailored Components',
    description:
      'Compose delightful interfaces with a curated set of ready-to-use, themeable React components.'
  },
  {
    title: 'Lightning Fast',
    description:
      'Built on top of Vite and Tailwind, giving you instant feedback and sub-second builds.'
  },
  {
    title: 'Design Tokens',
    description:
      'Ship consistent experiences with design tokens that sync perfectly with your design team.'
  }
]

const testimonials = [
  {
    quote:
      '“Our team shipped a complete redesign in two weeks. The developer experience is simply phenomenal.”',
    name: 'Leah Sanders',
    role: 'Head of Product Design, Orbit Labs'
  },
  {
    quote:
      '“The best starter I have ever used. Everything feels polished, accessible, and lightning quick.”',
    name: 'Karim Patel',
    role: 'Engineering Manager, Flowly'
  }
]

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white'>
      <header className='border-b border-white/10 backdrop-blur'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-6'>
          <span className='text-lg font-semibold tracking-tight'>PulseUI</span>
          <nav className='hidden items-center gap-8 text-sm font-medium md:flex'>
            <a className='text-white/70 transition hover:text-white' href='#features'>
              Features
            </a>
            <a className='text-white/70 transition hover:text-white' href='#showcase'>
              Showcase
            </a>
            <a className='text-white/70 transition hover:text-white' href='#testimonials'>
              Stories
            </a>
            <a className='rounded-full border border-white/20 px-4 py-1.5 text-white transition hover:border-white/40 hover:bg-white/5'>
              Get Access
            </a>
          </nav>
        </div>
      </header>

      <main className='mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16'>
        <section className='grid items-center gap-12 md:grid-cols-[1.2fr,1fr]'>
          <div className='space-y-8'>
            <p className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white/80'>
              <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-400' />
              Tailwind-first design system
            </p>
            <h1 className='text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl'>
              Build interfaces that feel alive.
            </h1>
            <p className='text-lg text-white/70 md:text-xl'>
              PulseUI pairs Tailwind CSS with opinionated components, so your team can design, iterate, and
              launch faster without compromising on brand or accessibility.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button className='rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400'>
                Start your free trial
              </button>
              <button className='rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5'>
                View components
              </button>
            </div>
            <div className='flex items-center gap-6 text-sm text-white/60'>
              <div>
                <span className='text-3xl font-semibold text-white'>2x</span>
                <p>Faster launch cycles</p>
              </div>
              <div>
                <span className='text-3xl font-semibold text-white'>95%</span>
                <p>Customer satisfaction</p>
              </div>
            </div>
          </div>
          <div
            id='showcase'
            className='relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-emerald-600/10 to-black p-6 shadow-2xl shadow-emerald-500/10'
          >
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.3),transparent_55%)]' />
            <div className='relative space-y-5'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span className='h-10 w-10 rounded-full bg-emerald-500/20' />
                  <div>
                    <p className='text-sm font-semibold'>Campaign overview</p>
                    <p className='text-xs text-white/60'>Today · Dashboard</p>
                  </div>
                </div>
                <span className='rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200'>
                  Live
                </span>
              </div>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='rounded-2xl border border-white/5 bg-white/5 p-4'>
                  <p className='text-sm text-white/60'>Conversion rate</p>
                  <p className='mt-2 text-3xl font-semibold text-white'>54%</p>
                  <p className='mt-3 text-xs text-emerald-200'>▲ +12% vs last week</p>
                </div>
                <div className='rounded-2xl border border-white/5 bg-white/5 p-4'>
                  <p className='text-sm text-white/60'>Monthly revenue</p>
                  <p className='mt-2 text-3xl font-semibold text-white'>$82K</p>
                  <p className='mt-3 text-xs text-emerald-200'>▲ +18% vs last month</p>
                </div>
              </div>
              <div className='rounded-2xl border border-white/5 bg-white/5 p-4'>
                <p className='text-sm text-white/60'>Active campaigns</p>
                <div className='mt-3 h-3 w-full overflow-hidden rounded-full bg-black/30'>
                  <div className='h-full w-3/4 rounded-full bg-emerald-400' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='features' className='space-y-8'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/80'>Features</p>
              <h2 className='mt-2 text-3xl font-bold tracking-tight md:text-4xl'>
                Everything you need to stay in flow.
              </h2>
            </div>
            <a className='hidden text-sm font-semibold text-emerald-300 transition hover:text-emerald-200 md:block' href='#'>
              Explore docs →
            </a>
          </div>
          <div className='grid gap-6 md:grid-cols-3'>
            {features.map((feature) => (
              <div
                key={feature.title}
                className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8'
              >
                <div className='absolute inset-0 translate-y-full bg-gradient-to-t from-emerald-500/20 to-transparent transition duration-500 group-hover:translate-y-0' />
                <div className='relative space-y-4'>
                  <span className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-sm font-semibold text-emerald-200'>
                    •
                  </span>
                  <h3 className='text-xl font-semibold'>{feature.title}</h3>
                  <p className='text-sm text-white/70'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby='audience-heading'
          className='relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-900/40 to-black p-12'
        >
          <div className='pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl' />
          <div className='pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl' />
          <div className='relative grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center'>
            <div className='space-y-6'>
              <h2 id='audience-heading' className='text-3xl font-bold md:text-4xl'>
                Crafted for teams that design, build, and iterate together.
              </h2>
              <p className='text-base text-white/70'>
                Streamline collaboration with live previews, instant handoff-ready tokens, and versioned component
                libraries that stay in sync with your production code.
              </p>
              <ul className='space-y-3 text-sm text-white/70'>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 h-2 w-2 rounded-full bg-emerald-400' />
                  Unified design and development workflow from a single source of truth.
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 h-2 w-2 rounded-full bg-emerald-400' />
                  Accessibility baked in with semantic React components and smart defaults.
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 h-2 w-2 rounded-full bg-emerald-400' />
                  Advanced animation presets that keep experiences polished and performant.
                </li>
              </ul>
            </div>
            <div className='rounded-3xl border border-white/10 bg-black/40 p-6 shadow-2xl shadow-emerald-500/10'>
              <p className='text-sm uppercase tracking-[0.2em] text-emerald-300/70'>Integrations</p>
              <div className='mt-6 grid grid-cols-3 gap-4 text-center text-xs font-semibold text-white/70 md:text-sm'>
                {['Figma', 'Notion', 'GitHub', 'Linear', 'Slack', 'Jira'].map((integration) => (
                  <div
                    key={integration}
                    className='rounded-2xl border border-white/10 bg-white/5 px-4 py-6 transition hover:border-emerald-300/40 hover:text-emerald-200'
                  >
                    {integration}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id='testimonials' className='space-y-10'>
          <div className='flex flex-col gap-2 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/80'>Loved by teams</p>
              <h2 className='mt-2 text-3xl font-bold tracking-tight md:text-4xl'>
                Designers and engineers rave about PulseUI.
              </h2>
            </div>
            <p className='text-sm text-white/60 md:max-w-sm'>
              Rated 4.9/5 from over 4,000 teams building high-impact digital products and experiences.
            </p>
          </div>
          <div className='grid gap-6 md:grid-cols-2'>
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className='rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-emerald-500/10'
              >
                <p className='text-lg text-white/80'>{testimonial.quote}</p>
                <figcaption className='mt-6 text-sm text-white/60'>
                  <span className='block font-semibold text-white'>{testimonial.name}</span>
                  {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className='rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/20 via-slate-900 to-black p-10'>
          <div className='flex flex-col gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight md:text-4xl'>Ready to build your next big idea?</h2>
              <p className='mt-2 text-sm text-white/70 md:text-base'>
                Join thousands of product teams shipping world-class experiences with PulseUI.
              </p>
            </div>
            <div className='flex flex-wrap justify-center gap-4'>
              <button className='rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400'>
                Create your workspace
              </button>
              <button className='rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5'>
                Talk to sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className='border-t border-white/10'>
        <div className='mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between'>
          <p>© {new Date().getFullYear()} PulseUI. Crafted with passion.</p>
          <div className='flex flex-wrap gap-4'>
            <a className='transition hover:text-white' href='#'>
              Privacy
            </a>
            <a className='transition hover:text-white' href='#'>
              Terms
            </a>
            <a className='transition hover:text-white' href='#'>
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App