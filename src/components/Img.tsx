import { useState } from 'react'
// Shows the photo from /public/images; falls back to a labelled placeholder until a real file is added.
export default function Img({ src, alt, className = '', w = 1200, h = 800, eager = false }: { src: string; alt: string; className?: string; w?: number; h?: number; eager?: boolean }) {
  const [bad, setBad] = useState(false)
  if (bad) return <div role="img" aria-label={alt} style={{ aspectRatio: `${w}/${h}` }} className={`flex items-end bg-gradient-to-br from-beige to-[#cdb892] p-3 text-xs text-espresso/70 ${className}`}>Photo placeholder: replace {src}</div>
  return <img src={src} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} onError={() => setBad(true)} className={`object-cover ${className}`} />
}
