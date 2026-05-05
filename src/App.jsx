import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import About           from './components/About'
import WhatWeOffer     from './components/WhatWeOffer'
import WhoWeServe      from './components/WhoWeServe'
import TrustSection    from './components/TrustSection'
import CTAStrip        from './components/CTAStrip'
import Testimonials    from './components/Testimonials'
import Expectations    from './components/Expectations'
import Referrals       from './components/Referrals'
import ApplicationForm from './components/ApplicationForm'
import FAQ             from './components/FAQ'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeOffer />
        <WhoWeServe />
        <TrustSection />
        <CTAStrip />
        <Testimonials />
        <Expectations />
        <Referrals />
        <ApplicationForm />
        <FAQ />
        <Contact />
        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
