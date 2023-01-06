import { redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

export const load = async () => {};

export const actions: Actions = {
  default: async ({ cookie, request }) => {
    console.log("Formsubmit");
    const data = await request.formData();
    let username = data.get("username");
    let password = data.get("password");

    let user = {
      username,
      password,
    };

    console.log(user);

    let response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
    });

    let responseData = await response.json();
    console.log(responseData);
  },
};
