import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async ({ cookies }) => {
  if (!cookies.get("token")) {
    throw redirect(301, "/login");
  }

  const sensorValues = await fetch(
    "http://localhost:3000/sensorvalues/detailed",
    {
      headers: { Authorization: cookies.get("token") },
    }
  );

  const response = await sensorValues.json();

  return {
    sensorValues: response,
  };
}) satisfies PageLoad;
