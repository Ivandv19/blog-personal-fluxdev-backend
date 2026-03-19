import type { CollectionConfig } from 'payload'

// Definición de la colección de Artículos o Posts
export const Posts: CollectionConfig = {
    slug: 'posts',
    access: {
        read: () => true, // Todos pueden leer los posts
    },
    admin: {
        useAsTitle: 'title', // El título se usa como etiqueta principal
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug', // URL amigable única
            type: 'text',
            unique: true,
            required: true,
        },
        {
            name: 'content', // Contenido en texto enriquecido (RichText)
            type: 'richText',
        },
        {
            name: 'tags', // Etiquetas organizadas en un array
            type: 'array',
            labels: {
                singular: 'Tag',
                plural: 'Tags',
            },
            fields: [
                {
                    name: 'value',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'date', // Fecha de publicación
            type: 'date',
        },
    ],
}
