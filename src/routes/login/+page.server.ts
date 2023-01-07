import { redirect, fail } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = ({ cookies }) => {
  const tokenAvailable = cookies.get("token");

  if (tokenAvailable) {
    throw redirect(302, "/overview");
  }
};

export const actions: Actions = {
  default: async ({ request, cookies, event }) => {
    console.log("Formsubmit");
    const data = await request.formData();

    console.log(data);

    if (!data.get("username") || !data.get("password")) {
      return fail(400, { error: "Missing username or password" });
    }

    let username = data.get("username");
    let password = data.get("password");

    let user = {
      username,
      password,
    };

    let response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    let responseData = await response.json();

    console.log(responseData);

    if (responseData.access_token) {
      cookies.set("token", `Bearer ${responseData.access_token}`, {
        httpOnly: true, // damit der cookie nicht mit js zugreifbar ist
        path: "/",
        secure: false, // auf true setzen, damit nur über https gesetzt werden kann
        sameSite: "strict", // to prevent cookies being sent in crosssite requests
        maxAge: 60 * 20, // 20 mins as long as the jwt token lasts day
      });
    }

    throw redirect(302, "/overview");
  },
};
