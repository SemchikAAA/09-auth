export type Tag = "Todo" | "Personal" | "Work" | "Meeting" | "Shopping";

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: Tag;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface NewNoteData {
  title: string;
  content: string;
  tag: Tag;
}

export interface ServerSuccesResponse {
  succes: boolean;
}
export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}
