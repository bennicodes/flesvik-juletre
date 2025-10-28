import { useState } from "react";
// import { sendContactEmail } from "../../config/emailJsConfig";
import useContactFormValidation from "../../hooks/useFormValidation";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Custom hook for form validation
  const { errors, validate, validateField } = useContactFormValidation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "message") {
      setCharacterCount(value.length);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (submitted) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setSubmitted(true);

    // Terminate if form not valid
    const isValid = validate(formData);
    if (!isValid) {
      return;
    }
    try {
      setIsLoading(true);
      await sendContactEmail(formData);

      setErrorMessage("");
      setSuccessMessage(
        "Takk for henvendelsen! Vi tar kontakt så snart som mulig."
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setCharacterCount(0);
    } catch {
      setErrorMessage("Beklager, noe gikk galt. Vennligst prøv igjen senere.");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };

  return (
    <fieldset className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.inputGroup}>
          <div
            className={`${styles.inputWrapper} ${
              formData.name ? styles.filled : ""
            }`}
          >
            <label htmlFor="name">Navn</label>
            <input
              type="text"
              name="name"
              maxLength={50}
              onChange={handleChange}
              value={formData.name}
              onBlur={handleBlur}
            />
          </div>
          {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
        </div>
        {/* -------------------- */}
        <div className={styles.inputGroup}>
          <div
            className={`${styles.inputWrapper} ${
              formData.email ? styles.filled : ""
            }`}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              onBlur={handleBlur}
            />
          </div>
          {errors.email && (
            <p className={styles.errorMessage}>{errors.email}</p>
          )}
        </div>
        {/* -------------------- */}
        <div className={styles.inputGroup}>
          <div
            className={`${styles.inputWrapper} ${
              formData.phone ? styles.filled : ""
            }`}
          >
            <label htmlFor="phone">Telefon</label>
            <input
              type="phone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              onBlur={handleBlur}
            />
          </div>
          {errors.phone && (
            <p className={styles.errorMessage}>{errors.phone}</p>
          )}
        </div>
        {/* -------------------- */}
        <div className={styles.inputGroup}>
          <div
            className={`${styles.inputWrapper} ${
              formData.message ? styles.filled : ""
            }`}
          >
            <label htmlFor="message" className={styles.messageLabel}>
              Henvendelse
            </label>
            <textarea
              name="message"
              maxLength="300"
              onChange={handleChange}
              value={formData.message}
              onBlur={handleBlur}
            />
          </div>
          {errors.message && (
            <p className={styles.errorMessage}>{errors.message}</p>
          )}
          <p
            className={`${styles.characterCount} ${
              characterCount >= 300 ? styles.characterCountWarning : ""
            }`}
          >
            Maks antall tegn {characterCount}/300
          </p>
        </div>
        <div className={styles.actionContainer}>
          <p className={styles.successMessage}>{successMessage}</p>
          <p className={styles.errorMessage}>{errorMessage}</p>
          <Button classname={styles.submitButton} type="submit">
            {isLoading ? (
              <Spinner spinnerClassName={styles.loadingCircle} />
            ) : (
              "Send"
            )}
          </Button>
        </div>
      </form>
    </fieldset>
  );
};

export default ContactForm;
