import { Instagram, Facebook, MapPin } from 'lucide-react'
import SEO from '../components/SEO'
import EnquiryForm from '../components/EnquiryForm'
import WhatsAppButton from '../components/WhatsAppButton'
import { site } from '../data/siteConfig'
export default function Contact() {
  return <><SEO title="Contact Nagercoil Decors | Wedding Decoration Enquiry" description="Share your event details and enquire about wedding decoration in Nagercoil via WhatsApp." />
    <section className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 pt-40 lg:grid-cols-[2fr_1fr]">
      <div><h1 className="text-5xl md:text-6xl">Let's Plan Your Perfect Celebration</h1><p className="mb-10 mt-4 text-espresso/80">Tell us a little about your event, and let's discuss decoration ideas that suit your vision.</p><EnquiryForm /></div>
      <aside className="space-y-5"><h2 className="text-3xl">Reach us directly</h2><WhatsAppButton label="WhatsApp us" />
        <p className="flex items-center gap-2"><MapPin size={18} aria-hidden />{site.location}</p>
        <a className="flex items-center gap-2 hover:text-gold-dark" href={site.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18} aria-hidden />Instagram</a>
        <a className="flex items-center gap-2 hover:text-gold-dark" href={site.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={18} aria-hidden />Facebook</a>
        {site.mapUrl && <iframe title="Map" src={site.mapUrl} loading="lazy" className="h-64 w-full border-0" />}</aside></section></>
}
