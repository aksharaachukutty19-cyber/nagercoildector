import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ChevronDown, Instagram, Facebook, Menu, X } from 'lucide-react'
import { services } from '../data/services'
import { site } from '../data/siteConfig'
import WhatsAppButton from './WhatsAppButton'

const Logo = ({ light }: { light?: boolean }) => <Link to="/" aria-label="Nagercoil Decors home" className={`leading-none ${light ? 'text-ivory' : ''}`}>
  <span className="block font-serif text-3xl italic">Nagercoil</span><span className="block text-[0.65rem] tracking-[0.35em] text-gold">DECORS</span></Link>
const links = [['/', 'Home'], ['/about', 'About'], ['/gallery', 'Gallery'], ['/our-process', 'Our Process'], ['/contact', 'Contact']]

function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false), [dd, setDd] = useState(false)
  useEffect(() => { const f = () => setScrolled(window.scrollY > 40); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  useEffect(() => { setOpen(false); setDd(false); window.scrollTo(0, 0) }, [pathname])
  useEffect(() => { const k = (e: KeyboardEvent) => { if (e.key === 'Escape') { setDd(false); setOpen(false) } }; window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  const solid = scrolled || pathname !== '/' || open
  const cls = ({ isActive }: { isActive: boolean }) => `py-1 border-b ${isActive ? 'border-gold' : 'border-transparent hover:border-gold/60'}`
  const item = (to: string, label: string) => <NavLink key={to} to={to} end={to === '/'} className={cls}>{label}</NavLink>
  return <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${solid ? 'bg-ivory/95 text-espresso shadow-sm backdrop-blur' : 'bg-gradient-to-b from-black/60 to-transparent text-ivory'}`}>
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
      <Logo light={!solid} />
      <nav aria-label="Main" className="hidden items-center gap-8 text-sm lg:flex">
        {item('/', 'Home')}{item('/about', 'About')}
        <div className="relative" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
          <button aria-expanded={dd} aria-haspopup="true" onClick={() => setDd(!dd)} className="flex items-center gap-1 py-1">Services <ChevronDown size={14} aria-hidden /></button>
          {dd && <div className="absolute left-0 top-full w-64 bg-ivory p-3 text-espresso shadow-xl">
            <Link to="/services" className="block px-3 py-2 font-medium hover:bg-beige">All Services</Link>
            {services.map(s => <Link key={s.slug} to={`/services/${s.slug}`} className="block px-3 py-2 text-sm hover:bg-beige">{s.title}</Link>)}</div>}
        </div>
        {links.slice(2).map(([to, l]) => item(to, l))}
      </nav>
      <Link to="/contact" className="btn btn-gold hidden lg:inline-flex">Plan Your Wedding</Link>
      <button className="lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav aria-label="Mobile" className="max-h-[80vh] overflow-y-auto bg-ivory px-5 pb-6 text-espresso lg:hidden">
      <ul className="flex flex-col gap-1 text-lg">
        {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services']].map(([t, l]) => <li key={t}><NavLink to={t} end={t === '/'} className="block py-2">{l}</NavLink></li>)}
        {services.map(s => <li key={s.slug}><Link to={`/services/${s.slug}`} className="block py-1 pl-4 text-base text-espresso/75">{s.title}</Link></li>)}
        {links.slice(2).map(([t, l]) => <li key={t}><NavLink to={t} className="block py-2">{l}</NavLink></li>)}
      </ul><Link to="/contact" className="btn btn-gold mt-4">Plan Your Wedding</Link></nav>}
  </header>
}

function Footer() {
  return <footer className="bg-espresso text-ivory"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
    <div><Logo light /><p className="mt-4 text-sm text-ivory/75">Wedding and event decoration in Nagercoil, Tamil Nadu, designed around your vision.</p>
      <div className="mt-4 flex gap-4"><a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a><a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a></div></div>
    <div><h2 className="font-serif text-xl text-gold">Explore</h2><ul className="mt-3 space-y-2 text-sm">{links.map(([t, l]) => <li key={t}><Link to={t} className="hover:text-gold">{l}</Link></li>)}<li><Link to="/services" className="hover:text-gold">Services</Link></li></ul></div>
    <div className="md:col-span-1"><h2 className="font-serif text-xl text-gold">Services</h2><ul className="mt-3 space-y-2 text-sm">{services.map(s => <li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-gold">{s.title}</Link></li>)}</ul></div>
    <div><h2 className="font-serif text-xl text-gold">Enquire</h2><p className="mt-3 text-sm text-ivory/75">{site.location}</p><div className="mt-4"><WhatsAppButton label="WhatsApp Enquiry" /></div></div>
  </div><p className="border-t border-white/10 py-5 text-center text-xs text-ivory/60">© {new Date().getFullYear()} Nagercoil Decors. All rights reserved.</p></footer>
}
export default function Layout() {
  return <><a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:bg-gold focus:p-2">Skip to content</a><Header /><main id="main"><Outlet /></main><Footer /></>
}
