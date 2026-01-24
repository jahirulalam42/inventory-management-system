import { Button } from "@/components/ui/button";
import { RedirectType, redirect } from "next/navigation";

export default function Home() {
  const user = {
    name: "MD.Jahirul Alam Sarkar",
    gender: "Male",
  };

  if (user) {
    redirect("/dashboard", RedirectType.push);
  } else {
    redirect("/login", RedirectType.push);
  }
}
