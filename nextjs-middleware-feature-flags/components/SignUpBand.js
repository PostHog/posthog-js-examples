import Link from 'next/link'

function SignUpBand() {
    return (
        <section className="signup-band">
            <Link href="/auth">
                <a>
                    <button>
                        SignUp
                    </button>
                </a>
            </Link>
        </section>
    )
}

export default SignUpBand