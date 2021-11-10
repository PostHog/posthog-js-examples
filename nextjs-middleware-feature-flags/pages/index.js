import TopNav from '../components/TopNav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import APIExamples from '../components/APIExamples'
import SignUpBand from '../components/SignUpBand'

const Index = () => {
  return (
    <div>

        <TopNav />

        <Hero />

        <main>
            <APIExamples />
        </main>

        <SignUpBand />

        <Footer />

    </div>  
  )
}

export default Index