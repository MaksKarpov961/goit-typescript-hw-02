import { ReactNode } from "react";
import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  children: ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <p className={s.error}>{children}</p>;
};

export default ErrorMessage;
