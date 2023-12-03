import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import { projects } from "../lib/projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kyunghyun Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center my-5 pt-12">
        <Image
          src="/coding-cat copy.jpg"
          alt="my-cat"
          width={315}
          height={350}
          className="rounded-[120px]"
        />
      </div>
      <Container title="About">
        Hi, I&apos;m Kyunghyun Park.{" "}
        {/* I&apos;m interested in ML, Web, Crypto. If
        you want to do some project with me, feel free to contact me. I learn
        new programming language very quickly and love music, games and coding. */}
        Feel free to contact me. <br />
        <svg
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
          className="inline-block mr-2"
        >
          <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
        South Korea <br />
        <svg
          viewBox="0 0 256 256"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
          className="inline-block mr-2"
        >
          <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
              d="M 75.546 78.738 H 14.455 C 6.484 78.738 0 72.254 0 64.283 V 25.716 c 0 -7.97 6.485 -14.455 14.455 -14.455 h 61.091 c 7.97 0 14.454 6.485 14.454 14.455 v 38.567 C 90 72.254 83.516 78.738 75.546 78.738 z M 14.455 15.488 c -5.64 0 -10.228 4.588 -10.228 10.228 v 38.567 c 0 5.64 4.588 10.229 10.228 10.229 h 61.091 c 5.64 0 10.228 -4.589 10.228 -10.229 V 25.716 c 0 -5.64 -4.588 -10.228 -10.228 -10.228 H 14.455 z"
              transform=" matrix(1 0 0 1 0 0) "
            />
            <path
              d="M 11.044 25.917 C 21.848 36.445 32.652 46.972 43.456 57.5 c 2.014 1.962 5.105 -1.122 3.088 -3.088 C 35.74 43.885 24.936 33.357 14.132 22.83 C 12.118 20.867 9.027 23.952 11.044 25.917 L 11.044 25.917 z"
              transform=" matrix(1 0 0 1 0 0) "
            />
            <path
              d="M 46.544 57.5 c 10.804 -10.527 21.608 -21.055 32.412 -31.582 c 2.016 -1.965 -1.073 -5.051 -3.088 -3.088 C 65.064 33.357 54.26 43.885 43.456 54.412 C 41.44 56.377 44.529 59.463 46.544 57.5 L 46.544 57.5 z"
              transform=" matrix(1 0 0 1 0 0) "
            />
            <path
              d="M 78.837 64.952 c -7.189 -6.818 -14.379 -13.635 -21.568 -20.453 c -2.039 -1.933 -5.132 1.149 -3.088 3.088 c 7.189 6.818 14.379 13.635 21.568 20.453 C 77.788 69.973 80.881 66.89 78.837 64.952 L 78.837 64.952 z"
              transform=" matrix(1 0 0 1 0 0) "
            />
            <path
              d="M 14.446 68.039 c 7.189 -6.818 14.379 -13.635 21.568 -20.453 c 2.043 -1.938 -1.048 -5.022 -3.088 -3.088 c -7.189 6.818 -14.379 13.635 -21.568 20.453 C 9.315 66.889 12.406 69.974 14.446 68.039 L 14.446 68.039 z"
              transform=" matrix(1 0 0 1 0 0) "
            />
          </g>
        </svg>
        joshuahp0403@gmail.com <br />
      </Container>
      <Container title="Education">
        <ul>
          <li>(2020~) Kaist CS</li>
          <li>(2017~2019) GSHS 35th</li>
        </ul>
      </Container>
      <Container title="Programming Skills">
        <p className="mb-4">
          I learn new programming languages very quickly and develop reliable,
          efficient, errorless programs.
        </p>
        <p className="mb-4">
          Python, C, Rust, Swift, Scala, Haskell, Web Dev
          (next.js,html,css,javascript), Solidity, git, docker, aws, linux,
          bash, etc.
        </p>
        <details>
          <summary>Python</summary>
          <p>
            Used for ML, automation, web app, and much more. <br />
            numpy, pandas, pytorch, tensorflow, flask, keras, etc
          </p>
        </details>
        <details>
          <summary>C</summary>
          <p>
            Used for a lot of course, system programming, and used to improve
            the performance of code with high time complexity in python (ocr).
          </p>
        </details>
        <details>
          <summary>Rust</summary>
          <p>
            Learned to see how Rust prevents memory leaks. Customized Alacritty
            to support Korean.
          </p>
        </details>
        <details>
          <summary>Haskell</summary>
          <p>
            Used when taking Programming Principle course. Learned various
            features in programming language.
          </p>
        </details>
        <details>
          <summary>Swift</summary>
          <p>
            Made an app to explore Apple&apos;s augmented reality technology and
            to figure out the intention of Apple.
          </p>
        </details>
        <details>
          <summary>Scala</summary>
          <p>Used when taking Programming Language course.</p>
        </details>
        <details>
          <summary>Web dev</summary>
          <p>
            Used next.js, react to build homeserver dashboard (for home
            resources using Iot) and this homepage.
          </p>
        </details>
        <details>
          <summary>Solidity</summary>
          <p>Used to build Ethereum Dapp</p>
        </details>
        <br />
      </Container>
      <Container title="Projects">
        <ul>
          {projects.map((project, index) => {
            return (
              <li key={index}>
                <Link
                  href={{ pathname: "projects", query: { to: project.title } }}
                >
                  <div className="cursor-pointer group">
                    {"- "}{" "}
                    <a className="group-hover:underline">{project.title}</a>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
