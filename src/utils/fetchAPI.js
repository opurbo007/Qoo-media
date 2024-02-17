import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
   params: {
      maxResults: 50,
   },
   headers: {
      "X-RapidAPI-Key": "596b3bd019msha72014e882f32abp1a351ejsn915cc43c5927",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
   },
};
export const fetchAPI = async (url) => {
   try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      return data;
   } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
   }
};
