import { useEffect, useRef, useState } from 'react'

const EXPERIENCE = [
  {
    company: "PlantingSpace",
    role: "Software Engineer",
    period: "2021 – Present",
    description:
      "Fullstack engineering with a focus on product development, working across multiple areas: from the backend (Julia), frontend (Typescript/React) and other internal services (Rust, Julia).",
  },
  {
    company: "Vypr",
    role: "Machine Learning Engineer",
    period: "2019 – 2021",
    description:
      "Leading a series of Machine Learning projects to supplement intelligence from survey data for clients, from training language models for sentiment analysis to pure statistical analysis of results.",
  },
  {
    company: "Warwick University",
    role: "PhD Student",
    period: "2015 – 2019",
    description:
      "A PhD in the area of Stochastic Analysis, focusing on analysing stochastic processes through the lens of classical analysis.",
  },
]

const SKILLS = [
  "typescript",
  "react",
  "rust",
  "reactflow",
  "julia",
  "python",
  "docker",
  "AWS",
  "git",
]

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </div>
  )
}

export function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

        {/* Hero */}
        <section className="relative flex flex-col justify-center min-h-screen py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.08),transparent_55%)] pointer-events-none" />
          <div className="max-w-2xl mx-auto px-6 w-full flex flex-col">
          <p
            className="text-sky-400 font-mono text-sm mb-3 opacity-0"
            style={{ animation: 'fadeUp 0.5s ease 0.1s forwards' }}
          >
            Hi, I'm
          </p>
          <h1
            className="text-5xl font-bold tracking-tight mb-3 opacity-0"
            style={{ animation: 'fadeUp 0.5s ease 0.2s forwards' }}
          >
            Dr. Ifan Johnston
          </h1>
          <p
            className="text-xl text-gray-400 mb-6 opacity-0"
            style={{ animation: 'fadeUp 0.5s ease 0.3s forwards' }}
          >
            Software Engineer · Full-Stack Developer
          </p>
          <p
            className="text-gray-400 leading-relaxed border-l-2 border-gray-800 pl-4 opacity-0"
            style={{ animation: 'fadeUp 0.5s ease 0.4s forwards' }}
          >
            Software engineering enthusiast, game enjoyer, music fanatic.
          </p>
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-6">

        {/* Experience */}
        <section className="py-8">
          <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-8">
            Experience
          </h2>
          <div className="space-y-4">
            {EXPERIENCE.map((job, i) => (
              <FadeIn key={job.company} delay={i * 100}>
                <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="font-semibold">{job.role}</h3>
                    <span className="text-xs text-gray-500 font-mono whitespace-nowrap pt-0.5">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sky-400 text-sm mb-3">{job.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="py-16">
          <h2 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-8">
            Skills
          </h2>
          <div className="flex flex-wrap gap-x-2 gap-y-3">
            {SKILLS.map((skill, i) => (
              <FadeIn key={skill} delay={i * 60}>
                <span className="px-3 py-1.5 rounded-md border border-gray-800 bg-gray-900 text-sm text-gray-300 font-mono">
                  {skill}
                </span>
              </FadeIn>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
