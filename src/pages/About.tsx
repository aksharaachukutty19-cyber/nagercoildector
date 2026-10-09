import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Img from '../components/Img'
const blocks: [string, string, string][] = [
  ['About Nagercoil Decors', 'Nagercoil Decors is a wedding and event decoration studio based in Nagercoil, Tamil Nadu, focused on personalised wedding decoration and thoughtfully styled event spaces.', 'stage-1'],
  ['Our Design Philosophy', 'Flowers, fabric and light work best together. We start from your story and let each element earn its place.', 'floral-1'],
  ['Our Approach to Wedding Decoration', 'We listen first, then propose a concept that suits your venue, ceremony and budget before the details are finalised.', 'mandap-1'],
  ['Traditional Elegance Meets Contemporary Design', 'Rich traditional backdrops and clean modern lines can sit side by side. We help you choose the balance.', 'reception-1'],
  ['Personalized Event Styling', 'From engagements to receptions, every setting is customised rather than repeated.', 'ceiling-1']]
export default function About() {
  return <>
    <SEO title="About Nagercoil Decors | Wedding Decoration Studio" description="Learn about Nagercoil Decors, a Tamil Nadu wedding decoration studio focused on personalised styling and thoughtful design." />
    <section className="bg-beige px-5 pb-20 pt-40"><h1 className="mx-auto max-w-4xl text-5xl md:text-7xl">Every Celebration Deserves Its Own Signature</h1></section>
    {blocks.map(([h, p, img], i) => <section key={h} className={`mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <Img src={`/images/${img}.webp`} alt={h} w={900} h={650} className="w-full" /><div><h2 className="text-3xl md:text-4xl">{h}</h2><p className="mt-4 max-w-prose text-espresso/80">{p}</p></div></section>)}
    <section className="bg-espresso py-20 text-center text-ivory"><h2 className="text-4xl">Tell us about your celebration</h2><Link to="/contact" className="btn btn-gold mt-8">Plan Your Wedding</Link></section>
  </>
}
