import emailjs from "@emailjs/browser";
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;

export const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env
  .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;

export const sendContactEmail = async (formData) => {
  try {
    // Send mail to business
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        treeType: formData.treeType,
        treeForm: formData.treeForm,
        branchDensity: formData.branchDensity,
        treeHeight: formData.treeHeight,
        message: formData.message,
        time: new Date().toLocaleString("no-NO"),
      },
      EMAILJS_API_KEY
    );

    // Send auto reply to costumer
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_AUTOREPLY_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        treeType: formData.treeType,
        treeHeight: formData.treeHeight,
        treeForm: formData.treeForm,
        branchDensity: formData.branchDensity,
      },
      EMAILJS_API_KEY
    );
  } catch {
    throw new Error("Failed to send email. Please try again later.");
  }
};
