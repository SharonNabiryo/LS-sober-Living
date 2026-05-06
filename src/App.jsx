import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import TrustStrip      from './components/TrustStrip'
import About           from './components/About'
import MissionVision   from './components/MissionVision'
import HomeFeel        from './components/HomeFeel'
import WhatWeOffer     from './components/WhatWeOffer'
import WhoWeServe      from './components/WhoWeServe'
import TrustSection    from './components/TrustSection'
import CTAStrip        from './components/CTAStrip'
import Timeline        from './components/Timeline'
import ExperienceCards from './components/ExperienceCards'
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
        <TrustStrip />
        <About />
        <MissionVision />
        <HomeFeel />
        <WhatWeOffer />
        <WhoWeServe />
        <TrustSection />
        <CTAStrip />
        <Timeline />
        <ExperienceCards />
        <Expectations />
        <Referrals />
        <ApplicationForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
