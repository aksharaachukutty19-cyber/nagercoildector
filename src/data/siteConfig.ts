// OWNER: update these values. Nothing here is invented; blanks are intentional.
export const site = {
  name: 'Nagercoil Decors',
  url: 'https://www.example.com', // TODO: real domain (also used in sitemap.xml)
  whatsappNumber: '', // TODO: BUSINESS_WHATSAPP_NUMBER, digits only with country code, e.g. 91XXXXXXXXXX
  instagram: 'https://www.instagram.com/nagercoil_decors/',
  facebook: 'https://www.facebook.com/nagercoil.decors.50',
  location: 'Nagercoil, Tamil Nadu, India',
  mapUrl: '', // TODO: add a verified Google Maps embed URL to show a map
}
export const waLink = (text: string) =>
  `https://wa.me/${site.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`
