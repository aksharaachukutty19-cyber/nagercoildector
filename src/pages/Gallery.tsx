import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'
import Img from '../components/Img'
import { categories, gallery } from '../data/gallery'
export default function Gallery() {
  const [cat, setCat] = useState('all'), [open, setOpen] = useState<number | null>(null)
  const list = gallery.filter(g => cat === 'all' || g.cat === cat)
  const closeRef = useRef<HTMLButtonElement>(null), opener = useRef<HTMLElement | null>(null)
  const go = (d: number) => setOpen(i => i === null ? i : (i + d + list.length) % list.length)
  useEffect(() => {
    if (open === null) return
    closeRef.current?.focus()
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'Tab') { e.preventDefault(); closeRef.current?.focus() } }
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k); opener.current?.focus() }
  }, [open === null]) // eslint-disable-line
  const cur = open !== null ? list[open] : null
  return <><SEO title="Wedding Decoration Gallery | Nagercoil Decors" description="Explore wedding stages, mandaps, floral installations and reception styling concepts from Nagercoil Decors." />
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-40"><h1 className="text-5xl md:text-6xl">A Collection of Beautiful Celebrations</h1>
      <p className="mt-4 max-w-xl text-espresso/80">Explore wedding settings, floral installations, stage designs, and decorative details created to inspire your celebration.</p>
      <div role="group" aria-label="Filter designs" className="mt-8 flex flex-wrap gap-2">{categories.map(c => <button key={c.key} aria-pressed={cat === c.key} onClick={() => { setCat(c.key); setOpen(null) }} className={`border px-4 py-2 text-sm ${cat === c.key ? 'border-espresso bg-espresso text-ivory' : 'border-espresso/30 hover:border-gold'}`}>{c.label}</button>)}</div>
      <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">{list.map((g, i) => <li key={g.id} className="mb-4 break-inside-avoid">
        <button className="group block w-full overflow-hidden" aria-label={`Open photo: ${g.alt}`} onClick={e => { opener.current = e.currentTarget; setOpen(i) }}>
          <Img src={g.src} alt={g.alt} w={800} h={i % 3 === 0 ? 1000 : 700} className="w-full transition-transform duration-700 group-hover:scale-105" /></button></li>)}</ul>
      {list.length === 0 && <p className="mt-10">No photos in this category yet.</p>}</section>
    {cur && <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/95 p-4" onClick={() => setOpen(null)}>
      <button ref={closeRef} aria-label="Close" className="absolute right-4 top-4 text-ivory" onClick={() => setOpen(null)}><X /></button>
      <button aria-label="Previous photo" className="absolute left-3 text-ivory" onClick={e => { e.stopPropagation(); go(-1) }}><ChevronLeft size={36} /></button>
      <div onClick={e => e.stopPropagation()} className="max-h-full max-w-5xl"><Img src={cur.src} alt={cur.alt} eager w={1400} h={900} className="max-h-[80vh] w-full" /><p className="mt-3 text-center text-sm text-ivory/80">{cur.alt}</p></div>
      <button aria-label="Next photo" className="absolute right-3 text-ivory" onClick={e => { e.stopPropagation(); go(1) }}><ChevronRight size={36} /></button></div>}</>
}
