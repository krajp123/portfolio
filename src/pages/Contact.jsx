import { useState } from 'react'
import { ArrowUpRight, Mail, Loader2, CheckCircle2, Link2, Globe, AtSign } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

const initialForm = {
  name: '',
  email: '',
  projectType: '',
  message: '',
}

const socials = [
  { icon: Link2, label: 'GitHub', href: 'https://github.com/yourhandle' },
  { icon: Globe, label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle' },
  { icon: AtSign, label: 'X / Twitter', href: 'https://twitter.com/yourhandle' },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) {
      next.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email'
    }
    if (!form.projectType) next.projectType = 'Please select a project type'
    if (!form.message.trim()) next.message = 'Message cannot be empty'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setForm(initialForm)
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('Error:', err)
      setStatus('error')
      setErrors({ submit: err.message })
    }
  }

  return (
    <section className="contact-page" id="contact">
      <div className="contact-page__inner">
        <div className="contact-page__copy">

          <h1>
            <span>
              Let&apos;s <em className="contact-page__accent">Connect</em>
            </span>
            <span>
              &amp; <em className="contact-page__accent">Create</em>
            </span>
          </h1>

          <p>
            Have a project, a strange idea, or just a good question? My inbox is
            open — I read and reply to every message myself.
          </p>

          <a className="contact-link contact-link--corner" href="mailto:kishan8105@gmail.com">
            <Mail size={20} />
            kishan8105@gmail.com
            <ArrowUpRight size={20} />
          </a>

          <div className="contact-availability">
            <span className="contact-availability__dot" />
            Currently available for new projects
          </div>

          <div className="contact-details">
            <span>
              Based in New York
              <br />
              Working everywhere
            </span>
            <span>
              Usually replies
              <br />
              within 48 hours
            </span>
          </div>

          <div className="contact-socials">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="contact-socials__link"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__row">
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                className={errors.name ? 'contact-form__input--error' : ''}
              />
              {errors.name && <span className="contact-form__error">{errors.name}</span>}
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                className={errors.email ? 'contact-form__input--error' : ''}
              />
              {errors.email && <span className="contact-form__error">{errors.email}</span>}
            </label>
          </div>

          <label>
            Project type
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              aria-invalid={!!errors.projectType}
              className={errors.projectType ? 'contact-form__input--error' : ''}
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="website">Website</option>
              <option value="app">Web App</option>
              <option value="ux">UX Design</option>
              <option value="other">Other</option>
            </select>
            {errors.projectType && <span className="contact-form__error">{errors.projectType}</span>}
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your idea..."
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              className={errors.message ? 'contact-form__input--error' : ''}
            />
            {errors.message && <span className="contact-form__error">{errors.message}</span>}
          </label>

          <button type="submit" className="contact-form__submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? (
              <>
                Sending
                <Loader2 size={18} className="contact-form__spinner" />
              </>
            ) : status === 'success' ? (
              <>
                Sent
                <CheckCircle2 size={18} />
              </>
            ) : (
              <>
                Send inquiry
                <ArrowUpRight size={18} />
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="contact-form__status contact-form__status--success">
              Thanks! I&apos;ll get back to you within 48 hours.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-form__status contact-form__status--error">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}