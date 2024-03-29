import { defineConfig } from 'sanity/lib/exports'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio-kingsike',

  projectId: 'pa4j5gzb',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})


// import {defineField, defineType} from 'sanity/lib/exports'
