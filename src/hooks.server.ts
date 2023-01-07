import type { Cookies, Handle } from "@sveltejs/kit";

// async function refreshJWT(cookies: Cookies){
//     let token = cookies.get("token");
//     const response =
// }

export const handle = (async ({ event, resolve }) => {
  //   refreshJWT(event.cookies);
  //   if (event.url.pathname.startsWith('/custom')) {
  //     return new Response('custom response');
  //   }

  //   const response = await resolve(event);

  //   return response;

  return await resolve(event);
}) satisfies Handle;
