import { motion } from 'framer-motion';
import { onScrollVariant } from '../../repositories/variants';
export const BaseTitle = ({ index, title }: { index: string; title: string }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={onScrollVariant}
      viewport={{ once: true, amount: 0.8 }}
      className="flex flex-col items-center w-full lg:w-3/4 lg:mx-auto md:flex-row gap-x-2 md:gap-x-10">
      <h1 className="text-3xl text-left text-light-main dark:text-white font-firacode ">
        <span className="text-light-primary dark:text-dark-offset">{index}</span>. {title}
      </h1>
      <div className="flex-1 w-full bg-light-main dark:bg-dark-main h-[1px]"></div>
    </motion.div>
  );
};
