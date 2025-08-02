import SectionPresentation from '@/sections/SectionPresentation/SectionPresentation.jsx';
import SectionProjects from '@/sections/SectionProjects/SectionProjects.jsx';
import SectionSkills from '@/sections/SectionSkills/SectionSkills.jsx';
import './main.scss';

function Main() {
  return (
    <>
      <SectionPresentation />
      <SectionProjects />
      <SectionSkills />
    </>
  );
}

export default Main;
