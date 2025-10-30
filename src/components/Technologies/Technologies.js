import React from "react";
import {
  DiAtom,
  DiCodeBadge,
  DiFirebase,
  DiNpm,
  DiReact,
  DiRequirejs,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider style={{ margin: "5rem 0 3rem 0" }} />
    <SectionTitle
      style={{ width: "100%", textAlign: "center", marginTop: "5rem" }}
    >
      Technologies
    </SectionTitle>
    <SectionText style={{ maxWidth: "100%", textAlign: "center" }}>
      I’ve worked with a wide range of modern frontend technologies to build
      fast, responsive, and visually appealing web applications. My expertise
      covers everything from UI design to performance optimization.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with React.js, Next.js, TypeScript, JavaScript, HTML,
            CSS, and Tailwind CSS — focusing on performance, reusability, and
            responsive design.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCodeBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Libraries</ListTitle>
          <ListParagraph>
            Experience with Material UI,Tailwind CSS, Bootstrap,
            Reactstrap,Formik,React Hook Form,React Dropzone,React Query,RTK.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with Node.js and REST APIs integration.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt style={{ margin: "5rem 0 3rem 0" }} />
  </Section>
);

export default Technologies;
