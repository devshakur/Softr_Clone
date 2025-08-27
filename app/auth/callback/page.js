"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        router.replace("/dashboard");
      } else {
        router.replace("/login");
      }
    };

    handleSession();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <p className="text-gray-600 text-sm font-medium">Redirecting...</p>
      </div>
    </div>
  );
}
