import { cookies } from "next/headers";
import { nextServer } from "./api";
import { Note, NotesResponse } from "@/types/note";
import { User } from "@/types/user";
import { CheckSessionResp } from "@/types/session";

export async function fetchNotesServer(
  search: string,
  page: number,
  tag?: string
) {
  const coockieData = await cookies();
  const response = await nextServer.get<NotesResponse>(`/notes`, {
    params: {
      ...(search && { search }),
      page,
      perPage: 12,
      ...(tag && { tag }),
    },
    headers: { Cookie: coockieData.toString() },
  });
  return response.data;
}

export const getMe = async () => {
  const coockieData = await cookies();
  const { data } = await nextServer.get<User>(`/users/me`, {
    headers: { Cookie: coockieData.toString() },
  });
  return data;
};

export const checkServerSession = async () => {
  const coockieData = await cookies();
  const response = await nextServer.get<CheckSessionResp>(`/auth/session`, {
    headers: { Cookie: coockieData.toString() },
  });
  return response;
};

export async function fetchServerNoteById(id: string) {
  const coockieData = await cookies();
  const response = await nextServer.get<Note>(`/notes/${id}`, {
    headers: { Cookie: coockieData.toString() },
  });
  return response.data;
}
