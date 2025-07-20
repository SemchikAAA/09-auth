import { cookies } from "next/headers";
import { nextServer } from "./api";
import { NotesResponse } from "@/types/note";

export async function fetchNotesServer(
  search: string,
  page: number,
  tag?: string
) {
  const coockieData = await cookies();
  const response = await nextServer<NotesResponse>(`/notes`, {
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
