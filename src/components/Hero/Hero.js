import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Link from "next/link";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I am <br /> Naushin Shaikh <br /> Frontend Developer
        </SectionTitle>
        <SectionText>
          I’m a Frontend Developer with 3+ years of experience specializing in
          React, Next.js,JavaScript and TypeScript. I have a strong eye for
          design systems, performance optimization, and component-driven
          architecture, building fast, reliable, and maintainable web
          applications.
        </SectionText>
        <Button onClick={props.handleClick}>
          <Link href="#projects">View My Work</Link>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
