import styled from "styled-components";
import {
  Card as MaterialCard,
  CardMedia as MaterialCardMedia,
} from "@material-ui/core";

export const Card = styled(MaterialCard)`
  width: 600px;
  text-align: center;
  margin-bottom: 15px;
`;

export const CardMedia = styled(MaterialCardMedia)`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 15px;
`;
