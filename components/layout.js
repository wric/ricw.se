import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title = '' }) {
  const headTitle = title ? `${title} · ricw.se` : 'ricw.se'

  return (
    <div className="container">
      <Head>
        <title>{headTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="nav">
        <Link href="/">
          <a>ricw.se</a>
        </Link>
        <div>
          <Link href="/writing">
            <a>writing</a>
          </Link>
          <span className="spacer">·</span>
          <Link href="/projects">
            <a>projects</a>
          </Link>
        </div>
      </nav>

      <main className="main">{children}</main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .nav {
          font-weight: 600;
          max-width: 42rem;
          width: 100%;
          margin: 2rem 0 0 0;
          display: flex;
          justify-content: space-between;
        }

        .spacer {
          margin: 0 0.75rem 0 0.75rem;
          cursor: default;
        }

        .main {
          max-width: 42rem;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          margin: 6rem 0 3rem 0;
        }

        .logo {
          cursor: default;
        }

        .code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
    </div>
  )
}
