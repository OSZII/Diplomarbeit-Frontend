import { redirect } from "@sveltejs/kit";

export const load = ({ cookies }) => {
  if (!cookies.get("token")) {
    throw redirect(301, "/login");
  }
  return {
    data: null,
  };
};
