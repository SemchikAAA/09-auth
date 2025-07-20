"use client";

import { useRouter } from "next/navigation";
import css from "./SignInPage.module.css";
import { login } from "@/lib/api/clientApi";
import { AuthRequest } from "@/types/user";
import { useAuth } from "@/lib/store/authStore";

export default function Login() {
  const router = useRouter();
  const setUser = useAuth((state) => state.setUser);

  const handleLogin = async (formData: FormData) => {
    const payload = Object.fromEntries(formData) as AuthRequest;
    const res = await login(payload);
    if (res) {
      setUser(res);
      router.push("/profile");
    }
  };
  return (
    <main className={css.mainContent}>
      <form className={css.form} action={handleLogin}>
        <h1 className={css.formTitle}>Sign in</h1>

        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Log in
          </button>
        </div>

        {/* <p className={css.error}>{error}</p> */}
      </form>
    </main>
  );
}
