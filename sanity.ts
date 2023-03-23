import { createClient } from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    apiVersion: '2021-10-21',
    useCdn: process.env.NODE_ENV === 'production',
}

//Set uo the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
