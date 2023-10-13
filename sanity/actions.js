

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
      groq`*[_type == "users"]`
    );

    return info;
  } catch (error) {
    console.log(error);
  }
}

export const getProducts = async (start, end, searchParams='') => {

  const { category, tags } = searchParams
  let query
  if (category && tags) {
    query = `*[_type == "product" && category == '${category}' && '${tags}' in tags]`
  } else if (category) {
    query = `*[_type == "product" && category == '${category}']`
  } else if (tags) {
    query = `*[_type == "product" && '${tags}' in tags]`
  } else {
    query = `*[_type == "product"]`
  }
  
  try {
    const products = await client.fetch(
      groq`${query} | order(_id) [${start}...${end}]{
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
    console.log(error);
  }
}

export const getGallery = async (page, pageSize) => {

  const start = (page - 1) * pageSize
  const end = (start - 1) + pageSize

  
  try {
    const images = await client.fetch(groq`*[_type == "gallary"] | order(_id) [${start}...${end}]{
      title,
      tag,
      "image": image.asset->url,
    }`)

    return images

  } catch (error) {
    console.log(error);
  }

}

export const getGalleryCount = async () => {
  try {
    const gallaryCount = await client.fetch(
      groq`count(*[_type == "gallary"])`
    );

    return gallaryCount;
  } catch (error) {
    console.log(error);
  }
}

export const getProductsCount = async (searchParams='') => {

  const { category, tags } = searchParams
  let query
  if (category && tags) {
    query = `*[_type == "product" && category == '${category}' && '${tags}' in tags]`
  } else if (category) {
    query = `*[_type == "product" && category == '${category}']`
  } else if (tags) {
    query = `*[_type == "product" && '${tags}' in tags]`
  } else {
    query = `*[_type == "product"]`
  }

  try {
    const productsCount = await client.fetch(
      groq`count(${query}) `
    );

    return productsCount;
  } catch (error) {
    console.log(error);
  }
}

export const getKeywords = async () => {
  try {

    const keywords = await client.fetch(
      groq`*[_type == "product"]{
        category,
        tags
      }`
    )

    return keywords

  } catch (error) {
    console.log(error);
  }
}

export const createUser = async (userBody) => {

  const users = await getUsers()
  let result;

  const exist =  users.find(user => {
    if (user.email == userBody.email) {
      result = 'email'
      return user
    }
    if (user.username == userBody.username) {
      result = 'username'
      return user
    }
  })

  if (exist) {
    return result
  } else {
    result = await writeClient.create({
      _type: "users",
      ...userBody
    })
  
    return result
  }
}

export const addLiked = async (userId, productId) => {

  const userLikes = await client.fetch(
    groq`*[_type == "liked" && user._ref == $userId]`, {
      userId : userId
    }
  )

  if (userLikes.length === 0) {
    const newItem = {
      _type: 'liked',
      user: {
        _type: 'reference',
        _ref: userId,
      },
      products: [
        {
          _type: 'reference',
          _ref: productId,
        },
      ],
    };
  
    // Create the wishlist item in Sanity
    const result = await writeClient.create(newItem).commit({
      autoGenerateArrayKeys: true,
    });

    return result
  } else {
    const userLikesItem = userLikes[0]; // Assuming there is only one wishlist per user
    // Check if the product is already in the user's wishlist
    const productExists = userLikesItem.products.some(productRef => productRef._ref === productId);

    if (productExists) {
      return 'product added'
    } else {
      userLikesItem.products.push({
        _type: 'reference',
        _ref: productId,
      });
  
      // Update the wishlist item in Sanity
      const result = writeClient.patch(userLikesItem._id).set({ products: userLikesItem.products }).commit({
        autoGenerateArrayKeys: true,
      });

      return result
    }
  }

}

export const getLiked = async (userId) => {

  const userLikes = await client.fetch(
    groq`*[_type == 'liked' && user._ref == "${userId}"][0]`
  )

  return userLikes

}

export const getProduct = async (ProductId) => {

  const product = await client.fetch(
    groq`*[_type == 'product' && _id == "${ProductId}"][0]{
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
  )

  return product

}