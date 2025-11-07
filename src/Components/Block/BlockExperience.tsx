import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AwardContent, content } from '../../repositories/content';
import { BaseTitle } from '../Base/BaseTitle';

const tabVariants = {
  show: {
    opacity: 1,
    x: 0,
    transition: { ease: 'easeOut', duration: 0.3 }
  },
  hide: { x: 100, opacity: 0 }
};

const Tab = ({
  content,
  activeItem,
  setterFunc
}: {
  content: AwardContent;
  activeItem: number;
  setterFunc: (id: number) => void;
}) => {
  const isActive = activeItem === content.id;
  return (
    <li
      onClick={() => setterFunc(content.id)}
      className={`relative group flex items-center gap-3 w-full px-5 py-3 rounded-xl cursor-pointer border transition-all duration-300
        ${
          isActive
            ? 'bg-gradient-to-r from-light-primary to-light-main text-white shadow-lg shadow-light-primary/30 border-transparent'
            : 'border-light-main/30 text-light-main hover:border-light-primary/60 hover:text-light-primary dark:text-white/80'
        }`}>
      <span
        className={`font-semibold text-sm transition-transform duration-300 ${
          isActive ? 'scale-110 text-white' : 'group-hover:scale-110'
        }`}>
        {content.id}.
      </span>
      <span className="font-raleway text-base">{content.title}</span>
      {isActive && (
        <motion.div
          layoutId="activeTabGlow"
          className="absolute inset-0 rounded-xl bg-light-primary/10 blur-md"
        />
      )}
    </li>
  );
};

const TabContent = ({ activeItem, content }: { activeItem: number; content: AwardContent }) => {
  return (
    <motion.div
      key={activeItem}
      variants={tabVariants}
      animate="show"
      initial="hide"
      exit="hide"
      className="flex flex-col items-start gap-6 md:gap-8 font-raleway md:min-w-[450px]">
      <motion.div
        className="overflow-hidden rounded-2xl shadow-2xl border border-white/10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}>
        <img
          src={content.img}
          alt={content.title}
          className="w-full max-w-md object-cover rounded-2xl"
        />
      </motion.div>
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-light-primary to-light-main text-transparent bg-clip-text">
          {content.title}
        </h2>
        <p className="text-base leading-relaxed text-light-main dark:text-white/90 max-w-xl">
          {content.body.description}
        </p>
      </div>
    </motion.div>
  );
};

export const BlockAwards = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <section
      id="Awards"
      className="flex flex-col items-center justify-center py-24  text-white relative overflow-hidden">
      {/* decorative gradient orbs */}
      <div className="absolute top-10 left-20 w-60 h-60 bg-light-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-20 w-60 h-60 bg-light-main/20 rounded-full blur-3xl opacity-40" />

      <div className="container relative z-10 flex flex-col justify-center gap-y-14">
        <BaseTitle title="Awards" index="02" />

        <div className="flex flex-col md:flex-row justify-center items-start w-full gap-10 md:gap-16">
          {/* Tabs */}
          <ul className="flex md:flex-col flex-row md:w-1/3 w-full overflow-x-auto md:overflow-visible no-scrollbar gap-4 md:gap-5">
            {content.map((el: AwardContent) => (
              <Tab key={el.id} content={el} setterFunc={setActiveItem} activeItem={activeItem} />
            ))}
          </ul>

          {/* Content */}
          <AnimatePresence mode="wait">
            <TabContent content={content[activeItem]} activeItem={activeItem} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BlockAwards;
