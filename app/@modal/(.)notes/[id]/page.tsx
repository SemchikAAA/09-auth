import { fetchServerNoteById } from "@/lib/api/serverApi";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import NotePreviewClient from "./NotePreview.client";

type NoteDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function NotePreview({ params }: NoteDetailsProps) {
  const res = await params;

  const queryClient = new QueryClient();

  const id = res.id;

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchServerNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreviewClient />
    </HydrationBoundary>
  );
}
