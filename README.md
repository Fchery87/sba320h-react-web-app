# Essential News

## Overview
Essential News is a React-based news web application that fetches and displays the latest news articles from NewsAPI. The application features a search bar to filter news by keywords, a responsive layout, and a like button for each article. The project is deployed on Netlify.

## Technologies Used
- **React**: Frontend library for building user interfaces
- **CSS**: Styling the application
- **JavaScript**: Core programming language
- **NewsAPI**: External API for fetching news articles
- **React Router**: For routing and navigation
- **React Icons**: For using icons in the application
- **Netlify**: Hosting the application

## Features
- **Fetch News Articles**: Fetches the latest news articles from NewsAPI.
- **Search Functionality**: Filter news articles based on keywords.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Like Button**: Users can like articles, and the like button turns red when clicked.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Fchery87/sba320h-react-web-app
   cd essential-news

2. Install dependencies:
    npm install

3. Run the application:
    npm start

## Deployment
**The application is deployed on Netlify. To deploy the application:**

1. Create a Netlify account if you don't have one.
2. Link your GitHub repository to Netlify.
3. Configure build settings:
    Build command: npm run build
    Publish directory: build/
4. Deploy the site.

## Usage
1. Open the application: Visit the deployed site on Netlify.
2. Search for news: Use the search bar to filter articles by keywords.
3. Like articles: Click the heart icon to like an article. The icon will turn red.

## API Integration
**The application uses the NewsAPI to fetch the latest news articles. The API endpoint used is:**

https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY&pageSize=20

Replace YOUR_API_KEY with your actual API key from NewsAPI.

## Code Structure
1. src/components: Contains the React components
2. Header.jsx: Header component with the banner
3. NewsSearchBar.jsx: Search bar component
4. NewsList.jsx: Component to list news articles
5. NewsItem.jsx: Component for individual news articles
6. NewsDetail.jsx: Component for displaying detailed news (if applicable)
7. src/assets: Contains static assets like images