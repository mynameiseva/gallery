import * as React from "react";
import styled from "styled-components";

import { Title } from "./Title";

const Container = styled.div`
  position: fixed;
  top: 50%;
  z-index: 100;
`;

export const ZeroScreen = ({ children }) => (
  <Container>
    <Title variant="h6">{children}</Title>
  </Container>
);
