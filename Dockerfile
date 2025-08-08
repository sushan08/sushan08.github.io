from node:18.16.0
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json   
COPY package*.json ./
# Install dependencies
RUN npm install --legacy-peer-deps
# Copy the rest of the application code
COPY . .
# Start the application
RUN npm run build
CMD ["npm", "start"]


