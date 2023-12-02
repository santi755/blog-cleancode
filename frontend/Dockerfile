# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install the project dependencies
RUN yarn install

# Copy the entire project to the working directory
COPY . .

# Build the frontend application
# RUN yarn build

# Expose the desired port (e.g., 3000 for a React app)
EXPOSE 3000

# Start the frontend application
# CMD [ "yarn", "dev" ]
CMD [ "yarn", "dev", "--host", "0.0.0.0" ]