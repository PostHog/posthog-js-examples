import Link from 'next/link'

function Hero() {
    return (
        <header className="inner-container hero">
            <h1>Craft Awesome APIs</h1>
            <h2>Build / Deploy / Scale</h2>
            <Link href="/auth">
                <a>
                    <button className="cta-btn">
                        Sign Up
                    </button>
                </a>
            </Link>
        </header>
    )
}

export default Hero