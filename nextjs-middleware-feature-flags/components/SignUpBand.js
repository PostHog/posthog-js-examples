import Link from 'next/link'

function SignUpBand() {
    return (
        <section className="signup-band">
            <Link href="/auth">
                <a>
                    <button className="cta-btn cta-btn-alt">
                        Sign Up
                    </button>
                </a>
            </Link>
        </section>
    )
}

export default SignUpBand