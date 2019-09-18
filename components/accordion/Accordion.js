import {
  AccordionDiv,
  AccordionTitle,
  AccordionIcon,
  AccordionContent
} from './AccordionStyles';

const Accordion = ({ title, content }) => {
  return (
    <AccordionDiv>
      <AccordionTitle>{title}</AccordionTitle>
      <AccordionIcon></AccordionIcon>
      <AccordionContent>{content}</AccordionContent>
    </AccordionDiv>
  );
};

export default Accordion;
