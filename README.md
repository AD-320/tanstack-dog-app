# Dog API App

This project is a React application that demonstrates the use of [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/quick-start) to fetch and display data from the [Dog API](https://dogapi.dog/). The application retrieves and displays:

1. A list of dog breeds.
2. Detailed information about a specific breed.
3. Random dog facts.
4. Information about different dog groups.

## Features

- Fetches data from the Dog API endpoints.
- Handles API responses including loading, errors, and successful states.
- Uses `TanStack Query` for efficient data fetching and caching.
- Displays data in an organized and interactive format.

## Requirements

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dog-api-app.git
   cd dog-api-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Endpoints Used

- **Breeds**: `https://dogapi.dog/api/v2/breeds`
- **Breed Details**: `https://dogapi.dog/api/v2/breeds/{id}`
- **Dog Facts**: `https://dogapi.dog/api/v2/facts`
- **Dog Groups**: `https://dogapi.dog/api/v2/groups`

## Project Structure

- `App.js`: Main application component that renders all features.
- `DogBreeds.js`: Fetches and displays a list of dog breeds.
- `BreedDetails.js`: Fetches and displays detailed information about a specific breed.
- `DogFacts.js`: Fetches and displays random dog facts.
- `DogGroups.js`: Fetches and displays information about dog groups.

## Technologies Used

- React
- TanStack Query
- Dog API
