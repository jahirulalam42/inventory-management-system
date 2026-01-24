"use client";
import React from "react";
import LoginLogo from "../../../public/images/Logo-login.png";
import LoginLogoSmall from "../../../public/images/Logo-login-small.png";
import GoogleLogo from "../../../public/images/google.png";
import Image from "next/image";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../ui/input";

import Link from "next/link";
import { Button } from "../ui/button";

const SignUp = () => {
  const form = useForm();
  return (
    <div className="min-h-screen flex md:flex-row flex-col justify-center items-center">
      <div className="hidden flex-1 md:flex justify-center items-center">
        <Image src={LoginLogo} alt="Login-Logo" />
      </div>
      <div className="w-full md:flex-1 flex flex-col justify-center items-center md:gap-6 gap-4">
        <Image src={LoginLogoSmall} alt="Login-logo-small" />
        <h1 className="font-semibold md:text-3xl text-2xl">
          Create an account
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Start your 30-day free trial.
        </p>
        <div className="min-w-sm flex flex-col gap-6">
          <FormProvider {...form}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name*</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>

                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>

                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Create a password"
                      {...field}
                    />
                  </FormControl>

                  <FormDescription>
                    Must be at least 8 characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FormProvider>

          <Button className="rounded-sm bg-blue-600 hover:bg-blue-800">
            Sign in
          </Button>
          <Button
            className="rounded-sm bordered border-2 border-gray-100"
            variant={"ghost"}
          >
            <Image src={GoogleLogo} alt="Google Logo" /> Sign in with Google
          </Button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link
              href="#"
              className="text-blue-500 hover:underline font-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
