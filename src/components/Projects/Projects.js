import React from "react";

import { projects, selfProjects } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
} from "./ProjectsStyles";

const Projects = () => (
  <>
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main style={{ width: "100%", textAlign: "center" }}>
        Industrial Projects
      </SectionTitle>
      <GridContainer>
        {projects.map((projectItems, i) => {
          return (
            <BlogCard key={i}>
              <TitleContent style={{ margin: "25px 0px" }}>
                <HeaderThree title>{projectItems.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">
                {projectItems.description}
              </CardInfo>
              <div>
                <TitleContent style={{ marginTop: "25px" }}>Stack</TitleContent>
                <TagList>
                  {projectItems?.backendTags?.map((tags, i) => {
                    return <Tag key={i}>{tags}</Tag>;
                  })}
                </TagList>
                <TagList style={{ paddingTop: "0.5rem" }}>
                  {projectItems?.frontendTags?.map((tags, i) => {
                    return <Tag key={i}>{tags}</Tag>;
                  })}
                </TagList>
              </div>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
    <Section nopadding id="projects">
      <SectionDivider style={{ margin: "5rem 0 3rem 0" }} />
      <SectionTitle main style={{ width: "100%", textAlign: "center" }}>
        Self Projects
      </SectionTitle>
      <GridContainer>
        {selfProjects.map((projectItems, i) => {
          return (
            <BlogCard key={i}>
              <TitleContent
                style={{
                  margin: "25px 0px",
                }}
              >
                <HeaderThree title>{projectItems.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">
                {projectItems.description}
              </CardInfo>
              <div>
                <TitleContent style={{ marginTop: "25px" }}>Stack</TitleContent>
                <TagList style={{ marginBottom: "1rem" }}>
                  {projectItems?.frontendTags?.map((tags, i) => {
                    return <Tag key={i}>{tags}</Tag>;
                  })}
                </TagList>
              </div>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  </>
);

export default Projects;
