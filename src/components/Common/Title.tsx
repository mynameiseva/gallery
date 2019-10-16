import React from "react";
import { Typography } from "@material-ui/core";

type Variants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props {
  variant: Variants;
}

export const Title: React.FC<Props> = ({ variant = "h3", children }) => (
  <Typography variant={variant} gutterBottom>
    {children}
  </Typography>
);
