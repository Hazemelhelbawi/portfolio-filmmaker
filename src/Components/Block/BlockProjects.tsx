import { BaseProject } from '../Base/BaseProject';
import { Projects, IProject } from '../../repositories/projects';
import { BaseTitle } from '../Base/BaseTitle';
export const BlockProjects = () => {
  return (
    <section id="projects" className="container flex flex-col gap-y-40">
      <BaseTitle title="Projects" index="01" />
      {Projects.map((el: IProject, index: number) => {
        if ((index + 1) % 2 == 0) {
          return <BaseProject key={index} content={el} toggle />;
        } else {
          return <BaseProject key={index} content={el} />;
        }
      })}
    </section>
  );
};
