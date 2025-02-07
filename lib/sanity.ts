import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'zpmvwrx3', 
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2023-01-01', 
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);
