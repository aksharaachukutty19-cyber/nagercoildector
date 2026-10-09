import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/siteConfig'
function setMeta(attr: string, key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.content = content
}
export default function SEO({ title, description }: { title: string; description: string }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const url = site.url + (pathname === '/' ? '/' : pathname)
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title); setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url); setMeta('property', 'og:type', 'website')
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = url
    let ld = document.getElementById('ld-json')
    if (!ld) { ld = document.createElement('script'); ld.id = 'ld-json'; ld.setAttribute('type', 'application/ld+json'); document.head.appendChild(ld) }
    ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: site.name, url: site.url,
      sameAs: [site.instagram, site.facebook], areaServed: 'Tamil Nadu, India', address: { '@type': 'PostalAddress', addressLocality: 'Nagercoil', addressRegion: 'Tamil Nadu', addressCountry: 'IN' } })
  }, [title, description, pathname])
  return null
}
