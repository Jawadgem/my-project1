import { type SchemaTypeDefinition } from 'sanity'
import { shop } from './shop'
import { chef } from './chef'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [shop, chef],
}
