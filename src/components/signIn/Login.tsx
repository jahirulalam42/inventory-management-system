"use client";
import React from "react";
import Image from "next/image";
import LoginLogo from "../../../public/images/Logo-login.png";
import LoginLogoSmall from "../../../public/images/Logo-login-small.png";
import GoogleLogo from "../../../public/images/google.png";

import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import Link from "next/link";
import { Button } from "../ui/button";

interface Inputs {
  username: string;
  password: string;
  remember?: boolean;
}

const Login = () => {
  const form = useForm<Inputs>({
    defaultValues: {
      username: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("FORM DATA:", data);
  };

  return (
    <div className="min-h-screen flex md:flex-row flex-col justify-center items-center">
      <div className="hidden flex-1 md:flex justify-center items-center">
        <Image src={LoginLogo} alt="Login-Logo" />
      </div>

      <div className="w-full md:flex-1 flex flex-col justify-center items-center md:gap-6 gap-4">
        <Image src={LoginLogoSmall} alt="Login-logo-small" />

        <h1 className="font-semibold md:text-3xl text-2xl">
          Log in to your account
        </h1>

        <p className="text-gray-500 text-sm md:text-base">
          Welcome back! Please enter your details.
        </p>

        <div className="min-w-sm flex flex-col gap-6">
          {/* IMPORTANT PART */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* USERNAME */}
              <FormField
                control={form.control}
                name="username"
                rules={{ required: "Username is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* PASSWORD */}
              <FormField
                control={form.control}
                name="password"
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* REMEMBER + FORGOT */}
              <div className="flex flex-row gap-8 md:justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <Checkbox
                    checked={form.watch("remember")}
                    onCheckedChange={(val) => form.setValue("remember", !!val)}
                  />
                  <Label>Remember for 30 days</Label>
                </div>

                <Link
                  href="#"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  Forgot password?
                </Link>
              </div>

              {/* SUBMIT */}
              <Button
                type="submit"
                className="rounded-sm bg-blue-600 hover:bg-blue-800"
              >
                Sign in
              </Button>
            </form>
          </Form>

          {/* GOOGLE BUTTON */}
          <Button
            className="rounded-sm border-2 border-gray-100"
            variant="ghost"
          >
            <Image src={GoogleLogo} alt="Google Logo" /> Sign in with Google
          </Button>

          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="#"
              className="text-blue-500 hover:underline font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
