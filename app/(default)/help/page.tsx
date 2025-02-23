"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HelpPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/help/get-started");
    window.location.pathname = "/help/get-started";
  }, [router]);

  return null;
}
