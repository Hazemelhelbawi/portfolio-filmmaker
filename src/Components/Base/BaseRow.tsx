import { motion } from 'framer-motion';
import { BaseSvg } from './BaseSvg';
import { onScrollVariant } from '../../repositories/variants';
export const BaseRow = ({
  title,
  data,
  variants
}: {
  title?: string;
  data: { name: string; src: string }[];
  variants: {};
}) => {
  return (
    <div className="flex flex-col font-raleway gap-y-10">
      {title ? (
        <motion.h2
          initial="offscreen"
          whileInView="onscreen"
          variants={onScrollVariant}
          viewport={{ once: true, amount: 0.9 }}
          className="text-4xl font-bold text-center text-light-primary dark:text-white ">
          {title}
        </motion.h2>
      ) : null}
      <motion.div
        initial="closed"
        whileInView="open"
        variants={variants}
        viewport={{ once: true, amount: 0.8 }}
        className="container flex flex-wrap justify-center py-4 text-[#7E99A3] gap-x-8 gap-y-4 sm:gap-x-16 w-fit dark:text-white">
        {data.map((el: { name: string; src: string }) => {
          return (
            <motion.div
              variants={variants}
              key={el.name}
              className="flex flex-col items-center w-10 sm:w-12 min-h-10 sm:min-h-12 group gap-y-2">
              <BaseSvg src={el.src} />
              <span className="text-lg font-light text-center text-[#7E99A3] dark:text-white transition duration-200 opacity-0 group-hover:opacity-100 ">
                {el.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
