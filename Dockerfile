FROM node:23-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare yarn@1.22.22 --activate

COPY package.json yarn.lock postcss.config.mjs ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:23-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN corepack enable && corepack prepare yarn@1.22.22 --activate

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

RUN yarn install --production --frozen-lockfile

USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]