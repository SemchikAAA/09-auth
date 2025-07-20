export type Tag = "Todo" | "Personal" | "Work" | "Meeting" | "Shopping";

export interface Note {
  id: number;
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
