import SectionPresentation from '@/sections/SectionPresentation/SectionPresentation.jsx';
import SectionProjects from '@/sections/SectionProjects/SectionProjects.jsx';
import SectionSkills from '@/sections/SectionSkills/SectionSkills.jsx';
import SectionContact from '@/sections/SectionContact/SectionContact.jsx';
import './main.scss';

function Main() {
  return (
    <>
      <SectionPresentation />
      <SectionProjects />
      <SectionSkills />
      <SectionContact />
    </>
  );
}

export default Main;
