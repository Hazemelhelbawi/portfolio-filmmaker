import { useEffect, useState } from 'react';
import { BaseToggle } from './Base/BaseToggle';
import { useDarkMode } from '../context/DarkModeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuButton } from './Base/BaseHamburger';
import { useMenuScope } from '../Hooks/useMenuScope';
import { usePageScroll } from '../Hooks/usePageScroll';

export const TheHeader = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const { darkMode } = useDarkMode();
  const scope = useMenuScope(!toggle);
  const [display, setDisplay] = useState<string>();
  const [scroll, setScroll] = useState<boolean>();
  const { scrollPosition } = usePageScroll();
  const headerTags = [
    {
      name: 'Home',
      link: '#header'
    },

    {
      name: 'Projects',
      link: '#projects'
    },
    {
      name: 'Awards',
      link: '#Awards'
    },
    {
      name: 'Press Mention',
      link: '#PressMention'
    },
    {
      name: 'Contact Me',
      link: '#get-in-touch'
    }
  ];

  useEffect(() => {
    if (scrollPosition > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, [scrollPosition]);
  const toggleNavbar = () => {
    if (window.innerWidth < 1024) {
      setToggle(!toggle);
    }
  };
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      display: display
    },
    closed: { opacity: 0, x: '-100%', display: 'none' }
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setDisplay('block');
    } else {
      setDisplay('none');
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('h-screen');
    }
  }, [window.innerWidth]);
  useEffect(() => {
    if (!toggle) {
      document.body.classList.add('overflow-hidden');
      document.body.classList.add('h-screen');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('h-screen');
    }
  }, [toggle]);
  return (
    <>
      {!toggle ? (
        <div className="bg-[#34a0a4] bg-opacity-90 dark:bg-[#7209b7] z-50 w-screen h-screen fixed top-0 left-0 transition-colors duration-200"></div>
      ) : null}
      <header
        id="nav"
        className={`${
          scroll || scrollPosition
            ? 'md:fixed lg:top-0 transition-all duration-200 ease-in-out'
            : 'md:absolute lg:top-6  transition-all duration-200 ease-in-out'
        } z-50  fixed  top-0  bg-[#34a0a4] container dark:bg-[#7209b7] ${
          toggle ? 'shadow-xl' : ''
        }  left-0 right-0  md:rounded-lg `}>
        <nav className="relative z-50 w-full py-4 text-white transition-colors duration-200 md:container dark:text-white">
          <div className="flex items-center justify-between w-full mx-auto">
            <div className="flex items-center justify-between w-full h-fit">
              <div className="flex items-center flex-shrink-0">
                <AnimatePresence>
                  {!darkMode ? (
                    <motion.img
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      whileHover={{
                        scale: 1.2,
                        rotate: '180deg',
                        transition: { duration: 1 }
                      }}
                      src="/logo.png"
                      width="50"
                      className="hover:rotate-180"
                      height="50"
                      alt=""
                    />
                  ) : (
                    <motion.img
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      whileHover={{
                        scale: 1.2,
                        rotate: '180deg',
                        transition: { duration: 1 }
                      }}
                      exit={{ x: -300, opacity: 0 }}
                      // src="/logo_black.png"
                      src="/logo.png"
                      width="50"
                      className="hover:rotate-45"
                      height="50"
                      alt=""
                    />
                  )}
                </AnimatePresence>
              </div>
              <div className="hidden h-full align-middle lg:flex md:rtl:mr-10 lg:rtl:mr-14 md:ltr:ml-10 lg:ltr:ml-14">
                <div className="flex items-center h-full font-light align-middle gap-x-8 md:text-sm lg:text-sm">
                  {headerTags.map((el, index) => {
                    return (
                      <a id={el.link} href={el.link} className="" key={index}>
                        {el.name}
                      </a>
                    );
                  })}
                  <BaseToggle />
                </div>
              </div>
              <div className="flex mr-2 lg:hidden">
                <button
                  id="toggler"
                  type="button"
                  onClick={toggleNavbar}
                  className="inline-flex items-center justify-center text-gray-400 rounded-xl"
                  aria-controls="mobile-menu"
                  aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <MenuButton
                    isOpen={toggle}
                    strokeWidth="2"
                    color={darkMode ? '#000' : '#FFF'}
                    transition={{ ease: 'easeOut', duration: 0.2 }}
                    width="30"
                    height="20"
                  />
                </button>
              </div>
            </div>
          </div>
          <motion.div
            animate={!toggle ? 'open' : 'closed'}
            className="flex lg:hidden"
            variants={variants}
            id="mobile-menu"
            ref={scope}>
            <ul className="flex flex-col items-start px-4 py-4 mt-5 mr-5 text-3xl font-light text-white rounded-lg h-fit dark:text-white gap-y-1 md:text-lg">
              {headerTags.map((el, index) => {
                return (
                  <li className="my-5 " key={index}>
                    <a
                      onClick={() => {
                        document.body.classList.remove('overflow-hidden');
                        document.body.classList.remove('h-screen');
                        setToggle(true);
                        document.querySelector(`#${el.link}`)?.scrollIntoView();
                      }}
                      id={el.link}
                      href={el.link}>
                      0{index + 1}. {el.name}
                    </a>
                  </li>
                );
              })}
              <BaseToggle />
            </ul>
          </motion.div>
        </nav>
      </header>
    </>
  );
};
