import axios from "axios";

import { TRepository } from "../types/types";
import { BASE_API } from "../constants/api-constants";

export const getData = async (
  title: string
): Promise<{ items: TRepository[] }> => {
  try {
    const { data } = await axios.get(`${BASE_API}/search/repositories`, {
      params: {
        q: title,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    return { items: [] };
  }
};
