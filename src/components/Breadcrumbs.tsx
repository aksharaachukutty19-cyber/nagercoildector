import { Link } from 'react-router-dom'
export default function Breadcrumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return <nav aria-label="Breadcrumb" className="text-sm text-espresso/70"><ol className="flex flex-wrap gap-2">
    <li><Link to="/" className="hover:underline">Home</Link></li>
    {trail.map(t => <li key={t.label} className="flex gap-2"><span aria-hidden>/</span>{t.to ? <Link to={t.to} className="hover:underline">{t.label}</Link> : <span aria-current="page">{t.label}</span>}</li>)}
  </ol></nav>
}
