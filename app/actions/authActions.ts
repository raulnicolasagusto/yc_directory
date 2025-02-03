"use server"; // Esto indica que este archivo es un Server Component

import { signIn } from "next-auth/react";

export async function handleSignIn() {
  await signIn("github");
}
