# Etapa base (Node.js)
FROM node:22-alpine AS base
WORKDIR /app

# Instalación de dependencias con pnpm
FROM base AS deps
RUN apk add --no-cache libc6-compat
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable && pnpm install

# Etapa de compilación (Build)
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Imagen final de producción
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

# Usuario de seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Assets y build optimizado
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Puerto 3050
EXPOSE 3050
ENV PORT 3050

# Iniciar servidor
CMD ["node", "server.js"]
