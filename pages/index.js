import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>s33d Games - Where Games Grow</title>
        <meta name="description" content="s33d Games - Where games grow. Contact us to bring your game concepts to life." />
        <meta property="og:title" content="s33d Games - Where Games Grow" />
        <meta property="og:description" content="Contact s33d Games to bring your game concepts to life" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://s33d.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
