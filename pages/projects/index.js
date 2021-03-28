import Layout from '../../components/layout'
import LinkList from '../../components/linklist'

export default function Projects() {
  const projects = [
    {
      title: 'This website',
      href: 'https://github.com/wric/ricw.se'
    }
  ]

  return (
    <Layout title="projects">
      <h1>Projects</h1>
      <LinkList links={projects} />
    </Layout>
  )
}
