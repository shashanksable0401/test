import React from "react";
import "./style.css";

interface IProps {
  children?: any;
  shadow?: any;
}
export default function XCard(props: IProps) {
  const { shadow, children } = props;
  const classNames = ["cv-card"];
  if (shadow) {
    classNames.push("shadow");
  }
  return <div className={classNames.join(" ")}>{children}</div>;
}
