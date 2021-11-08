import Link from 'next/link'

function TopNav() {
    return (
        <nav>
            <ul>
                <li className="logo">
                    <Link href="/">
                        <a>Awesome API</a>
                    </Link>
                </li>
                <li>
                    <Link href="/auth">
                        <a>
                            <button>
                                SignUp
                            </button>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default TopNav