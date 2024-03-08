"use client";
import { login } from "@/services/api/authService";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { toast } from "sonner";

export default function Login() {
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

    router.replace(`/auth/login`);

    try {
      const response = await login(code as string);
      if (response.data.jwt_token) {
        toast.success("Login realizado com sucesso");
        Cookies.set("ACHIRD_TOKEN", response.data.jwt_token, {
          expires: Date.now() + 4 * 60 * 60 * 1000,
        });
        router.refresh()
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
      <button onClick={handleGetCode} className="btn btn-primary">
        Entrar com o github
        {loading && <FiLoader className="animate-spin" />}
      </button>
      
    </>
  );
}
