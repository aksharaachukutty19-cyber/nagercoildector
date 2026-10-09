import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
const steps: [string, string, string][] = [['Step 01', 'Share Your Vision', 'Tell us about your wedding date, location, event type, preferred theme, and inspiration.'], ['Step 02', 'Discuss Your Ideas', 'Talk through your preferred designs, venue requirements, and approximate budget.'], ['Step 03', 'Plan the Details', 'Review the proposed decoration concept, styling preferences, and event arrangements.'], ['Step 04', 'Bring Your Celebration to Life', 'Coordinate the agreed decoration plan for your event.']]
export default function OurProcess() {
  return <><SEO title="Our Process | Nagercoil Decors" description="See how Nagercoil Decors works with you, from sharing your vision to bringing your wedding decoration to life." />
    <section className="mx-auto max-w-4xl px-5 pb-20 pt-40"><h1 className="text-5xl md:text-6xl">From Your First Idea to Your Special Day</h1>
      <ol className="mt-14 border-l border-gold">{steps.map(([n, h, p]) => <li key={n} className="relative pb-12 pl-8"><span className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-gold" /><p className="text-sm text-gold-dark">{n}</p><h2 className="text-3xl">{h}</h2><p className="mt-2 text-espresso/80">{p}</p></li>)}</ol>
      <h2 className="text-3xl">Questions</h2><h3 className="mt-5 text-2xl">How soon should I get in touch?</h3><p className="mt-1 text-espresso/80">As early as you can, so we can discuss your date and venue. We do not promise fixed timelines before understanding your requirements.</p>
      <Link to="/contact" className="btn btn-gold mt-12">Start your enquiry</Link></section></>
}
