import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
    slug: 'posts',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            unique: true,
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
        },
        {
            name: 'tags',
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
            name: 'date',
            type: 'date',
        },
    ],
}
