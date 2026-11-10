import publicAxios from "../publicAxios.js";
import { BLOG_API } from "../endpoints.js";

export const getBlogs = async (params) => {
  const response = await publicAxios.get(BLOG_API.BLOGS, { params });
  return response.data;
};

export const getBlogBySlug = async (slug) => {
  const response = await publicAxios.get(BLOG_API.BLOG_DETAIL(slug));
  return response.data;
};

export const getCategories = async () => {
  const response = await publicAxios.get(BLOG_API.CATEGORIES);
  return response.data;
};

export const getTags = async () => {
  const response = await publicAxios.get(BLOG_API.TAGS);
  return response.data;
};
