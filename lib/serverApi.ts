// import { cookies } from "next/headers";
// import { nextServer } from "./api";
// import { NotesResponse } from "./clientApi";

// export async function fetchNotes(
//   query: string,
//   currentPage: number,
//   tagQuery: string
// ) {
//   const coockieData = await cookies();
//   const response = await nextServer.get<NotesResponse>(`/notes`, {
//     params: {
//       search: query || undefined,
//       page: currentPage,
//       perPage: 12,
//       tag: tagQuery || undefined,
//     },
//     headers: { Cookie: coockieData.toString() },
//   });
//   return response.data;
// }
