import { useState, useEffect } from 'react';
import Header from './components/Header';
import NewsSearchBar from './components/NewsSearchBar';
import NewsList from './components/NewsList';

const App = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7ead49c10e4d4bcca3ead8a2695128d9&pageSize=20');
        const data = await response.json();
        if (data && data.articles) {
          const newsWithImages = data.articles.filter(article => article.urlToImage);
          setNews(newsWithImages);
          setFilteredNews(newsWithImages);
        } else {
          console.error('Invalid data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    setFilteredNews(
      news.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, news]);

  return (
    <div>
      <Header />
      <div className="container">
        <NewsSearchBar setSearchQuery={setSearchQuery} />
        <NewsList news={filteredNews} />
      </div>
    </div>
  );
};

export default App;
