export default function Spacer({ marginx }) {
  return (
    <>
      <span className="spacer">·</span>
      <style jsx>{`
        span {
          margin: 0 ${marginx};
          cursor: default;
        }
      `}</style>
    </>
  )
}
