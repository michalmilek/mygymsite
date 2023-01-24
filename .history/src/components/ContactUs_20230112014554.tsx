import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className="bg-primary2 flex flex-col justify-center items-center font-poppins py-6"
      ref={form}
      onSubmit={sendEmail}>
      <h1 className="text-white text-7xl mb-10">Contact Me</h1>
      <label className="text-white text-3xl">Name:</label>
      <input
        className="outline-none border-none text-lg px-3"
        type="text"
        name="user_name"
      />
      <label className="text-white text-3xl">Email</label>
      <input
        className="outline-none border-none text-lg px-3"
        type="email"
        name="user_email"
      />
      <label className="text-white text-3xl">Message</label>
      <textarea
        className="outline-none border-none text-lg min-w-[900px] min-h-[600px] py-24"
        name="message"
      />
      <button
        className="text-2xl bg-white text-black mt-4 px-4 py-3 rounded-lg active:scale-90"
        type="submit">
        Send
      </button>
    </form>
  );
};
