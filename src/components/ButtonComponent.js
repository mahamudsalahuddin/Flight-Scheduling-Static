import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#b2006a",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#ff3baf",
    boxShadow: "none",
  },
});

const ButtonComponent = ({ href, variant, classname, name, Color }) => {
  return (
    <BootstrapButton href={href} className={classname} variant={variant} color={Color}>
      {name}
    </BootstrapButton>
  );
};

export default ButtonComponent;
