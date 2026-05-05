// App.jsx
// Root component — assembles all page sections in order.

import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import About           from './components/About'
import WhatWeOffer     from './components/WhatWeOffer'
import WhoWeServe      from './components/WhoWeServe'
import Expectations    from './components/Expectations'
import Testimonials    from './components/Testimonials'
import Referrals       from './components/Referrals'
import ApplicationForm from './components/ApplicationForm'
import FAQ             from './components/FAQ'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

export default function App() {
  return (
    <>
      {/* Sticky top navigation */}
      <Navbar />

      {/* Page sections — each has an id matching the nav links */}
      <main>
        <Hero />
        <About />
        <WhatWeOffer />
        <WhoWeServe />
        <Testimonials />
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
