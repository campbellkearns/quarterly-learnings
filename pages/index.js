import Image from 'next/image'
import styles from '../styles/Home.module.css'
import curriculumDesign from '../public/curriculum-design.png'
import progDevOps from '../public/program-development.png'
import instruction from '../public/instruction.png'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <section className='col-span-3 p-4 bg-secondary text-white text-center rounded'>
        <div className=''>
          <h1 className='text-4xl font-serif mb-2'>Change starts within.</h1>
          <h6 className='font-sans mb-4'>Empower your employees with training that creates results.</h6>
          <Link href="/services">
            <p className="bg-primary text-tertiary px-6 py-2 rounded">Learn with us</p>
          </Link>
        </div>
      </section>

      <section className={styles.services}>
        <section className={styles.service}>
          <Image src={progDevOps} width={400} height={300} alt={''}/>
          <aside className={styles.serviceDescription}>
            <h4>Program Development</h4>
            <p>Teams with a continual learning culture perform better. Let&apos;s build your organization&apos;s internal learning capabilities</p>
          </aside>
        </section>
        <section className={styles.service}>
          <aside className={styles.serviceDescription}>
            <h4>Curriculum Design</h4>
            <p>Tell us what you need to learn & we&apos;ll create a custom curriculum plan.</p>
          </aside>
          <Image src={curriculumDesign} width={400} height={300} alt={''} />
        </section>
        <section className={styles.service}>
          <Image src={instruction} width={400} height={300} alt={''} />
          <aside className={styles.serviceDescription}>
            <h4>Instruction</h4>
            <p>We will deliver bespoke, instructor-led training to your teams - virtually or in-person.</p>
          </aside>
        </section>
      </section>

      <div className={styles.testimonials}>
        
        <section className={styles.quotes}>
          
        </section>
      </div>

    </Layout>
  )
}
