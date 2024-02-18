"use client";

import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import InputPassword from "@/components/atoms/InputPassword";
import { clsxm } from "@/utils/clsxm";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

export default function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string().required("Password is required"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert("Login Successful");
  };

  return (
    <div className="h-screen flex bg-white">
      {/* Left Content */}
      <div className="hidden md:block w-[65%] bg-primary">
        <div className="h-full text-white p-[20%]">
          <div
            className={clsxm(
              "h-full flex flex-col p-[10%] pr-[30%]",
              "justify-center items-center",
              "bg-[#aeaff7] "
            )}
          >
            <h1 className="text-5xl font-bold mb-4 mt-8">
              Lorem ipsum dolor si amet{" "}
              <span className="text-secondary">consectetur</span>
            </h1>

            <p className="text-lg text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Right Content - Login Form */}
      <div className="w-full md:w-[35%] bg-gray-100 p-8 md:p-16">
        <div className="max-w-sm mx-auto">
          <div className={clsxm("flex flex-col gap-2", "text-secondary mb-8")}>
            <h2 className="text-2xl font-semibold">Login</h2>
            <p>Enter your email and password to login.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              placeholder="Type your email here"
              label="Email"
              className="mt-5 text-base md:text-lg"
              name="email"
              {...register("email")}
            />
            {errors?.email && <p>{errors?.email?.message}</p>}

            <InputPassword
              placeholder="Type your password here"
              label="Password"
              className="mt-6 mb-4 text-base md:text-lg"
              name="password"
              {...register("password")}
            />
            {errors?.password && <p>{errors?.password?.message}</p>}

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-gray-700">
                  Remember Me
                </label>
              </div>
              <a href="#" className="underline">
                Forgot Password?
              </a>
            </div>
            <div className="flex justify-between gap-4">
              <Button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-300 mb-4 text-base md:text-lg"
              >
                Login
              </Button>
              <Button
                type="button"
                className="w-full bg-white text-secondary border-2 border-secondary py-2 rounded-md hover:bg-primary-dark transition duration-300 mb-4 text-base md:text-lg"
              >
                Sign Up
              </Button>
            </div>
            <div className="flex justify-center mt-8">
              <p>Or, login with</p>
            </div>
            <div className="flex justify-between gap-4 mt-2">
              <Button
                className={clsxm(
                  "w-full py-2 mb-4",
                  "bg-white text-secondary border-2 border-[#AFA2C3] rounded-md ",
                  "hover:bg-primary-dark transition duration-300 text-base md:text-lg"
                )}
              >
                Facebook
              </Button>
              <Button
                className={clsxm(
                  "w-full py-2 mb-4",
                  "bg-white text-secondary border-2 border-[#AFA2C3] rounded-md ",
                  "hover:bg-primary-dark transition duration-300 text-base md:text-lg"
                )}
              >
                Linked In
              </Button>
              <Button
                className={clsxm(
                  "w-full py-2 mb-4",
                  "bg-white text-secondary border-2 border-[#AFA2C3] rounded-md ",
                  "hover:bg-primary-dark transition duration-300 text-base md:text-lg"
                )}
              >
                Google
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
