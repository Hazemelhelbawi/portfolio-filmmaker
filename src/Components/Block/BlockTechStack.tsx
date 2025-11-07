import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BaseTitle } from '../Base/BaseTitle';
import { PressMention, pressMentions } from '../../repositories/content';

const tabVariants = {
  show: { opacity: 1, x: 0, transition: { ease: 'easeOut', duration: 0.3 } },
  hide: { x: 100, opacity: 0 }
};

const Tab = ({
  item,
  activeItem,
  setterFunc
}: {
  item: PressMention;
  activeItem: number;
  setterFunc: (id: number) => void;
}) => {
  const isActive = activeItem === item.id;

  return (
    <li
      onClick={() => setterFunc(item.id)}
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
        0{item.id + 1}.
      </span>
      <span className="font-raleway text-base">{item.title}</span>
      {isActive && (
        <motion.div
          layoutId="activeTabGlowPress"
          className="absolute inset-0 rounded-xl bg-light-primary/10 blur-md"
        />
      )}
    </li>
  );
};

const TabContent = ({ activeItem, item }: { activeItem: number; item: PressMention }) => {
  const isInstagram = item.videoUrl?.includes('instagram.com');
  const isYouTube = item.videoUrl?.includes('youtube.com') || item.videoUrl?.includes('youtu.be');

  // Convert Instagram URL to embed format
  const getInstagramEmbedUrl = (url: string) => {
    return url.replace(/\/$/, '') + '/embed/';
  };

  // Extract YouTube video ID from various URL formats
  const getYouTubeVideoId = (url: string) => {
    let videoId = '';

    // Handle youtu.be format
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0].split('&')[0];
    }
    // Handle youtube.com/watch?v= format
    else if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0];
    }
    // Handle youtube.com/embed/ format
    else if (url.includes('embed/')) {
      videoId = url.split('embed/')[1].split('?')[0];
    }

    return videoId;
  };

  const youtubeVideoId = item.videoUrl && isYouTube ? getYouTubeVideoId(item.videoUrl) : '';

  return (
    <motion.div
      key={activeItem}
      variants={tabVariants}
      animate="show"
      initial="hide"
      exit="hide"
      className="flex flex-col items-start gap-6 md:gap-8 font-raleway md:min-w-[450px]">
      <motion.div
        className="overflow-hidden rounded-2xl shadow-2xl border border-white/10 w-full max-w-md"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}>
        {item.videoUrl ? (
          isInstagram ? (
            <iframe
              src={getInstagramEmbedUrl(item.videoUrl)}
              className="w-full aspect-square rounded-2xl"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : isYouTube && youtubeVideoId ? (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                className="w-full h-full rounded-2xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full object-cover rounded-2xl"
            />
          )
        ) : (
          <img src={item.thumbnail} alt={item.title} className="w-full object-cover rounded-2xl" />
        )}
      </motion.div>

      <div className="flex flex-col gap-3">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-light-primary to-light-main text-transparent bg-clip-text">
          {item.title}
        </h2>
        {item.description && (
          <p className="text-base leading-relaxed text-light-main dark:text-white/90 max-w-xl">
            {item.description}
          </p>
        )}
        {item.platform && (
          <p className="text-sm text-light-primary font-semibold">Platform: {item.platform}</p>
        )}
      </div>
    </motion.div>
  );
};

export const BlockPressMentions = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <section
      id="PressMention"
      className="flex flex-col items-center justify-center py-24 text-white relative overflow-hidden">
      {/* background aesthetic glows */}
      <div className="absolute top-10 left-20 w-60 h-60 bg-light-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-20 w-60 h-60 bg-light-main/20 rounded-full blur-3xl opacity-40" />

      <div className="container relative z-10 flex flex-col justify-center gap-y-14">
        <BaseTitle title="Press & Mentions" index="03" />

        <div className="flex flex-col md:flex-row justify-center items-start w-full gap-10 md:gap-16">
          <ul className="flex md:flex-col flex-row md:w-1/3 w-full overflow-x-auto md:overflow-visible no-scrollbar gap-4 md:gap-5">
            {pressMentions.map((el) => (
              <Tab key={el.id} item={el} setterFunc={setActiveItem} activeItem={activeItem} />
            ))}
          </ul>

          <AnimatePresence mode="wait">
            <TabContent item={pressMentions[activeItem]} activeItem={activeItem} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BlockPressMentions;
