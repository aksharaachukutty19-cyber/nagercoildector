import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Img from './Img'
import type { Service } from '../data/services'
export default function ServiceCard({ s, big = false }: { s: Service; big?: boolean }) {
  return <Link to={`/services/${s.slug}`} className="group block bg-white/60">
    <div className="overflow-hidden"><Img src={`/images/${s.image}.webp`} alt={`${s.title} concept`} w={800} h={big ? 600 : 520} className="w-full transition-transform duration-700 group-hover:scale-105" /></div>
    <div className="p-5"><h3 className="text-2xl">{s.title}</h3><p className="mt-2 text-sm text-espresso/75">{s.short}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm text-gold-dark">Explore service <ArrowRight size={14} aria-hidden /></span></div>
  </Link>
}
