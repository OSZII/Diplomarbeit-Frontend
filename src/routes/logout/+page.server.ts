import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ cookies }) => {
  cookies.delete("token");
  throw redirect(301, "/login");
}) satisfies PageServerLoad;
