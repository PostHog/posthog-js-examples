import Link from 'next/link'

const curlPostCmd = `
curl -d '{"key1":"value1", "key2":"value2"\}' \\
     -H "Content-Type: application/json" \\
     -X POST https://api.awesomeapi.dev/data
`

const curlGetCmd = `
curl -d https://api.awesomeapi.dev/data/{id}
`

const Index = () => {
  return (
    <div style={{ maxWidth: '520px', margin: '96px auto', fontSize: "14px" }}>

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

        <main>
            <h2><code>POST</code> something Awesome</h2>
            <pre>
                <code>
                    {curlPostCmd.trim()}
                </code>
            </pre>

            <h2><code>GET</code> something Awesome</h2>
            <pre>
                <code>
                    {curlGetCmd.trim()}
                </code>
            </pre>
        </main>

        <footer>©️Awesome API 2021</footer>

    </div>  
  )
}

export default Index