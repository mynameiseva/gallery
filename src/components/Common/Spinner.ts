import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

export const Spinner = styled(CircularProgress)`
  position: fixed;
  top: 50%;
  z-index: 100;
`;
