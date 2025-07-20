"use client";

import { useAuth } from "@/lib/store/authStore";
import css from "./EditProfilePage.module.css";
import { useRouter } from "next/navigation";
import { updateUser } from "@/lib/api/clientApi";
import { UpdateUserProps } from "@/types/user";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Edit() {
  const { user } = useAuth();
  const setUser = useAuth((state) => state.setUser);
  const userName = user?.username ?? "";
  const router = useRouter();
  const redirect = () => router.push("/profile");
  const close = () => router.back();

  const handleSubmit = async (formData: FormData) => {
    try {
      const value = Object.fromEntries(formData) as UpdateUserProps;
      console.log("value", value);

      const updatedUser = await updateUser(value);
      setUser(updatedUser);
      toast.success("Your changes have been saved.");
      redirect();
    } catch {
      toast.error(
        "Failed to update profile. Please check your data and try again."
      );
    }
  };
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        <Image
          src={user?.avatar || "/default-avatar.svg"}
          alt="User Avatar"
          width={120}
          height={120}
          className={css.avatar}
        />

        <form className={css.profileInfo} action={handleSubmit}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              name="username"
              className={css.input}
              defaultValue={userName}
              required
            />
          </div>

          <p>Email:{user?.email} </p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button type="button" className={css.cancelButton} onClick={close}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
