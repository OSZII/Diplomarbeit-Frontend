import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async ({ cookies }) => {
  if (!cookies.get("token")) {
    throw redirect(301, "/login");
  }

  const fields = await fetch("http://localhost:3000/fields/detailed", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: cookies.get("token"),
    },
  });

  const data = await fields.json();

  return {
    fields: data,
  };
}) satisfies PageLoad;
