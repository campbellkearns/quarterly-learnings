import Link from 'next/link'

export default function Footer(props) {
  return (
    <footer className="col-span-3 grid grid-cols-3 gap-4 text-white">
      <div className="hidden col-span-full sm:col-span-1 p-4 bg-secondary rounded">
        <h3 className="text-xl font-serif mb-2"></h3>
        <ul className="space-y-2">
          <li>
            <Link href="" className="text-accent hover:underline">Workshops</Link>
          </li>
          <li>
            <Link href="" className="text-accent hover:underline">Curriculum Design</Link>
          </li>
          <li>
            <Link href="" className="text-accent hover:underline">Custom Training</Link>
          </li>
        </ul> 
      </div>

      <div className="col-span-full md:col-span-1 md:col-end-1.5 p-4 bg-secondary rounded">
        <h3 className="text-xl font-serif mb-2">Quarterly Learnings</h3>
        <ul className="space-y-2">
          <li><Link href="/"><a className="text-accent hover:underline hidden">About Us</a></Link></li>
          <li><Link href="/contact"><a className="text-accent hover:underline">Contact</a></Link></li>
        </ul>
      </div>

      <div className="col-span-full md:col-span-1 md:col-end-4 p-4 bg-secondary rounded">
        <h3 className="text-xl font-serif mb-2">Email</h3>
        <p className="font-sans mb-2">info@quarterlylearnings.com</p>
        <div className="flex items-center justify-around text-4xl">
          <Link href="/podcast">
            <i className="fas fa-podcast text-accent hover:text-primary"></i>
          </Link>
          <a href="https://www.youtube.com/@quarterlylearnings" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-youtube text-accent hover:text-primary"></i>
          </a>
          <a href="https://www.tiktok.com/@quarterlylearnings" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-tiktok text-accent hover:text-primary"></i>
          </a>
        </div>
      </div>
      <section className="col-span-full text-primary">
        <p>© 2024 Quarterly Learnings. All rights reserved.</p>
      </section>
    </footer>

  )
}