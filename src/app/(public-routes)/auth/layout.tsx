import AuthHeader from "@/components/auth/AuthHeader";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export default function Layout(props: PropsWithChildren) {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <AuthHeader />
      {props.children}
    </main>
  );
}
