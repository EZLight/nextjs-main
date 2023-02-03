import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'abstudio',

  projectId: '9k7z7kht',
  dataset: 'abstudio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
