import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const writeClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
  ignoreBrowserTokenWarning: true
})


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}