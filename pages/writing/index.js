import fs from 'fs'
import LinkList from '../../components/linklist'
import Layout from '../../components/layout'

export default function Writing({ articles }) {
  return (
    <Layout title="writing">
      <h1>Writing</h1>
      <LinkList links={articles} />
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs
    .readdirSync('pages/writing/')
    .filter((file) => file !== 'index.js')

  const articles = await Promise.all(
    files.map(async (file) => {
      const { title } = await import(`./${file}`)
      return {
        title,
        href: `writing/${file.replace('.js', '')}`
      }
    })
  )

  return {
    props: { articles }
  }
}
