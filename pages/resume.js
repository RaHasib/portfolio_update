import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import data from "../data/portfolio.json";

const { name, showResume, resume } = data;

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);

  if(!resume) {
    return <p>Loading resume...</p>
  }

  return (
      <>
        {process.env.NODE_ENV === "development" && (
            <div className="fixed bottom-6 right-6">
              <Button onClick={() => router.push("/edit")} type={"primary"}>
                Edit Resume
              </Button>
            </div>
        )}
        <div
            className={`container mx-auto mb-10`}
        >
          <Header isBlog />
          {mount && (
              <div className="mt-10 w-full flex flex-col items-center">
                  <div
                      className={`w-full ${
                          mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-100"
                      } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
                  >
                      <h1 className="text-3xl font-bold">{name}</h1>
                      <h2 className="text-xl mt-5">{resume?.tagline}</h2>
                      <h2 className="w-4/5 text-xl mt-5 opacity-50">
                          {resume?.description}
                      </h2>
                      <div className="mt-2">
                          <Socials/>
                      </div>
                      <div className="mt-5">
                          <h1 className="text-2xl font-bold">Experience</h1>
                          {resume?.experiences?.map(
                              ({id, dates, type, position, bullets}) => (
                                  <ProjectResume
                                      key={id}
                                      dates={dates}
                                      type={type}
                                      position={position}
                                      bullets={bullets}
                                  ></ProjectResume>
                              )
                          )}
                      </div>
                      <div className="mt-5">
                          <h1 className="text-2xl font-bold">Education</h1>
                          <div className="mt-2">
                              <h2 className="text-lg">{resume?.education?.universityName}</h2>
                              <h3 className="text-sm opacity-75">
                                  {resume?.education?.universityDate}
                              </h3>
                              <p className="text-sm mt-2 opacity-50">
                                  {resume?.education?.universityPara}
                              </p>
                          </div>
                      </div>

                      <div className="mt-5">
                          <h1 className="text-2xl font-bold">Skills</h1>
                          <div className="grid grid-cols-2 grid-rows gap-4">
                              {resume.languages && (
                                  <div className="mt-2 mob:mt-5 row-span-2">
                                      <h2 className="text-lg">Languages</h2>
                                      <ul className="list-disc">
                                          {resume.languages.map((language, index) => (
                                              <li key={index} className="ml-5 py-2">{language}</li>
                                          ))}
                                      </ul>
                                  </div>
                              )}

                              {resume.frameworks && (
                                  <div className="mt-2 mob:mt-5">
                                      <h2 className="text-lg">Frameworks</h2>
                                      <ul className="list-disc">
                                          {resume.frameworks.map((framework, index) => (
                                              <li key={index} className="ml-5 py-2">{framework}</li>
                                          ))}
                                      </ul>
                                  </div>
                              )}

                              {resume.others && (
                                  <div className="mt-1 mob:mt-5 col-span-2">
                                      <h2 className="text-lg">Others</h2>
                                      <div className="flex flex-wrap gap-x-1 mt-1">
                                          {resume.others.map((other, index) => (
                                              <span key={index} className="ml-5 py-2">• {other}</span>
                                          ))}
                                      </div>
                                  </div>
                              )}

                          </div>
                      </div>

                  </div>
              </div>
          )}
        </div>
      </>
  );
};


export default Resume;