"use client";
import { SessionProvider } from "next-auth/react";
import ReducerProvider from "./ReducerProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReducerProvider>{children}</ReducerProvider>
    </SessionProvider>
  );
}
