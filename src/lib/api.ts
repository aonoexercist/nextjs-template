export const api = async (endpoint: string, options: RequestInit = {}): Promise<Response> => {
  const backendUrl = process.env.BACKEND_API_URL;
  const url = `${backendUrl}/api${endpoint}`;

  const fetchOptions: RequestInit = {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  const res = await fetch(url, fetchOptions);

  // if (res.status === 401) {
  //   await logout();
  // }

  return res;
};
