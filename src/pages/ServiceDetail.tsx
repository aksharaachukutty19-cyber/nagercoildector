import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import Img from '../components/Img'
import Breadcrumbs from '../components/Breadcrumbs'
import WhatsAppButton from '../components/WhatsAppButton'
import NotFound from './NotFound'
import { getService } from '../data/services'
import { gallery } from '../data/gallery'
export default function ServiceDetail() {
  const s = getService(useParams().slug)
  if (!s) return <NotFound />
  const rel = s.related.map(getService).filter(Boolean)
  const photos = gallery.filter(g => g.id.startsWith(s.image.split('-')[0])).slice(0, 3)
  return <><SEO title={`${s.title} in Nagercoil | Nagercoil Decors`} description={s.seo} />
    <section className="relative bg-espresso pb-20 pt-36 text-ivory"><Img src={`/images/${s.image}.webp`} alt={`${s.title} concept`} eager w={1920} h={900} className="absolute inset-0 h-full w-full opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5"><div className="text-ivory [&_*]:!text-ivory/80"><Breadcrumbs trail={[{ label: 'Services', to: '/services' }, { label: s.title }]} /></div>
        <h1 className="mt-6 max-w-3xl text-5xl md:text-6xl">{s.h1}</h1><p className="mt-5 max-w-xl text-lg text-ivory/85">{s.intro}</p><div className="mt-8"><WhatsAppButton text={`Hello Nagercoil Decors, I would like to discuss ${s.title}.`} /></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-20"><h2 className="text-4xl">Design possibilities</h2><p className="mt-3 text-espresso/75">Concepts to discuss with us, not fixed packages.</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{s.styles.map(x => <li key={x} className="border-t border-gold pt-4 font-serif text-2xl">{x}</li>)}</ul>
      <div className="mt-12 grid gap-4 sm:grid-cols-3">{photos.map(p => <Img key={p.id} src={p.src} alt={p.alt} w={700} h={500} className="w-full" />)}</div></section>
    <section className="bg-beige/60 py-20"><div className="mx-auto max-w-3xl px-5"><h2 className="text-4xl">Frequently asked questions</h2>
      {s.faqs.map(([q, a]) => <div key={q} className="mt-6"><h3 className="text-2xl">{q}</h3><p className="mt-2 text-espresso/80">{a}</p></div>)}</div></section>
    <section className="mx-auto max-w-7xl px-5 py-20"><h2 className="text-3xl">Related services</h2><ul className="mt-5 flex flex-wrap gap-4">{rel.map(r => r && <li key={r.slug}><Link className="btn btn-line" to={`/services/${r.slug}`}>{r.title}</Link></li>)}</ul></section></>
}
