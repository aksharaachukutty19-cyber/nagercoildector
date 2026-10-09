import { useState, type FormEvent } from 'react'
import { waLink } from '../data/siteConfig'
type F = { name: string; phone: string; email: string; type: string; date: string; venue: string; style: string; budget: string; message: string }
const empty: F = { name: '', phone: '', email: '', type: '', date: '', venue: '', style: '', budget: '', message: '' }
export const buildMessage = (f: F) => ['Hello Nagercoil Decors, I would like to enquire about decoration.', `Name: ${f.name}`, `Phone: ${f.phone}`, f.email && `Email: ${f.email}`, `Event: ${f.type}`, f.date && `Date: ${f.date}`, `Venue: ${f.venue}`, f.style && `Style: ${f.style}`, f.budget && `Budget: ${f.budget}`, f.message && `Message: ${f.message}`].filter(Boolean).join('\n')
export default function EnquiryForm() {
  const [f, setF] = useState<F>(empty), [err, setErr] = useState<Partial<Record<keyof F, string>>>({}), [busy, setBusy] = useState(false), [done, setDone] = useState(false)
  const set = (k: keyof F) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value })
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const x: typeof err = {}
    if (!f.name.trim()) x.name = 'Enter your full name.'
    if (f.phone.replace(/\D/g, '').length < 8) x.phone = 'Enter a valid phone number.'
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) x.email = 'Enter a valid email address.'
    if (!f.type) x.type = 'Choose an event type.'
    if (!f.venue.trim()) x.venue = 'Enter the venue or location.'
    setErr(x); if (Object.keys(x).length) return
    setBusy(true); window.open(waLink(buildMessage(f)), '_blank', 'noopener'); setBusy(false); setDone(true)
  }
  const field = 'mt-1 w-full border border-espresso/30 bg-white px-3 py-3 text-base'
  const L = ({ k, label, req, children }: { k: keyof F; label: string; req?: boolean; children: React.ReactNode }) => <div><label htmlFor={k} className="text-sm font-medium">{label}{req ? ' *' : ' (optional)'}</label>{children}{err[k] && <p id={`${k}-e`} role="alert" className="mt-1 text-sm text-red-700">{err[k]}</p>}</div>
  const a = (k: keyof F) => ({ id: k, name: k, value: f[k], onChange: set(k), className: field, 'aria-invalid': !!err[k], 'aria-describedby': err[k] ? `${k}-e` : undefined })
  return <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
    <L k="name" label="Full name" req><input {...a('name')} autoComplete="name" /></L>
    <L k="phone" label="Phone number" req><input {...a('phone')} type="tel" inputMode="tel" autoComplete="tel" /></L>
    <L k="email" label="Email"><input {...a('email')} type="email" autoComplete="email" /></L>
    <L k="type" label="Event type" req><select {...a('type')}><option value="">Select</option>{['Wedding', 'Reception', 'Engagement', 'Outdoor wedding', 'Other'].map(o => <option key={o}>{o}</option>)}</select></L>
    <L k="date" label="Event date"><input {...a('date')} type="date" /></L>
    <L k="venue" label="Venue or location" req><input {...a('venue')} /></L>
    <L k="style" label="Preferred decoration style"><input {...a('style')} /></L>
    <L k="budget" label="Approximate budget"><input {...a('budget')} inputMode="text" /></L>
    <div className="sm:col-span-2"><L k="message" label="Additional message"><textarea {...a('message')} rows={4} /></L></div>
    <div className="sm:col-span-2"><button className="btn btn-gold" disabled={busy}>{busy ? 'Opening WhatsApp…' : 'Continue to WhatsApp'}</button>
      <p className="mt-3 text-sm text-espresso/75">This opens WhatsApp with your details filled in. Your enquiry is only sent once you press send in WhatsApp.</p>
      {done && <p role="status" className="mt-3 text-sm text-gold-dark">WhatsApp should have opened. If it did not, allow pop-ups and try again.</p>}</div>
  </form>
}
