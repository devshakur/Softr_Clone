"use client";
import { createContext, useContext, useState } from "react";
import { supabase } from "./supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState("two");

  const signUpNewUser = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    return { ...data, error };
  };

  async function signInWithEmail({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { ...data, error };
  }

  async function handleGoogleSignIn() {
    const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    });

    return { ...data, error };
  }

  async function handleLinkedInLogin() {
    const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;
    await supabase.auth.signInWithOAuth({
      provider: "linkedin_oidc", // important: must be linkedin_oidc, not just "linkedin"
      options: {
        redirectTo,
      },
    });
  }

  const objects = {
    session,
    signUpNewUser,
    signInWithEmail,
    handleGoogleSignIn,
    handleLinkedInLogin,
  };
  return (
    <AuthContext.Provider value={objects}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
