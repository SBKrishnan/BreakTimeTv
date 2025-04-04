import axios from "axios";

const BASE_URL = "https://iptv-org.github.io/api";

export const fetchChannels = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/channels.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching channels ", error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetch Categories", error);
    return [];
  }
};

export const fetchLanguages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/languages.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching languages", error);
    return [];
  }
};

export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/countries.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Countries", error);
    return [];
  }
};

export const fetchStreamsLinks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/streams.json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Streaming Links", error);
    return [];
  }
};

export const fetchChannelsByCategory = async (categoryId) => {
  try {
    const response = await axios.get(`${BASE_URL}/channels.json`);
    const filteredChannels = response.data.filter(
      (channel) => channel.categories && channel.categories.includes(categoryId)
    );
    return filteredChannels;
  } catch (error) {
    console.error("Error fetching channels by category:", error);
    return [];
  }
};
