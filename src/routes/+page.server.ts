import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const load = ({ cookies }) => {
  let jwtToken = cookies.get("token");
  console.log(jwtToken);

  if (!jwtToken) {
    throw redirect(301, "/login");
  }

  if (jwtToken) {
    throw redirect(301, "/overview");
  }
};

export const actions: Actions = {
  logout: async ({ cookies }) => {
    cookies.set("token", "", { expires: Date.now() - 3600 });
    console.log("cookie set");

    throw redirect(301, "/login");
  },
};
