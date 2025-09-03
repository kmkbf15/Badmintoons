import { apiRequest } from "../api-request";

export const sendFeedbackApi = async ({
  author,
  content,
}: {
  author?: string | null | undefined;
  content: string;
}) => {
  try {
    const res = await apiRequest({
      endpoint: "/feedback",
      data: { author, content },
      method: "POST",
    });

    return res;
  } catch (error) {
    throw error;
  }
};
