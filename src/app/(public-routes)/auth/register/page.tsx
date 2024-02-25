"use client";

import AuthButton from "@/components/auth/AuthButton";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { login, register } from "@/services/api/authService";
import { FiLoader } from "react-icons/fi";
import { AxiosError } from "axios";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [accessCode, setAcessCode] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGetCode() {
    setLoading(true);
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${window.location.origin}${pathname}&scope=user`;
    router.replace(authUrl);
    setLoading(false);
  }

  async function handleLogin(code: string) {
    setLoading(true);

    router.replace(`/auth/register`);

    try {
      const response = await register(code as string);

      if (response.data.token) {
        toast.success("Conta criada com sucesso");
        Cookies.set("ACHIRD_TOKEN", response.data.token, {
          expires: Date.now() + 4 * 60 * 60 * 1000,
        });
        router.replace("/settings");
      }
    } catch (error) {
      if (error instanceof AxiosError)
        toast.error(error?.response?.data.message);
      else toast.error("Algo deu errado");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (code) {
      setAcessCode(code);
    }
  }, [code]);

  useEffect(() => {
    if (accessCode) {
      handleLogin(accessCode);
    }
  }, [accessCode]);
  return (
    <>
      <button className="btn btn-primary " onClick={handleGetCode}>
        <p>Criar conta com o github</p>
        {loading && <FiLoader className="animate-spin" />}
      </button>
      <Link className="link link-primary text-sm mt-2" href="/auth/login">
        Já tem uma conta? Faça login
      </Link>
    </>
  );
}
