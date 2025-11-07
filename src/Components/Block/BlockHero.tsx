import { motion, AnimatePresence } from 'framer-motion';
import AnimatedTextCharacter from '../Animations/AnimatedText';

export const BlockHero = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay: 6.5, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay: 6.5, duration: 0.01 }
        }
      };
    }
  };
  return (
    <section
      id="header"
      className="my-20 md:my-0 min-h-screen w-screen bg-[#D9DFC6] overflow-hidden dark:bg-dark-main relative flex items-center relatve z-40">
      <div className="w-screen h-[200px] md:h-auto z-20 absolute bottom-0 left-0">
        <svg
          className="text-[#DEF2F1] dark:text-dark-secondary h-full  duration-200 transition"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,234.7C640,224,800,160,960,149.3C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="w-screen z-20 h-[200px]  md:h-auto absolute bottom-0 left-0">
        <svg
          className="h-full text-[#FEFFFF] transition duration-200 dark:text-dark-primary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 230">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,234.7C640,224,800,160,960,149.3C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <div className="md:pt-24 container relative z-40 flex flex-col text-5xl text-white md:text-7xl gap-y-5 lg:px-24">
        <article className="flex flex-col mt-5 gap-y-3">
          <span className="text-lg font-light md:text-xl text-light-primary dark:text-dark-primary">
            Hello, my name is
          </span>{' '}
          <span className="relative font-bold w-fit ">
            <AnimatedTextCharacter onScroll delay={135} text="Hazem Elhelbawi" />

            <AnimatePresence>
              <motion.svg
                className="absolute left-0 -bottom-4 text-light-primary dark:text-dark-primary"
                width="150"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                height="17"
                viewBox="0 0 112 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  variants={draw}
                  custom={7}
                  d="M1 1C30.183 4.80725 108.032 -0.721088 110.936 6.19274C113.734 12.8554 24.0966 1.90809 29.3834 10"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </motion.svg>
            </AnimatePresence>
          </span>
          <span className="flex flex-wrap relative flex font-bold w-fit text-light-primary dark:text-dark-primary lg:hidden">
            I create films that speak when words can’t
          </span>
          <span className="relative hidden font-bold w-fit text-light-primary dark:text-dark-primary lg:flex  flex-wrap">
            <AnimatedTextCharacter delay={165} text="I create films that speak when words can’t" />
            {/* <AnimatedTextCharacter delay={165} text="I create films that speak when words can’t " /> */}
          </span>
        </article>
        <p className=" text-base lg:text-lg ml-1 max-w-[600px] text-[#536558] dark:text-white">
          I'm a software engineer from Alexandria, Egypt, with a deep passion for filmmaking. Beyond
          code, I love telling stories through film — exploring emotions, people, and the moments
          that shape who we are.
        </p>
      </div>
    </section>
  );
};
