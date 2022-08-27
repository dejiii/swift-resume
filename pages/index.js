import { motion } from 'framer-motion';
import { LandingPageLayout } from '../components/layouts/LandingPageLayout';

import { catchPhrase, heroButton, navBarSection } from '../lib/framerMotion';
// import { categories } from '../data/categories';

export default function Home() {
  const categories = [
    { id: 1, title: 'Design' },
    { id: 2, title: 'Web Developement' },
    { id: 3, title: 'Marketing' },
    { id: 4, title: 'Consulting' },
    { id: 5, title: 'Mobile App Development' },
    { id: 6, title: 'Product Management' },
    { id: 7, title: 'Customer Care' },
    { id: 8, title: 'QA Testing' },
    { id: 9, title: 'Dev Ops Engineer' },
    { id: 10, title: 'Product Designer' },
    { id: 11, title: 'UX Writer' },
    { id: 12, title: 'Interns' },
  ];
  return (
    <LandingPageLayout>
      <motion.article
        initial="hidden"
        animate="visible"
        variants={navBarSection}
        // viewport={{ once: true }}
        className="container mx-auto flex flex-col gap-y-4 min-h-screen items-center md:mt-20 align-middle"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={catchPhrase}
          className="text-center text-4xl sm:text-5xl md:text-6xl leading-tight mt-40 heading from-stone-800"
        >
          Create an amazing Resume in few clicks
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={catchPhrase}
          className="md:text-2xl text-slate-600"
        >
          Over 90% success rate against an ATS system
        </motion.p>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={heroButton}
          className="bg-[#100EB0] px-8 py-4 text-white rounded-full hover:mt-2 hover:bg-[#4F4DBB] transition-all ease-linear"
        >
          Get Started
        </motion.button>
        <div className=""></div>
      </motion.article>

      {/* 2ND SECTION */}
      <section className="bg-[#EDEEF1] py-20 md:py-40">
        <div className="container px-4">
          <article className="text-center md:text-5xl text-3xl">
            <p className="gap-y-1 md:gap-y-2 heading">One Platform</p>
            <p className="gap-y-1 md:gap-y-2 heading text-[#100EB0] mt-3">
              One Solution
            </p>
          </article>

          <div className="block md:grid gap-8 grid-cols-4 mt-20">
            {categories.map(({ id, title }) => (
              <div
                className="flex bg-[#fff] rounded-lg p-4 shadow-sm shadow-dark-700/10 mb-5 md:mb-0"
                key={id}
              >
                <span>icon</span>
                <div className="ml-3">
                  <p className="text-2xl heading">{title}</p>
                  <p className="mt-3 text-slate-500">
                    {title}20 samples Available
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3RD SECTION */}
      <section className="container px-4 py-20 md:py-40">
        <div className="text-center text-3xl md:text-5xl heading md:w-[50%] mx-auto leading-normal">
          <span className="text-[#100EB0]">Reviews</span> of people who have
          used SwiftResume
        </div>
        <div className="w-[90%] md:w-[60%] mt-10 mx-auto p-10 rounded-md bg-[#f9f9f9] relative text-center">
          <article className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quaerat voluptatibus hic. Temporibus harum cum, magni nam commodi
            reiciendis itaque dolores, debitis omnis sed optio! Esse fugit
            consequuntur minus pariatur.
          </article>
          <h1 className="font-bold heading">Persons Name</h1>
          <p>Title</p>
          <div className="absolute top-5 right-5 opacity-50">quote</div>
        </div>
      </section>
    </LandingPageLayout>
  );
}
