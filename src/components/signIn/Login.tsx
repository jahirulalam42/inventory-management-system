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
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import Link from "next/link";
import { Button } from "../ui/button";

const Login = () => {
  const form = useForm();
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
          <FormProvider {...form}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
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
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>

                  <FormDescription>
                    <div className="flex flex-row gap-8 md:justify-between">
                      <div className="flex flex-row gap-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Remember for 30 days</Label>
                      </div>
                      <Link
                        href="#"
                        className="text-blue-500 hover:underline font-semibold"
                      >
                        Forgot password?
                      </Link>
                    </div>
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
