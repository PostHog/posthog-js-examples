const curlPostCmd = `
curl -d '{"key1":"value1", "key2":"value2"\}' \\
     -H "Content-Type: application/json" \\
     -X POST https://api.awesomeapi.dev/data
`

const curlGetCmd = `
curl -d https://api.awesomeapi.dev/data/{id}
`

function APIExamples() {
    return (
        <section className="inner-container">
            <h2>How it works</h2>
            <h3><code>POST</code> something Awesome</h3>
            <pre>
                <code>
                    {curlPostCmd.trim()}
                </code>
            </pre>

            <h3><code>GET</code> something Awesome</h3>
            <pre>
                <code>
                    {curlGetCmd.trim()}
                </code>
            </pre>
        </section>
    )
}

export default APIExamples