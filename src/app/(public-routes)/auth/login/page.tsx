"use client";
import Cookies from "js-cookie";

import AuthButton from "@/components/auth/AuthButton";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  function handleLogin() {
    Cookies.set("achird-token", "1234");
    router.push("/settings");
  }
  return (
    <AuthButton onClick={handleLogin}>
      <p>Entrar com o github</p>
    </AuthButton>
  );
}
