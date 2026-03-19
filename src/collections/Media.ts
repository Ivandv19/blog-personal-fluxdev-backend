import type { CollectionConfig } from 'payload'

// Configuración para el manejo de archivos multimedia e imágenes
export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true, // Acceso público para lectura de archivos
  },
  fields: [
    {
      name: 'alt', // Texto alternativo (importante para SEO)
      type: 'text',
      required: true,
    },
  ],
  upload: true, // Habilita la subida de archivos físicos
}
