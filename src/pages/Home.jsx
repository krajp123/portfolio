import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

// lucide-react no longer ships brand/logo icons (Github, Linkedin, Instagram,
// etc. were removed as trademarked logos), so these are small local SVGs
// instead of pulling in a second icon package for three glyphs.
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.71 5.4-5.28 5.69.42.36.78 1.08.78 2.18 0 1.57-.02 2.84-.02 3.23 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const STACK = ['React', 'Node.js', 'Express', 'MongoDB']

const SOCIALS = [
  { icon: GithubIcon, href: 'https://github.com/kishan8105', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
]

function useISTClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const formatted = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(new Date())
      setTime(formatted)
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return time
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion()
  const time = useISTClock()

  const fade = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        }

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#0A0B0F] text-[#F5F1E8]"
      id="home"
    >
      {/* Fonts + local keyframes. Move the @import into your global stylesheet
          if you'd rather not ship a <style> tag per-section. */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,400..600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        @keyframes blink { 0%, 45% { opacity: 1; } 50%, 95% { opacity: 0; } 100% { opacity: 1; } }
        .cursor-blink { animation: blink 1.2s steps(1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .cursor-blink { animation: none; }
        }
      `}</style>

      {/* Portrait, full-bleed behind everything */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 1.06 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/profile.jpg"
          alt="Kishan Raj Patel"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
          className="h-full w-full object-cover object-[center_15%] [filter:saturate(0.9)_contrast(1.08)_brightness(0.85)]"
        />
      </motion.div>

      {/* Dark treatment over the portrait so text stays legible anywhere on the page */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0A0B0F] via-[#0A0B0F]/60 to-[#0A0B0F]/30" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0A0B0F] via-[#0A0B0F]/25 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0B0F]/80 via-transparent to-transparent" />

      {/* Ambient glow, tuned to the rim-light already in the portrait */}
      <div className="pointer-events-none absolute right-0 top-1/4 z-[1] h-[500px] w-[500px] rounded-full bg-[#F4B942] opacity-[0.14] blur-[140px] mix-blend-screen sm:h-[700px] sm:w-[700px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 z-[1] h-[300px] w-[300px] rounded-full bg-[#9C2B3A] opacity-[0.12] blur-[120px] mix-blend-screen" />

      {/* Film grain, sits on top of the photo for a premium print feel */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Availability + local time, since clients are picking a timezone to work with */}
      <motion.div
        {...fade(0.1)}
        className="absolute left-6 top-7 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[#F5F1E8]/70 backdrop-blur-md sm:left-10 md:flex"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        Available for freelance · Patna, IN · {time || '--:--'} IST
      </motion.div>

      {/* Hero text, sitting directly on the portrait, anchored to the bottom */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col justify-end gap-8 px-6 pb-20 pt-32 sm:px-10 sm:pb-24">
        <motion.p {...fade(0.05)} className="font-mono text-xs text-[#F4B942]">
          {'// full-stack developer — MERN'}
        </motion.p>

        <div>
          <motion.h1
            {...fade(0.15)}
            className="font-display text-[16vw] font-bold leading-[0.9] tracking-[0.05em] [text-wrap:balance] sm:text-[92px] md:text-[120px] lg:text-[140px]"
            style={{ fontVariationSettings: "'wght' 700" }}
          >
            K i s h a n&nbsp;&nbsp;R a j
            <br />
            P a t e l
          </motion.h1>
          <motion.span
            initial={prefersReducedMotion ? {} : { scaleX: 0 }}
            animate={prefersReducedMotion ? {} : { scaleX: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-6 block h-[3px] w-16 origin-left rounded-full bg-gradient-to-r from-[#F4B942] to-[#9C2B3A]"
          />
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p {...fade(0.35)} className="max-w-md font-body text-[15px] leading-relaxed text-[#F5F1E8]/70">
            I design and ship production-grade web apps end to end — from
            data models to pixel-level interaction — for founders and teams
            who care how software feels to use.
          </motion.p>

          {/* Stack chips — staggered reveal, the page's signature detail */}
          <motion.div
            initial={prefersReducedMotion ? {} : 'hidden'}
            animate={prefersReducedMotion ? {} : 'show'}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
            }}
            className="flex flex-wrap items-center gap-2"
          >
            {STACK.map((tech) => (
              <motion.span
                key={tech}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-[#F5F1E8]/80 backdrop-blur-sm transition hover:border-[#F4B942]/50 hover:text-[#F4B942]"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div {...fade(0.8)} className="flex flex-wrap items-center gap-5 pt-2">
          <a
            href="#works"
            className="group inline-flex items-center gap-2 rounded-full bg-[#F4B942] px-6 py-3 font-body text-sm font-semibold text-[#0A0B0F] transition hover:bg-[#F5C763]"
          >
            View my work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 font-body text-sm font-semibold text-[#F5F1E8]/80 underline decoration-[#F4B942]/40 underline-offset-4 transition hover:text-[#F5F1E8]"
          >
            My story
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <div className="ml-auto flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-[#F5F1E8]/70 backdrop-blur-sm transition hover:border-[#F4B942] hover:text-[#F4B942]"
              >
                <Icon width={15} height={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating intro card — the short "about" note, echoing the caption
          cards in the references without duplicating the photo they use it on.
          Sizes are set inline (not just via Tailwind classes) because some
          projects carry a global h1–h6 style that overrides plain utility

      {/* Scroll cue */}
      <motion.div
        {...fade(1.1)}
        className="absolute bottom-6 left-6 z-20 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5F1E8]/50 sm:left-10"
      >
        <span className="h-px w-8 bg-white/30" />
        Scroll to explore
      </motion.div>
    </section>
  )
}