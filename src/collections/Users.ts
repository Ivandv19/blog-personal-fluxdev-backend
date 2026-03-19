import type { CollectionConfig } from 'payload'

// Configuración de la colección de Usuarios del sistema
export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email', // Se muestra el email en las relaciones y listas
  },
  auth: true, // Habilita autenticación automática (login, etc)
  fields: [
    // El campo Email ya viene por defecto al activar 'auth'
    // Aquí puedes agregar campos como 'nombre', 'rol', etc.
  ],
}
