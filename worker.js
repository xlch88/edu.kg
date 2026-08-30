const siteDirectoryByHostname = {
  "wtf.edu.kg": "wtf",
  "shit.edu.kg": "shit",
  "fuck.edu.kg": "fuck",
};

export default {
  fetch(request, env) {
    const url = new URL(request.url);
    const siteDirectory = siteDirectoryByHostname[url.hostname];

    if (!siteDirectory) {
      return new Response("Not Found", { status: 404 });
    }

    url.pathname = `/${siteDirectory}${url.pathname}`;
    return env.ASSETS.fetch(new Request(url, request));
  },
};
