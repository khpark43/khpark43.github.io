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
          viewBox="0 0 210 210"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
          className="inline-block mr-2"
        >
          <path d="M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761    c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874    c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769    c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816    c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055    c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747    C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507    c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235    C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497    c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282    c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067    c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279    C193.5,169.446,193.31,173.537,190.683,176.164z"></path>
        </svg>
        010-8586-4918 <br />
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
        joshuahp@kaist.ac.kr <br />
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
