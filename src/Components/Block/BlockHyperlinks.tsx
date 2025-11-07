import { useEffect, useState } from 'react';
import { usePageScroll } from '../../Hooks/usePageScroll';

export const BlockHyperlinks = () => {
  const { scrollPosition } = usePageScroll();
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    setScroll(scrollPosition > 100);
  }, [scrollPosition]);

  return (
    <div className="container hidden bg-transparent lg:block">
      <div className="relative z-50 flex items-end justify-between">
        <div className="fixed bottom-0 flex flex-col justify-end gap-y-4 items-center h-[200px] translate-x-6 w-[20px]">
          {/* Social Icons */}
          <div
            className={`flex flex-col w-full gap-y-4 ${
              scroll ? 'text-light-main' : 'text-black'
            } dark:text-white`}>
            {/* Portfolio Link */}
            <a
              aria-label="Portfolio"
              href="https://portfolio-mpin.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="transition duration-150 ease-in-out hover:scale-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                aria-label="Portfolio">
                <rect x="6" y="10" width="52" height="36" rx="3" ry="3" />
                <path d="M6 18h52" />
                <circle cx="14" cy="14" r="1.5" />
                <circle cx="20" cy="14" r="1.5" />
                <circle cx="26" cy="14" r="1.5" />

                <path d="M32 28l2.5 5 5.5.8-4 3.8 1 5.4-5-2.6-5 2.6 1-5.4-4-3.8 5.5-.8 2.5-5z" />

                <path d="M24 50h16" />
                <path d="M28 50v4h8v-4" />
              </svg>
            </a>

            {/* LinkedIn Link */}
            <a
              className="transition duration-150 ease-in-out hover:scale-125"
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/hazemelhelbawi/"
              target="_blank"
              rel="noreferrer noopener">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img">
                <path
                  data-name="layer1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M3.078 22.331h12.188v36.844H3.078z"
                  strokeLinejoin="round"></path>
                <path
                  data-name="layer2"
                  d="M46.719 21.112c-5.344 0-8.531 1.969-11.906 6.281v-5.062H22.625v36.844h12.281V39.206c0-4.219 2.156-8.344 7.031-8.344s7.781 4.125 7.781 8.25v20.063H62V38.269c0-14.532-9.844-17.157-15.281-17.157z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  strokeLinejoin="round"></path>
                <path
                  data-name="layer1"
                  d="M9.219 4.425C5.188 4.425 2 7.331 2 10.894s3.188 6.469 7.219 6.469 7.219-2.906 7.219-6.469-3.188-6.469-7.219-6.469z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  strokeLinejoin="round"></path>
              </svg>
            </a>
          </div>

          {/* Line */}
          <div
            className={`w-[2px] h-[140px] ${
              scroll ? 'bg-light-main dark:bg-white' : 'bg-black dark:bg-white'
            }`}></div>
        </div>
      </div>
    </div>
  );
};
