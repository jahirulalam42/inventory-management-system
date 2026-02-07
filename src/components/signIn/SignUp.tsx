"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

import LoginLogo from "../../../public/images/Logo-login.png";
import LoginLogoSmall from "../../../public/images/Logo-login-small.png";
import GoogleLogo from "../../../public/images/google.png";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAuth } from "@/context/AuthContext";

interface SignUpInputs {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const form = useForm<SignUpInputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    setIsLoading(true);
    setError("");

    try {
      const result = await signup(data.email, data.password, data.name);

      if (!result.success) {
        setError(result.error || "Signup failed. Please try again.");
      }
    } catch (error: any) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex md:flex-row flex-col justify-center items-center">
      {/* LEFT IMAGE */}
      <div className="hidden flex-1 md:flex justify-center items-center">
        <Image src={LoginLogo} alt="Login-Logo" />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:flex-1 flex flex-col justify-center items-center md:gap-6 gap-4">
        <Image src={LoginLogoSmall} alt="Login-logo-small" />

        <h1 className="font-semibold md:text-3xl text-2xl">
          Create an account
        </h1>

        <p className="text-gray-500 text-sm md:text-base">
          Start your 30-day free trial.
        </p>

        <div className="min-w-sm flex flex-col gap-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* NAME */}
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* EMAIL */}
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* PASSWORD */}
              <FormField
                control={form.control}
                name="password"
                rules={{
                  required: "Password is required",
                  minLength: { value: 8, message: "Minimum 8 characters" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password *</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Create a password"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormDescription>
                      Must be at least 8 characters.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* SUBMIT */}
              <Button
                type="submit"
                className="rounded-sm bg-blue-600 hover:bg-blue-800"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Sign up"}
              </Button>
            </form>
          </Form>

          {/* GOOGLE */}
          <Button
            className="rounded-sm border-2 border-gray-100"
            variant="ghost"
            disabled={isLoading}
          >
            <Image src={GoogleLogo} alt="Google Logo" /> Sign up with Google
          </Button>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
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
