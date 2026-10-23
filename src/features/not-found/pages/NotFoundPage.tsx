import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <section className="space-y-5"><p className="text-cyan-300">404</p><h1 className="text-4xl font-bold text-white">This page does not exist.</h1><Link className="text-cyan-300 hover:text-cyan-200" to="/">Return home</Link></section>
}
