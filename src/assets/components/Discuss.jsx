import React, { useRef, useState } from "react";
import Paragraph from "./utils/Paragraph";
import Input from "./utils/Input";
import { VscSend } from "react-icons/vsc";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import DiscussInfoCards from "./utils/DiscussInfoCards";
import { GrLocation } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const Discuss = () => {
  const [loading, setLoading] = useState(true);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_iyxpeyt", "template_k98l2h9", form.current, {
        publicKey: "cyaotwxt7Y_ZPQMlN",
      })
      .then(
        () => {
          Swal.fire({
            title: "Your form has been submitted!",
            icon: "success",
            draggable: true,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="discuss" className="my-10 lg:translate-y-[110px]">
      <div className="container">
        <div className="discuss-Shadow rounded-[15px] p-4 lg:p-22 bg-gray-white grid lg:grid-cols-2 gap-3 lg:gap-[103px] items-center">
          <div className="discussContent pb-2 lg:pb-9">
            <h2 className="text-[28px] lg:text-[38px] leading-[132%] font-semibold text-gray-900">
              Let’s discuss your Project
            </h2>
            <Paragraph className="!text-gray-400 pt-3 lg:pt-4">
              There are many variations of passages of Lorem Ipsu available. but
              the majority have suffered alte.
            </Paragraph>
            <div className="discussInfo">
              <DiscussInfoCards />
              <DiscussInfoCards />
              <DiscussInfoCards />
            </div>
          </div>
          <div className="discussForm">
            <Paragraph className="!text-gray-400 pt-2 lg:pt-4 pb-4 lg:pb-[48px]">
              There are many variations of passages of Lorem Ipsu available, but
              the majority have suffered alte.
            </Paragraph>
            <form ref={form} onSubmit={sendEmail}>
              <Input name="user_name" placeholder="Name*" />
              <Input name="user_email" placeholder="Email*" type="email" />
              <Input name="location" placeholder="Location" />
              <div className="grid md:grid-cols-3 md:gap-6">
                <Input placeholder="Budget*" name="budget" type="number" />
                <Input
                  className="md:col-span-2"
                  placeholder="Subject*"
                  name="subject"
                />
              </div>
              <Input name="message" placeholder="Message*" />
              <button className="flex items-center mt-4 lg:mt-[38px] text-sm lg:text-[16px] font-semibold text-gray-white leading-[150%] bg-primary-500 rounded-sm px-3 lg:px-6 py-2 lg:py-3 hover:bg-transparent hover:text-primary-500 hover:outline-2 outline-primary-500">
                Submit
                <VscSend className="ml-2 lg:ml-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discuss;
