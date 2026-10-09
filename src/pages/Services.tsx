import SEO from '../components/SEO'
import ServiceCard from '../components/ServiceCard'
import WhatsAppButton from '../components/WhatsAppButton'
import { services } from '../data/services'
export default function Services() {
  return <><SEO title="Wedding Decoration Services in Nagercoil | Nagercoil Decors" description="Wedding stage, mandap, reception, floral, ceiling draping, engagement and outdoor wedding decoration in Nagercoil and Tamil Nadu." />
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-40"><h1 className="max-w-3xl text-5xl md:text-6xl">Wedding Decoration Designed Around You</h1>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.map(s => <ServiceCard key={s.slug} s={s} />)}</div>
      <div className="mt-16"><WhatsAppButton label="Discuss your decoration" /></div></section></>
}
