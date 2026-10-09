import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import SEO from '../components/SEO'
import Img from '../components/Img'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import { gallery } from '../data/gallery'
import { site } from '../data/siteConfig'
const why = ['Personalized decoration concepts', 'Attention to detail', 'Thoughtful floral and lighting combinations', 'Traditional and contemporary styling options', 'Customized event concepts']
const steps = ['Share your vision', 'Discuss your ideas', 'Plan the details', 'Bring your celebration to life']
export default function Home() {
  return <>
    <SEO title="Wedding Decorators in Nagercoil | Nagercoil Decors" description="Nagercoil Decors designs wedding stages, mandaps, floral installations and reception decor in Nagercoil and across Tamil Nadu." />
    <section className="relative flex min-h-[92vh] items-end bg-espresso text-ivory">
      <Img src="/images/hero.webp" alt="Elegant wedding stage with white flowers, gold accents and chandeliers" eager w={1920} h={1080} className="absolute inset-0 h-full w-full opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40">
        <p className="text-sm tracking-widest text-gold">Wedding &amp; Event Decor | Nagercoil, Tamil Nadu</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">Where Every Wedding Becomes a Masterpiece</h1>
        <p className="mt-6 max-w-xl text-lg text-ivory/85">Thoughtfully designed wedding decorations, breathtaking floral installations, and unforgettable celebrations crafted around your vision.</p>
        <div className="mt-8 flex flex-wrap gap-4"><Link to="/contact" className="btn btn-gold">Plan Your Wedding</Link><Link to="/gallery" className="btn btn-line">Explore Our Designs</Link></div>
      </div></section>
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2">
      <Img src="/images/stage-1.webp" alt="Wedding hall styled with florals, drapes and lanterns" w={900} h={700} className="w-full" />
      <div className="self-center"><h2 className="text-4xl md:text-5xl">Creating Celebrations That Stay With You Forever</h2>
        <p className="mt-5 max-w-prose text-espresso/80">Nagercoil Decors combines flowers, fabrics, lighting and thoughtful styling to transform wedding venues, shaped around your style, traditions and vision.</p>
        <Link to="/about" className="mt-6 inline-block text-gold-dark underline underline-offset-4">Our story</Link></div></section>
    <section className="bg-beige/60 py-24"><div className="mx-auto max-w-7xl px-5"><h2 className="text-4xl md:text-5xl">Our Popular Services</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.slice(0, 6).map(s => <ServiceCard key={s.slug} s={s} />)}</div>
      <Link to="/services" className="btn btn-line mt-10">View all services</Link></div></section>
    <section className="mx-auto max-w-7xl px-5 py-24"><h2 className="text-4xl md:text-5xl">A Collection of Beautiful Celebrations</h2>
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{gallery.slice(0, 8).map(g => <Img key={g.id} src={g.src} alt={g.alt} w={600} h={600} className="w-full" />)}</div>
      <Link to="/gallery" className="btn btn-line mt-10">View gallery</Link></section>
    <section className="relative bg-espresso py-32 text-center text-ivory"><Img src="/images/signature.webp" alt="Wedding hall with draped fabric and warm lighting" w={1920} h={800} className="absolute inset-0 h-full w-full opacity-40" />
      <h2 className="relative mx-auto max-w-3xl px-5 text-4xl md:text-6xl">Your Vision. Our Creativity. An Unforgettable Setting.</h2></section>
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-3">
      <div><h2 className="text-3xl">Why Choose Nagercoil Decors</h2><ul className="mt-5 space-y-3">{why.map(w => <li key={w} className="border-b border-espresso/15 pb-3">{w}</li>)}</ul></div>
      <div><h2 className="text-3xl">From Vision to Celebration</h2><ol className="mt-5 space-y-3">{steps.map((s, i) => <li key={s} className="flex gap-3 border-b border-espresso/15 pb-3"><span className="font-serif text-gold-dark">{i + 1}</span>{s}</li>)}</ol><Link to="/our-process" className="mt-5 inline-block text-gold-dark underline underline-offset-4">Our process</Link></div>
      <div><h2 className="text-3xl">Follow Our Wedding Stories</h2><p className="mt-5 flex items-center gap-2"><Instagram size={18} aria-hidden />@nagercoil_decors</p><a className="btn btn-line mt-5" href={site.instagram} target="_blank" rel="noopener noreferrer">Visit Instagram</a></div></section>
    <section className="bg-beige py-20 text-center"><h2 className="mx-auto max-w-2xl px-5 text-4xl">Let's Create Something Beautiful for Your Big Day</h2><Link to="/contact" className="btn btn-gold mt-8">Discuss Your Wedding</Link></section>
  </>
}
