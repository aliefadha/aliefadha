# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Memory optimization for build
ENV NODE_OPTIONS="--max_old_space_size=1024"

# Add package caching layer
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit

# Add build caching
COPY next.config.ts ./
COPY tsconfig.json ./
COPY public ./public
COPY src ./src
COPY postcss.config.mjs ./

# Build with increased memory limit
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy package files
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev --prefer-offline --no-audit

# Copy built files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]