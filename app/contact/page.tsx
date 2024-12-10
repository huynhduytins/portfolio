"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, FormSchema } from "@/type";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+84) 981 458 194",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hduytins@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Ho Chi Minh City, Vietnam",
  },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema), // Apply the zodResolver
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] p-8 pb-4 xl:pt-12">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60"></p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="firstname"
                    placeholder="Firstname"
                    {...register("firstname")}
                  />
                  {errors.firstname && (
                    <span className="text-xs text-red-300 pl-2">
                      {errors.firstname.message}
                    </span>
                  )}
                </div>
                <div>
                  <Input
                    type="lastname"
                    placeholder="Lastname"
                    {...register("lastname")}
                  />
                  {errors.lastname && (
                    <span className="text-xs text-red-300 pl-2">
                      {errors.lastname.message}
                    </span>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-300 pl-2">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div>
                  <Input
                    type="phone"
                    placeholder="Phone number"
                    {...register("phone")}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length < 10 || value.length > 10) {
                        setError("phone", {
                          type: "manual",
                          message: "Phone number must be 10 digits",
                        });
                        setValue("phone", value);
                      } else if (value.length === 10) {
                        setError("phone", { type: "manual", message: "" });
                      }
                    }}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-300 pl-2">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>
              <Textarea
                className="min-h-[200px] xl:min-h-[350px]"
                placeholder="Type your message here..."
                {...register("message")}
              />
              <Button variant="default" size="sm" className="max-w-48">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center order-1 xl:order-none mb-8 xl:mb-0 xl:justify-center">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
