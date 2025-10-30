import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Stand Out Performer- March 2024." },
  { number: 1000, text: "Premier Contributor – October-March 2025." },
];

const Acomplishments = () => (
  <Section style={{ marginTop: "5rem" }}>
    <SectionTitle style={{ width: "100%", textAlign: "center" }}>
      Achievements
    </SectionTitle>
    <Boxes style={{ margin: "auto" }}>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
