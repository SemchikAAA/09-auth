import { AuthRequest, User } from "@/types/user";
import type {
  NewNoteData,
  Note,
  NotesResponse,
  ServerSuccesResponse,
} from "../types/note";
import { nextServer } from "./api";
import { CheckSessionResp } from "@/types/session";

//
// NOTES
//
export async function fetchNotes(search: string, page: number, tag?: string) {
  const response = await nextServer<NotesResponse>(`/notes`, {
    params: {
      ...(search && { search }),
      page,
      perPage: 12,
      ...(tag && { tag }),
    },
  });
  return response.data;
}

export async function fetchNoteById(id: number) {
  const response = await nextServer.get<Note>(`/notes/${id}`);
  return response.data;
}

export async function createNote(noteData: NewNoteData) {
  const response = await nextServer.post<Note>(`/notes`, noteData);
  return response.data;
}

export async function deleteNote(noteId: number) {
  const response = await nextServer.delete<Note>(`/notes/${noteId}`);
  return response.data;
}
//
// AUTH
//
export const register = async (payload: AuthRequest) => {
  const { data } = await nextServer.post<User>(`/auth/register`, payload);
  return data;
};

export const login = async (payload: AuthRequest) => {
  const { data } = await nextServer.post<User>(`/auth/login`, payload);
  return data;
};

export const logOut = async () => {
  await nextServer.post<ServerSuccesResponse>(`/auth/logout`);
};

//
//USERS
//

export const updateMe = async (payload: User) => {
  const { data } = await nextServer.patch<User>(`/users/me`, payload);
  return data;
};

export async function checkSession() {
  const res = await nextServer.get<CheckSessionResp>("/auth/session");
  return res.data;
}

export async function fetchUser() {
  const res = await nextServer.get<User>("/users/me");
  return res.data;
}
