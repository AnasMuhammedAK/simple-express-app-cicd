# Step 1: Use lightweight Node image
FROM node:18-alpine AS builder

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy all source code
COPY . .

# Step 5: Build TypeScript → JavaScript
RUN npm run build

# ---- PRODUCTION IMAGE ----
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only needed build files
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

# Install only production dependencies
RUN npm install --only=production

# Expose port
EXPOSE 8000

# Start the compiled server
CMD ["node", "dist/server.js"]
