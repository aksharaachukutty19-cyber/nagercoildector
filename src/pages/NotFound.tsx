import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
export default function NotFound() {
  return <section className="px-5 py-48 text-center"><SEO title="Page not found | Nagercoil Decors" description="This page could not be found." /><h1 className="text-5xl">This page could not be found</h1><p className="mt-4">The link may be wrong or the page may have moved.</p><Link to="/" className="btn btn-gold mt-8">Back to Home</Link></section>
}
