import Link from 'next/link'

function Hero() {
    return (
        <header>
            <h1 className="logo">Awesome API</h1>
            <h2>Instantly build awesome functionality</h2>
            <Link href="/auth">
                <a>
                    <button>
                        SignUp
                    </button>
                </a>
            </Link>
        </header>
    )
}

export default Hero