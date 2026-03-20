import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Importación de las definiciones de colecciones
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Configuración central de Payload CMS
export default buildConfig({
  admin: {
    user: Users.slug, // Colección que maneja el acceso al panel admin
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  // Localización (i18n)
  localization: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    fallback: true,
  },
  // Lista de colecciones registradas en el sistema
  collections: [Users, Media, Posts],
  // Editor de texto enriquecido moderno Lexical
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  // Autogeneración de tipos de TypeScript
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // Adaptador de base de datos Postgres
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
