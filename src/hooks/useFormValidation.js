import { useState } from "react";

export default function useContactFormValidation() {
  const [errors, setErrors] = useState({});
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^\d{8}$/; // Regex for 8-digit phone number

  const validate = (formData) => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vennligst oppgi navnet ditt";
    }
    // ------------------

    if (!formData.email.trim()) {
      newErrors.email = "Vennligst oppgi e-postadressen din";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Ugyldig e-postadresse";
    }
    // ------------------
    if (!formData.phone.trim()) {
      newErrors.phone = "Vennligst oppgi telefonnummeret ditt";
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      newErrors.phone = "Ugyldig telefonnummer";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Telefonnummeret må bestå av 8 siffer";
    }
    // ------------------

    if (!formData.address.trim()) {
      newErrors.address = "Vennligst oppgi leveringsadresse";
    }
    // ------------------

    if (!formData.postalNumber) {
      newErrors.postalNumber = "Vennligst oppgi postnummer";
    } else if (!/^\d{4}$/.test(formData.postalNumber.trim())) {
      newErrors.postalNumber = "Postnummer må bestå av 4 sifre";
    }

    // ------------------
    if (!formData.postalCity) {
      newErrors.postalCity = "Vennligst oppgi by/sted";
    }

    if (!formData.treeType) {
      newErrors.treeType = "Vennligst velg tretype";
    }
    // ------------------
    if (!formData.treeForm) {
      newErrors.treeForm = "Vennligst velg form på treet";
    }
    // ------------------
    if (!formData.branchDensity) {
      newErrors.branchDensity = "Vennligst velg tettheet mellom kvistene";
    }
    // ------------------
    if (formData.message.trim().length > 300) {
      newErrors.message = "Maks 300 tegn";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateField = (name, value) => {
    let message = "";

    if (name === "name") {
      if (!value.trim()) message = "Vennligst oppgi navnet ditt";
    }

    if (name === "email") {
      if (!value.trim()) message = "Vennligst oppgi e-postadressen din";
      else if (!emailRegex.test(value.trim()))
        message = "Ugyldig e-postadresse";
    }

    if (name === "phone") {
      if (!value.trim()) message = "Vennligst oppgi telefonnummeret ditt";
      else if (!/^\d+$/.test(value.trim())) message = "Ugyldig telefonnummer";
      else if (!phoneRegex.test(value.trim()))
        message = "Telefonnummeret må bestå av 8 siffer";
    }

    if (name === "address") {
      if (!value.trim()) message = "Vennligst oppgi leveringsadresse";
    }

    if (name === "postalNumber") {
      if (!value.trim()) {
        message = "Vennligst oppgi postnummer";
      } else if (!/^\d{4}$/.test(value.trim())) {
        message = "Postnummer må bestå av 4 sifre";
      }
    }

    if (name === "postalCity") {
      if (!value.trim()) message = "Vennligst oppgi by/sted";
    }

    // Radio buttons
    if (name === "treeType" && !value) message = "Vennligst velg tretype";
    if (name === "treeForm" && !value) message = "Vennligst velg form på treet";
    if (name === "branchDensity" && !value)
      message = "Vennligst velg tetthet på kvistene";

    if (name === "message") {
      if (value.trim().length > 300) message = "Maks 300 tegn";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  return {
    errors,
    validate,
    validateField,
  };
}
