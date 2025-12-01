import { useState } from "react";
import { sendContactEmail } from "../../config/emailJsConfig";
import useContactFormValidation from "../../hooks/useFormValidation";
import useTreePrice, {
  HEIGHT_SURCHARGE,
  TREE_PRICES,
} from "../../hooks/useTreePrice";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postalNumber: "",
    postalCity: "",
    treeType: "",
    treeForm: "",
    branchDensity: "",
    treeHeight: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { errors, validate, validateField } = useContactFormValidation();

  // Price calculation
  const { basePrice, heightExtra, totalPrice } = useTreePrice(formData);
  const shippingFee = basePrice ? 100 : 0;
  const price = shippingFee + totalPrice;

  // ---------------------

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "postalNumber") {
      newValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === "message") {
      setCharacterCount(newValue.length);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (submitted) validateField(name, value);
  };

  // Submit logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setSubmitted(true);

    const isValid = validate(formData);
    if (!isValid) return;

    // Set default height if not filled
    const updatedFormData = {
      ...formData,
      treeHeight: formData.treeHeight ? formData.treeHeight : 2.3,
    };

    try {
      setIsLoading(true);
      await sendContactEmail(updatedFormData);
      setErrorMessage("");
      setSuccessMessage(
        "Takk for bestillingen! Vi tar kontakt så fort som mulig."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        postalNumber: "",
        postalCity: "",
        treeType: "",
        treeForm: "",
        branchDensity: "",
        treeHeight: "",
        message: "",
      });
      setCharacterCount(0);
    } catch {
      setErrorMessage("Beklager, noe gikk galt. Vennligst prøv igjen senere.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <fieldset className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {/* -------------------- */}
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
              id="name"
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
            <label htmlFor="email">E-post</label>
            <input
              type="email"
              name="email"
              id="email"
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
              type="tel"
              name="phone"
              id="phone"
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

        {/* -------------------- */}
        <div className={styles.inputGroup}>
          <div
            className={`${styles.inputWrapper} ${
              formData.address ? styles.filled : ""
            }`}
          >
            <label htmlFor="address">Leveringsadresse</label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleChange}
              value={formData.address}
              onBlur={handleBlur}
            />
          </div>
          {errors.address && (
            <p className={styles.errorMessage}>{errors.address}</p>
          )}
        </div>
        {/* -------------------- */}

        {/* -------------------- */}
        <div className={`${styles.inputGroup} ${styles.postal}`}>
          <div className={`${styles.postalContainer} ${styles.postNumberGroup}`}>
            <div
              className={`${styles.inputWrapper} ${styles.postalNumber} ${
                formData.postalNumber ? styles.filled : ""
              }`}
            >
              <label htmlFor="postalNumber">Postnummer</label>
              <input
                type="number"
                name="postalNumber"
                id="postalNumber"
                onChange={handleChange}
                value={formData.postalNumber}
                onBlur={handleBlur}
              />
            </div>
            {errors.postalNumber && (
              <p className={styles.errorMessage}>{errors.postalNumber}</p>
            )}
          </div>
          <div className={styles.postalContainer}>
            <div
              className={`${styles.inputWrapper} ${styles.postalCity} ${
                formData.postalCity ? styles.filled : ""
              }`}
            >
              <label htmlFor="postalCity">By/Sted</label>
              <input
                type="text"
                name="postalCity"
                id="postalCity"
                onChange={handleChange}
                value={formData.postalCity}
                onBlur={handleBlur}
                min="1"
              />
            </div>
            {errors.postalCity && (
              <p className={styles.errorMessage}>{errors.postalCity}</p>
            )}
          </div>
        </div>
        {/* -------------------- */}

        {/* -------------------- Radio Groups -------------------- */}
        {/* Tree Type */}
        <div className={`${styles.inputGroup} ${styles.radioGroups}`}>
          <div className={styles.radioGroupWrapper}>
            <div className={styles.radioGroup}>
              <p className={styles.radioLabel}>Velg type juletre:</p>
              <label htmlFor="fjelledelgran" className={styles.radioOption}>
                <input
                  type="radio"
                  id="fjelledelgran"
                  name="treeType"
                  value="Fjelledelgran"
                  checked={formData.treeType === "Fjelledelgran"}
                  onChange={handleChange}
                />
                Fjelledelgran
                <span className={styles.price}>
                  ({TREE_PRICES["Fjelledelgran"]} kr)
                </span>
              </label>
              <label htmlFor="norsk-gran" className={styles.radioOption}>
                <input
                  type="radio"
                  id="norsk-gran"
                  name="treeType"
                  value={"Norsk gran"}
                  checked={formData.treeType === "Norsk gran"}
                  onChange={handleChange}
                />
                Norsk gran
                <span className={styles.price}>
                  ({TREE_PRICES["Norsk gran"]} kr)
                </span>
              </label>
            </div>
            {errors.treeType && (
              <p className={styles.errorMessage}>{errors.treeType}</p>
            )}
          </div>

          {/* Tree Form */}
          <div className={styles.radioGroupWrapper}>
            <div className={styles.radioGroup}>
              <p className={styles.radioLabel}>Velg form:</p>
              <label htmlFor="narrow" className={styles.radioOption}>
                <input
                  type="radio"
                  id="narrow"
                  name="treeForm"
                  value="Smalt tre"
                  checked={formData.treeForm === "Smalt tre"}
                  onChange={handleChange}
                />
                Smalt tre
              </label>
              <label htmlFor="wide" className={styles.radioOption}>
                <input
                  type="radio"
                  id="wide"
                  name="treeForm"
                  value="Bredt tre"
                  checked={formData.treeForm === "Bredt tre"}
                  onChange={handleChange}
                />
                Bredt tre
              </label>
            </div>
            {errors.treeForm && (
              <p className={styles.errorMessage}>{errors.treeForm}</p>
            )}
          </div>

          {/* Branch Density */}
          <div className={styles.radioGroupWrapper}>
            <div className={styles.radioGroup}>
              <p className={styles.radioLabel}>Velg tetthet på kvistene:</p>
              <label htmlFor="thick" className={styles.radioOption}>
                <input
                  type="radio"
                  id="thick"
                  name="branchDensity"
                  value="Tette kvister"
                  checked={formData.branchDensity === "Tette kvister"}
                  onChange={handleChange}
                />
                Tett med kvister
              </label>
              <label htmlFor="open" className={styles.radioOption}>
                <input
                  type="radio"
                  id="open"
                  name="branchDensity"
                  value="Åpent mellom kvistene"
                  checked={formData.branchDensity === "Åpent mellom kvistene"}
                  onChange={handleChange}
                />
                Åpent mellom kvistene
              </label>
            </div>
            {errors.branchDensity && (
              <p className={styles.errorMessage}>{errors.branchDensity}</p>
            )}
          </div>
        </div>

        {/* Tree Height */}
        <div className={styles.inputGroup}>
          <div
            className={`${styles.inputWrapper} ${
              formData.treeHeight ? styles.filled : ""
            }`}
          >
            <div className={styles.labelWrapper}>
              <label htmlFor="treeHeight" className={styles.treeHeightLabel}>
                Skriv inn høyden på treet (standard 2,30m)
              </label>
            </div>
            <input
              type="number"
              name="treeHeight"
              placeholder="2,30"
              onChange={handleChange}
              value={formData.treeHeight}
              onBlur={handleBlur}
              className={styles.heightInput}
            />
            <span className={styles.heightUnit}>m</span>
            <ul className={styles.heightList}>
              <li>
                <p>
                  Fjelledelgran over {HEIGHT_SURCHARGE["Fjelledelgran"].limit}m{" "}
                  <span>(+ {HEIGHT_SURCHARGE["Fjelledelgran"].extra} kr)</span>
                </p>
              </li>
              <li>
                <p>
                  Norsk gran over {HEIGHT_SURCHARGE["Norsk gran"].limit} m{" "}
                  <span>(+ {HEIGHT_SURCHARGE["Norsk gran"].extra} kr)</span>
                </p>
              </li>
            </ul>
          </div>
          {errors.treeHeight && (
            <p className={styles.errorMessage}>{errors.treeHeight}</p>
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
              Kommentar / Ønsker
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

        {/* -------------------- */}
        <div className={styles.actionContainer}>
          <div className={styles.pricingContainer}>
            <p className={styles.priceLine}>
              Trepris: <span>{basePrice} kr</span>
            </p>

            <p className={styles.priceLine}>
              Høyde-tillegg: {heightExtra || 0} kr
            </p>

            <p className={styles.priceLine}>Levering: {shippingFee} kr</p>

            <p className={styles.totalPrice}>Total: {price} kr</p>
          </div>

          <p className={styles.successMessage}>{successMessage}</p>
          <p className={styles.errorMessage}>{errorMessage}</p>

          <Button classname={styles.submitButton} type="submit">
            {isLoading ? (
              <Spinner spinnerClassName={styles.loadingCircle} />
            ) : (
              "Bestill"
            )}
          </Button>
        </div>
      </form>
    </fieldset>
  );
};

export default ContactForm;
