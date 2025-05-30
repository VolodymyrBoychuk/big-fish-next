"use client";
import Image from "next/image";
import envelope from "../../assets/Contact/Icon/envelope.png";
import tel from "../../assets/Contact/Icon/icon.png";
import facebook from "../../assets/Contact/Icon/facebook.png";
import instagram from "../../assets/Contact/Icon/instagram.png";
import twitter from "../../assets/Contact/Icon/twitter.png";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
  phone: string;
}

const validateField = (name: keyof FormData, value: string): string => {
  if (name === "name" && (!value || value.length < 3)) {
    return "❌ The name must contain at least 3 characters!";
  }
  if (
    name === "email" &&
    (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
  ) {
    return "❌ Please enter a valid email!";
  }
  if (
    name === "message" &&
    (!value || typeof value !== "string" || value.trim().length < 5)
  ) {
    return "❌ The message must contain at least 5 characters!";
  }
  if (name === "phone" && (!value || !/^\+?[1-9]\d{1,14}$/.test(value))) {
    return "❌ Phone must be a valid string!";
  }
  return "";
};

const Contacts = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [message, setMessage] = useState("");

  const hasErrors = Object.values(errors).some((error) => error !== "");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage("");
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error while sending!");
      }

      setMessage("Request successfully sent! We will contact you soon.");
      console.log("✅ Successfully sent");
      //form.reset();
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("❌ Error:", error);
    }
  };

  return (
    <div className="bg-[#0c1650] mt-16 h-screen overflow-hidden">
      {/* Header */}
      <div className="relative ml-[200px]  mt-12">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight text-left">
          Contact
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mx-[100px] mt-1 p-24">
        {/* Left Section */}
        <div className="space-y-4">
          <div>
            <h2 className="text-white text-[24px] font-bold leading-[120%]">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-white text-[18px] font-normal leading-[150%] mt-6 pr-1">
              Whether you&apos;re launching an MVP, scaling an existing product,
              or just exploring options — we’d love to hear what you’re
              building.
            </p>
            <p className="text-white text-[18px] font-normal leading-[150%] pr-1">
              We&apos;re fast, technical, and focused on results — no fluff,
              just great apps.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <Image
                src={envelope}
                alt="Email Icon"
                className="w-[24px] h-[24px]"
              />
              <span className="text-white text-[16px]">hello@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <Image src={tel} alt="Phone Icon" className="w-[19px] h-[19px]" />
              <span className="text-white text-[16px]">+380 (93) 000-0000</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/vionum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={facebook}
                  alt="Facebook"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </a>
              <a
                href="https://www.instagram.com/vionum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={instagram}
                  alt="Instagram"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </a>
              <a
                href="https://twitter.com/vionum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={twitter}
                  alt="Twitter"
                  className="w-[24px] h-[24px] cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div>
          <div className="bg-[#374591] p-6 rounded-lg border-none">
            <form onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="bg-[#B8CAE01F] border-none p-3 rounded-md w-full placeholder-gray-500"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-describedby="name-error"
                    />
                    {errors.name && (
                      <p id="name-error" className="error" aria-live="polite">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="bg-[#B8CAE01F] border-none p-3 rounded-md w-full placeholder-gray-500"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-describedby="phone-error"
                    />
                    {errors.phone && (
                      <p id="phone-error" className="error" aria-live="polite">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="bg-[#B8CAE01F] border-none p-3 rounded-md w-full placeholder-gray-500"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby="email-error"
                  />
                  {errors.email && (
                    <p id="email-error" className="error" aria-live="polite">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="bg-[#B8CAE01F] border-none p-3 rounded-md w-full placeholder-gray-500"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby="message-error"
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="error" aria-live="polite">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className={`bg-[#4a90e2] text-white py-2 px-6 rounded-md w-1/4 ${
                      hasErrors
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100"
                    }`}
                    disabled={hasErrors}
                  >
                    Submit
                  </button>
                </div>
                {message && (
                  <div className="text-green-400 font-medium">{message}</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
