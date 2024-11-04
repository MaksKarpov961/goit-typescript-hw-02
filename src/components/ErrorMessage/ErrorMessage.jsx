import s from "./ErrorMessage.module.css";
const ErrorMessage = ({ children }) => {
  return <p className={s.error}>{children}</p>;
};

export default ErrorMessage;
