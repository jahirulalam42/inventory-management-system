"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("User Data", session);

  useEffect(() => {
    if (session?.user) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [session, router]);

  console.log(session);

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  //     </div>
  //   );
  // }
  return null;
}
