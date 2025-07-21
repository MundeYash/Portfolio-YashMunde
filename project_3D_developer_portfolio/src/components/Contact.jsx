import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useToast } from "../ToastContext";

const Contact = () => {
  const formRef = useRef();
  const { showToast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Yash Munde",
          from_email: form.email,
          to_email: "yashmunde68@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showToast(
            "success",
            "Message Sent Successfully!",
            "Thank you for reaching out.I will get back to you as soon as possible"
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
          setErrors({});
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showToast(
            "error",
            "Oops! Something went wrong",
            "Please check your connection and try again."
          );
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 dark:bg-white p-8 rounded-2xl transition-colors duration-300"
      >
        <p
          className={`${styles.sectionSubText} dark:text-cyan-700 transition-colors duration-300`}
        >
          Get in touch
        </p>
        <h3
          className={`${styles.sectionHeadText} dark:text-gray-900 transition-colors duration-300`}
        >
          Contact.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white dark:text-cyan-700 font-medium mb-4 transition-colors duration-300">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`bg-tertiary dark:bg-cyan-100 py-4 px-6 placeholder:text-secondary dark:placeholder:text-cyan-700 text-white dark:text-gray-900 rounded-lg outline-none border-none font-medium transition-colors duration-300 ${errors.name ? "border-2 border-red-500" : ""
                }`}
            />
            {errors.name && (
              <span className="text-red-500 dark:text-red-600 text-sm mt-2 transition-colors duration-300">
                {errors.name}
              </span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white dark:text-cyan-700 font-medium mb-4 transition-colors duration-300">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={`bg-tertiary dark:bg-cyan-100 py-4 px-6 placeholder:text-secondary dark:placeholder:text-cyan-700 text-white dark:text-gray-900 rounded-lg outline-none border-none font-medium transition-colors duration-300 ${errors.email ? "border-2 border-red-500" : ""
                }`}
            />
            {errors.email && (
              <span className="text-red-500 dark:text-red-600 text-sm mt-2 transition-colors duration-300">
                {errors.email}
              </span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white dark:text-cyan-700 font-medium mb-4 transition-colors duration-300">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className={`bg-tertiary dark:bg-cyan-100 py-4 px-6 placeholder:text-secondary dark:placeholder:text-cyan-700 text-white dark:text-gray-900 rounded-lg outline-none border-none font-medium transition-colors duration-300 ${errors.message ? "border-2 border-red-500" : ""
                }`}
            />
            {errors.message && (
              <span className="text-red-500 dark:text-red-600 text-sm mt-2 transition-colors duration-300">
                {errors.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            className="bg-tertiary dark:bg-cyan-700 py-3 px-8 rounded-xl outline-none w-fit text-white dark:text-white font-bold shadow-md shadow-primary dark:shadow-cyan-200 transition-colors duration-300"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
