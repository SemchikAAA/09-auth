import Image from "next/image";
import { getMe } from "@/lib/api/serverApi";
import css from "./ProfilePage.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Profile — NoteHub",
  description: "View and manage your profile information.",
  openGraph: {
    title: "Your Profile — NoteHub",
    description: "View and manage your profile information.",
    siteName: "NoteHub",
    images: [
      {
        url: "/op_profile.png",
        width: 1200,
        height: 630,
        alt: "User Profile Page on NoteHub",
      },
    ],
  },
};

export default async function Profile() {
  const user = await getMe();

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </main>
  );
}
