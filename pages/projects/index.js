import Link from 'next/link'
import Layout from '../../components/layout'
import Spacer from '../../components/spacer'

export default function Projects({ projects }) {
  return (
    <Layout title="projects">
      <h1>Projects</h1>
      <div>
        {projects.map(({ title, href, github }) => {
          return (
            <div key={href} className="project">
              <span className="title">{title}:</span>
              <Link href={href}>
                <a>live</a>
              </Link>
              <Spacer marginx="0.2rem" />
              <Link href={github}>
                <a>github</a>
              </Link>
            </div>
          )
        })}

        <style jsx>{`
          .project:not(:first-of-type) {
            margin-top: 0.75rem;
          }

          .title {
            margin-right: 0.75rem;
          }
        `}</style>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = [
    {
      title: 'This website',
      href: 'https://ricw.se',
      github: 'https://github.com/wric/ricw.se'
    },
    {
      title: 'Tyler',
      href: 'https://tyler.ricw.se',
      github: 'https://github.com/wric/tyler'
    },
    {
      title: 'Is bolaget closed',
      href: 'https://is-bolaget-closed.ricw.se',
      github: 'https://github.com/wric/is-bolaget-closed'
    }
  ]

  return {
    props: { projects }
  }
}
