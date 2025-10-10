import styles from "./Button.module.css";

const Button = ({ children, classname, onClick }) => {
  return (
    <button className={`${classname} ${styles.button}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
