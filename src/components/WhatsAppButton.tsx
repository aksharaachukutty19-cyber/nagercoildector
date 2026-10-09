import { MessageCircle } from 'lucide-react'
import { waLink } from '../data/siteConfig'
export default function WhatsAppButton({ text = 'Hello Nagercoil Decors, I would like to discuss wedding decoration.', label = 'Enquire on WhatsApp', className = 'btn btn-gold' }: { text?: string; label?: string; className?: string }) {
  return <a href={waLink(text)} target="_blank" rel="noopener noreferrer" className={className}><MessageCircle size={18} aria-hidden />{label}</a>
}
