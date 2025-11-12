# Step 1: Use lightweight Node image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the app
COPY . .

# Step 5: Expose port
EXPOSE 8000

# Step 6: Run app
CMD ["npm", "start"]
