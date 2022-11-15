import Head from "next/head";
import Projectitems from "../components/projectitems";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { projects } from "../lib/projects";

export default function Projects() {
  const router = useRouter();
  const [active, setActive] = useState(-1);
  const refs = useRef([]);
  useEffect(() => {
    const index = projects
      .map((project) => {
        return project.title;
      })
      .indexOf(router.query.to);
    setActive(index);

    if (index != -1) {
      window.scrollTo({
        top:
          refs.current[index].getBoundingClientRect().top +
          window.pageYOffset -
          55,
        behavior: "smooth",
      });
    }
  }, [router.query]);
  return (
    <>
      <Head>
        <title>Projects - Kyunghyun Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-[420px] pt-2">
        {projects.map((project, index) => {
          return (
            <Projectitems
              title={project.title}
              key={index}
              lang={project.lang}
              active={active}
              setActive={setActive}
              innerRef={(element) => {
                refs.current[index] = element;
              }}
              index={index}
            >
              {project.content}
            </Projectitems>
          );
        })}
      </div>
    </>
  );
}
