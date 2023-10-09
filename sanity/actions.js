

import { groq } from 'next-sanity';
import { client, writeClient } from './lib/client';


export const getHeroInfo = async () => {
  try {
    const info = await client.fetch(
      groq`*[_type == "hero"]{
        heading,
        smallSpan,
        description,
        "image": heroBg.asset->url,
        prodectLink
      }`
    );

    return info;
  } catch (error) {
    console.log(error);
  }
}

export const getUsers = async () => {
  try {
    const info = await client.fetch(
      groq`*[_type == "users"]{
        _id
        username,
        password,
        email,
        history,
      }`
    );

    return info;
  } catch (error) {
    console.log(error);
  }
}

export const getProducts = async (start, end) => {

  try {
    const products = await client.fetch(
      groq`*[_type == "product"][${start}...${end}]{
        _id,
        title,
        summary,
        subtitle,
        new,
        discount,
        description,
        price,
        slug,
        category,
        tags,
        "images": image[].asset->url,
      }`
    );

    return products;
  } catch (error) {
    console.log('failed');
  }
}
export const getProductsCount = async (start, end) => {

  try {
    const productsCount = await client.fetch(
      groq`count(*[_type == 'product']) `
    );

    return productsCount;
  } catch (error) {
    console.log('failed');
  }
}