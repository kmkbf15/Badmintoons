// services/api.ts
const BASE_URL =
  process.env.API_BASE_URL?.replace(/\/$/, "") ||
  "https://badmintoons-be.vercel.app/api";

interface ApiRequestOptions {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  data?: unknown;
  params?: Record<string, string | number>;
  headers?: Record<string, string>;
}

export const apiRequest = async <T = any>({
  endpoint,
  method = "GET",
  data,
  params,
  headers = {},
}: ApiRequestOptions): Promise<T> => {
  let url = `${BASE_URL}${
    endpoint.startsWith("/") ? endpoint : `/${endpoint}`
  }`;

  if (params && Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams(
      Object.entries(params).map(([k, v]) => [k, String(v)])
    );
    url += `?${searchParams.toString()}`;
  }

  const config: RequestInit = {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (data && ["POST", "PUT", "PATCH"].includes(config.method!)) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);

  let responseData: T | null = null;
  try {
    responseData = await response.json();
  } catch {
    responseData = null;
  }

  if (!response.ok) {
    throw new Error(
      `HTTP error! status: ${response.status}, message: ${
        (responseData as any)?.message || "Unknown error"
      }`
    );
  }

  return responseData as T;
};
