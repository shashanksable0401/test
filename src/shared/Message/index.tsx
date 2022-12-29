import { message } from "antd";

export const successMessage = (Message: string) => {
  message.success(Message || "This is a success message");
};

export const errorMessage = (Message: string) => {
  message.error(Message || "This is an error message");
};

export const warningMessage = (Message: string) => {
  message.warning(Message || "This is a warning message");
};

export const infoMessage = (Message: string) => {
  message.info(Message || "This is a info message");
};
