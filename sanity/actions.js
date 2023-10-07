

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