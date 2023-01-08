import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async ({ cookies }) => {
  if (!cookies.get("token")) {
    throw redirect(301, "/login");
  }

  const sensors = await fetch("http://localhost:3000/sensors/detailed", {
    headers: {
      Authorization: cookies.get("token"),
    },
  });

  const data = sensors.json();

  return {
    sensors: data,
  };
}) satisfies PageLoad;
