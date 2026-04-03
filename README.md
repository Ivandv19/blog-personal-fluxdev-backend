# FluxDev Blog (Panel de Administración)

## Descripción

Este proyecto es el panel de administración central del Blog FluxDev. Funciona como un gestor de contenido (CMS) donde el administrador puede escribir, editar y organizar los artículos que posteriormente se muestran al público en la página web.

## Características

- **Gestión Simple**: Interfaz gráfica que permite redactar artículos y crear contenido fácilmente usando un editor visual.
- **Soporte Multilingüe**: Opción para agregar la traducción de un artículo (español e inglés) directamente desde la misma pantalla.
- **Gestor de Archivos**: Permite subir y organizar todas las imágenes utilizadas en las publicaciones de manera centralizada.
- **Disponibilidad Automática**: El contenido guardado se estructura y se proporciona automáticamente a través de una API para que el sitio web lo pueda consumir.

## Secciones

1. **Artículos (Posts)**: La vista principal donde se redactan, editan y publican las entradas del blog.
2. **Archivos (Media)**: Sección dedicada para almacenar y organizar todas las fotografías e ilustraciones.
3. **Usuarios (Users)**: Apartado para gestionar el acceso de los administradores al panel de control.

## Uso

- **Acceso Restringido**: Navega a la ruta principal de administración e inicia sesión con las credenciales correspondientes.
- **Creación de Contenido**: Ingresa a la sección de artículos para redactar y añadir imágenes a una nueva publicación.
- **Gestión Continua**: Revisa el listado de publicaciones para editar contenido existente o gestionar configuraciones adicionales.

## Tecnologías Utilizadas

- Payload CMS v3
- Next.js 15
- PostgreSQL (Base de datos)
- Node.js
- pnpm

## Instalación

1. **Clonar el Repositorio**: Descarga este proyecto en tu computadora usando Git.

```bash
git clone https://github.com/Ivandv19/blog-personal-fluxdev-backend.git
```

2. **Instalar Dependencias**: Entra a la carpeta del proyecto a través de la terminal y ejecuta:

```bash
pnpm install
```

3. **Variables de Entorno**: Crea un archivo `.env` en la raíz (puedes apoyarte en `.env.example`). Necesitarás especificar `DATABASE_URL` vinculándolo a tu base de datos local y generar una contraseña en `PAYLOAD_SECRET`.

4. **Iniciar el Proyecto**: Ejecuta el servidor localmente con el siguiente comando:

```bash
pnpm run dev
```

## Créditos

Este es el proyecto interno que maneja los datos y artículos mostrados en el portafolio web.

- Desarrollado por Ivan Cruz.

## Despliegue

Este proyecto está preparado para funcionar mediante contenedores Docker y se despliega y administra a través de plataformas como **Dokploy**.

> *Nota: Próximamente se agregará un enlace a **Swagger** donde se podrá consultar la documentación de la API.*

## Licencia

Licencia de Uso Personal:

Este software es propiedad de **Ivan Cruz**. Se permite el uso de este software solo para fines personales y no comerciales. No se permite la distribución, modificación ni uso comercial de este software sin el consentimiento expreso de **Ivan Cruz**.

Cualquier uso no autorizado puede resultar en acciones legales.
