<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);   // Provide an initial state to useState

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
      <div
          className={`w-full max-w-5xl mx-auto p-8 transition-all ease-out duration-300 
        ${mounted && theme === "dark" ?
              "hover:bg-slate-600 text-white" :
              "hover:bg-slate-50 text-black"} 
        hover:scale-105 cursor-pointer`}
      >
        <h1 className="text-4xl mb-2">{name ? name : "Heading"}</h1>
        <p className="text-2xl">
          {description ?
              description :
              "Lorem Ipsum is simply dummy text. Ipsum has been the industry's standard dummy text ever since the 1500s."}
        </p>
      </div>
  )
}

=======
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);   // Provide an initial state to useState

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
      <div
          className={`w-full max-w-5xl mx-auto p-8 transition-all ease-out duration-300 
        ${mounted && theme === "dark" ?
              "hover:bg-slate-600 text-white" :
              "hover:bg-slate-50 text-black"} 
        hover:scale-105 cursor-pointer`}
      >
        <h1 className="text-4xl mb-2">{name ? name : "Heading"}</h1>
        <p className="text-2xl">
          {description ?
              description :
              "Lorem Ipsum is simply dummy text. Ipsum has been the industry's standard dummy text ever since the 1500s."}
        </p>
      </div>
  )
}

>>>>>>> cbb8909f25c76a5b6205c56e6dcea70a557eaeb1
export default ServiceCard;