# Movie Gallery Application

A responsive web application built with Svelte and TypeScript that displays movie information in a card-based layout with search functionality and detailed movie views.

## Technologies Used

- **Frontend Framework:** Svelte with TypeScript
- **Styling:** 
  - Tailwind CSS for utility-first styling
  - Flowbite for UI components ( Rating, card)
- **Development Server:** Vite

## Setup

1. Install the dependencies:
```bash
npm i
```

2. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Component Structure

### Home Page Components

1. **MovieGrid Component**
   - Handles the main grid layout for movie display
   - Implements responsive design:
     - Mobile: Single column
     - Tablet: Multiple columns
     - Desktop: Full grid
   - Sub-components:
     - **MovieCard Component**
       - Displays individual movie information
       - Shows movie title, release year, rating, and director
       - Implements click navigation to movie details

2. **FilteredMovies Component**
   - Displays search results below navbar
   - Implements horizontal scroll with scroll snap
   - Shows filtered movies based on search input (name/genre)
   - Responsive horizontal layout for search results

## Features

### Navigation & Search
**NavBar component** 
- Search functionality in the navigation bar 
- Search by movie name or genre
- Search results appear in a horizontally scrollable section (FilteredMovies component)
- Interactive search with real-time results

### Movie Details Page
The movie details page consists of three main components:

1. **Movie Banner Component**
   - Displays background image in 16:9 aspect ratio
   - Full-width cinematic presentation
   - Responsive image handling with Tailwind

2. **Movie Hero Component**
   - Movie poster
   - Detailed description
   - Genre information
   - Average rating 
   - Release year
   - Includes **AddReview sub-component**:
     - Modal interface for adding reviews
     - 1-5 star rating system 
     - Comment section for written reviews

3. **Movie Reviews Component**
   - Displays all movie reviews
   - Individual review containers showing:
     - User ratings 
     - User comments
     - Review metadata

## Technical Details
- Built with Svelte and TypeScript for type-safe development
- Styled using Tailwind CSS utility classes
- Enhanced with Flowbite components
- Local development server (Vite) runs on port 5173
- Utilizes hardcoded mock data for movie information
- Interactive navigation between pages
- Modal-based review system

**NOTE**
- Refreshing the page will reinitialize the moviesStore to the hardcoded data.
