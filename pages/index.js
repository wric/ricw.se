import { useCallback, useState } from "react";
import Layout from "../components/layout";

export default function Index() {
  const [mailto, setMailto] = useState("#");

  const createMailto = useCallback(() => {
    if (mailto !== "#") return;
    const hash = "d2VzdGJlcmcucmljaGFyZEBnbWFpbC5jb20=";
    const email = Buffer.from(hash, "base64").toString();
    setMailto(`mailto:${email}`);
  }, [mailto]);

  return (
    <Layout>
      <h1>Hello</h1>
      <p>
        My name is Richard this is my personal website. I am a 30-something guy
        living in Gothenburg, Sweden, with an interest in technology and design.
        This is where I plan to dump my creations and maybe write a few words
        about it.
      </p>

      <p>
        I am a MSc in Mechanical Engineering and I currectly work as a sofware
        engineer at an European CRM supplier. I mainly code my projects in
        Python and JS/Node but I do not hold strong opinions about languages — I
        use what is convenient and solves the problem.
      </p>

      <h2>Contact</h2>
      <div className="link">
        <a href="https://github.com/wric">github</a>
      </div>
      <div className="link">
        <a href={mailto} onMouseEnter={() => createMailto()}>
          email
        </a>
      </div>

      <style jsx>{`
        .link:not(:first-of-type) {
          margin-top: 0.75rem;
        }
      `}</style>
    </Layout>
  );
}
