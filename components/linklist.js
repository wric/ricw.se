import Link from 'next/link'

export default function LinkList({ links }) {
  return (
    <div>
      {links.map(({ href, title }) => {
        return (
          <div key={href} className="link">
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </div>
        )
      })}

      <style jsx>{`
        .link:not(:first-of-type) {
          margin-top: 0.75rem;
        }
      `}</style>
    </div>
  )
}
