import React from "react";
import { Link as ReactRouterRouterLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(ReactRouterRouterLink)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Link = props => <StyledLink {...props} />;
