import Image from 'next/image'
import styles from '../styles/Home.module.css'
import curriculumDesign from '../public/curriculum-design.png'
import progDevOps from '../public/program-development.png'
import instruction from '../public/instruction.png'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout className={styles.container}>

      <section className={styles.hero}>
        <div className={styles.heroWrapper}>
          <h1>Change starts within.</h1>
          <h6>Empower your employees with training that creates results.</h6>
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
