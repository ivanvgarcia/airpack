import { useState } from 'react';
import {
  AccordionDiv,
  AccordionTitle,
  AccordionIcon,
  AccordionContent,
  AccordionHeader
} from './AccordionStyles';

const Accordion = ({ title, content }) => {
  const [show, setShow] = useState(false);
  return (
    <AccordionDiv>
      <AccordionHeader>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon
          src="/static/down-chevron.png"
          onClick={() => setShow(!show)}
        ></AccordionIcon>
      </AccordionHeader>

      {show && <AccordionContent>{content}</AccordionContent>}
    </AccordionDiv>
  );
};

export default Accordion;
