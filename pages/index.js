import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logoPlaceholder from '../public/logo-placeholder.svg'
import curriculumDesign from '../public/curriculum-design.png'
import progDevOps from '../public/program-development.png'
import instruction from '../public/instruction.png'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Quarterly Learnings</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.navWrapper}>
        <nav className={styles.navbar}>
          <Image src={logoPlaceholder} />
          <ul className={styles.navLinks}>
            <li>About</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Blog</li>
            <li>Podcast</li>
          </ul>
        </nav>
      </div>

      <div className={styles.container}>
        <section className={styles.hero}>
          <div>
            <h1>Change starts within.</h1>
            <h6>Empower your employees with training that creates results.</h6>
            <button>What should this button do?</button>
          </div>
        </section>
      </div>

      <div className={styles.main}>
        <section className={styles.service}>
          <Image src={progDevOps} width={400} height={300} />
          <aside className={styles.serviceDescription}>
            <h4>Program Development</h4>
            <p>Teams with a continual learning culture perform better. Let's build your organization's internal learning capabilities</p>
          </aside>
        </section>
        <section className={styles.service}>
          <aside className={styles.serviceDescription}>
            <h4>Curriculum Design</h4>
            <p>Tell us what you need to learn & we'll create a custom curriculum plan.</p>
          </aside>
          <Image src={curriculumDesign} width={400} height={300} />
        </section>
        <section className={styles.service}>
          <Image src={instruction} width={400} height={300} />
          <aside className={styles.serviceDescription}>
            <h4>Instruction</h4>
            <p>We will deliver bespoke, instructor-led training to your teams - virtually or in-person.</p>
          </aside>
        </section>
      </div>

      <div className={styles.main}>
        <h1>What are people saying?</h1>
        <section className={styles.testimonials}>
          <article className={styles.card}>
            <aside className={styles.quote}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque suscipit enim error quia! Nihil amet cumque qui ad?</aside>
            <div className={styles.card}>
              <Image src='/fro.jpg' width={75} height={75} />
              <div>
                <h3>Lonnie Liston Smith</h3>
                <small>Lead Beat Keeper</small>
              </div>
            </div>
          </article>
          <article className={styles.card}>
            <aside className={styles.quote}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque suscipit enim error quia! Nihil amet cumque qui ad?</aside>
            <div className={styles.card}>
              <Image src='/fro.jpg' width={75} height={75} />
              <div>
                <h3>Lonnie Liston Smith</h3>
                <small>Lead Beat Keeper</small>
              </div>
            </div>
          </article>
          <article className={styles.card}>
            <aside className={styles.quote}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque suscipit enim error quia! Nihil amet cumque qui ad?</aside>
            <div className={styles.card}>
              <Image src='/fro.jpg' width={75} height={75} />
              <div>
                <h3>Lonnie Liston Smith</h3>
                <small>Lead Beat Keeper</small>
              </div>
            </div>
          </article>
        </section>
      </div>

      <footer className={styles.footer}>
        text in the footer
      </footer>

    </div>
  )
}
