import { notification } from "antd";

export interface NotificationProps {
  type: "success" | "warning" | "info" | "error";
  message?: string;
  description?: string;
}

export const openNotificationWithIcon = (props: NotificationProps) => {
  const { type, message, description } = props;
  return notification[type]({
    message: message || "Capvel Message",
    description:
      description || "Capvel holds right to have any message displayed here",
  });
};
