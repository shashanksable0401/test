import React from "react";
import "./style.css";
interface IProps {
  title: string;
  children: any;
}
function Page(props: IProps) {
  const { title, children } = props;
  return (
    <div className="cv-page">
      {title && <div className={"cv-page-header"}>{title}</div>}
      <div className={"cv-page-content"}>{children}</div>
    </div>
  );
}

export default Page;
