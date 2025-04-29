import { redirect } from "next/navigation";
export default function IndexUser() {
  redirect("/me/home");
  return null; 
  }
  