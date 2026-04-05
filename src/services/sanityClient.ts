import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "k80zei8w",
  dataset: "production",
  useCdn: false, // fast
  apiVersion: "2023-01-01",
});