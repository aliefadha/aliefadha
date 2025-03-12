# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Add package caching layer
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit

# Add build caching
COPY next.config.ts ./
COPY tsconfig.json ./
COPY public ./public
COPY src ./src
COPY postcss.config.mjs ./

# Build the application (using standard build, not turbopack)
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy only necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# Using the start script from package.json
CMD ["npm", "run", "start"]