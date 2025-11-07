import { BaseTitle } from '../Base/BaseTitle';

export const BlockGetInTouch = () => {
  return (
    <>
      <section
        id="get-in-touch"
        className="container flex flex-col items-center justify-center py-20 gap-y-3">
        <BaseTitle title="What's next?" index="04" />
        <h2 className="mt-8 font-semibold text-center text-light-primary dark:text-white text-7xl font-raleway">
          Get In Touch
        </h2>
        <p className="text-xl font-raleway text-center text-light-main dark:text-white font-light lg:max-w-[50%] mt-4">
          I am actively looking for new work opportunities, whether it's full time or contractor
          work, my inbox is always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <a
          className="px-4 py-2 rounded-[4px] bg-transparent border-[1px] text-light-main dark:text-white mt-2 lg:mt-4 border-light-main dark:border-white"
          href="mailto:hazemelhilbawi@gmail.com"
          rel="noopener noreferrer"
          target="_blank">
          Say Hello
        </a>
      </section>
      <footer className="container py-10 text-xl font-thin text-center text-light-main dark:text-white">
        Built by Hazem Elhelbawi
      </footer>
    </>
  );
};
