import React from "react";
import { Button, IconButton, Switch, Typography } from "@material-ui/core/";
import { MDBBtn, MDBBadge, MDBIcon } from "mdbreact";
import { useStyles } from "./styles";
export default ({
  type = "button",
  fullWidth = true,
  variant = "contained",
  color = "primary",
  className,
  disabled,
  children,
  ...others
}) => {
  const classes = useStyles();
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      className={className || classes.submit}
      disabled={disabled}
      {...others}
    >
      {children}
    </Button>
  );
};
export const ButtonIcon = ({ onClick, children, className, ...others }) => (
  <IconButton onClick={onClick} className={className} {...others}>
    {children}
  </IconButton>
);
export const RedButton = ({ text = "", type = "button", onClick }) => {
  const classes = useStyles();

  return (
    <button className={classes.redButton} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export function Switches({ checkedA, handleChange, lable, style }) {
  return (
    <div style={style}>
      <Typography gutterBottom variant="h5" component="h2">
        {lable}
      </Typography>
      <Switch
        checked={checkedA}
        onChange={handleChange("checkedA")}
        value="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
        onClick={handleChange}
      />
    </div>
  );
}

// peach purple blue aqua
export const ButtonMDB = ({
  gradient = "purple",
  onClick,
  children,
  ...others
}) => (
  <MDBBtn gradient={gradient} onClick={onClick} {...others}>
    {children}
  </MDBBtn>
);
// indigo-text, cyan-text, green-text, amber-text
export const TagButton = ({
  title,
  onClick,
  className,
  dispatch,
  color = "primary",
  type,
  colorIcon = "red-text",
  icon,
  ...others
}) => (
  <h5
    className={className}
    style={{ cursor: "pointer" }}
    onClick={dispatch ? () => dispatch({ type }) : onClick}
    {...others}
  >
    <MDBBadge color={color}>
      {title}
      {icon && (
        <MDBIcon
          icon={icon}
          className={colorIcon}
          size="x1"
          style={{ marginLeft: 10 }}
        />
      )}
    </MDBBadge>
  </h5>
);
