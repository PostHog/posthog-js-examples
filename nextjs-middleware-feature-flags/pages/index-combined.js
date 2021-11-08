import TopNav from '../components/TopNav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import BusinessBenefits from '../components/BusinessBenefits'
import APIExamples from '../components/APIExamples'
import SignUpBand from '../components/SignUpBand'

const Index = () => {
  return (
    <div style={{ maxWidth: '520px', margin: '96px auto', fontSize: "14px" }}>

        <TopNav />

        <Hero />

        <main>
            <APIExamples />

            <SignUpBand />

            <BusinessBenefits />
        </main>

        <SignUpBand />

        <Footer />

    </div>  
  )
}

export default Index