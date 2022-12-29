import React from "react";
import { Alert } from "antd";

export interface AlertMessageProps {
  message?: string;
  description?: string;
  type: "success" | "warning" | "info" | "error";
  showIcon?: boolean;
  closable?: boolean;
}

export const BaseAlert = (props: AlertMessageProps) => (
  <Alert
    message={props.message}
    description={props.description}
    showIcon={props.showIcon}
    closable={props.closable}
    type={props.type}
  />
);

export const SuccessAlert = (props: AlertMessageProps) => (
  <BaseAlert type={"success"} {...props} />
);

export const ErrorAlert = (props: AlertMessageProps) => (
  <BaseAlert type={"error"} {...props} />
);

export const InfoAlert = (props: AlertMessageProps) => (
  <BaseAlert type={"info"} {...props} />
);

export const WarningAlert = (props: AlertMessageProps) => (
  <BaseAlert type={"warning"} {...props} />
);
