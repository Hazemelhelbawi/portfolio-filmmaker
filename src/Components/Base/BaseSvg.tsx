import { ReactSVG } from 'react-svg';

// export const BaseSvg = ({ src }: { src: string }) => {
//   return <ReactSVG src={src} />;
// };
export const BaseSvg = ({ src }: { src: string }) => {
  return (
    <div className="w-10 h-10 sm:w-12 sm:h-12">
      <ReactSVG src={src} className="w-full h-full" />
    </div>
  );
};

// export const BaseSvg = ({ src }: { src: string }) => {
//   return (
//     <div className="w-10 h-10 sm:w-12 sm:h-12 text-light-primary dark:text-white">
//       <img
//         src={src}
//         alt=""
//         className="text-light-primary dark:text-white w-10 h-10 sm:w-12 sm:h-12 object-contain"
//         loading="lazy"
//       />
//     </div>
//   );
// };
