import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  const topNews = news.slice(0, 2);
  const remainingNews = news.slice(2, 20); 

  return (
    <div>
      <div className="top-news">
        {topNews.map((article, index) => (
          <NewsItem key={article.url || index} article={article} />
        ))}
      </div>
      <div className="news-grid">
        {remainingNews.map((article, index) => (
          <NewsItem key={article.url || index} article={article} />
        ))}
      </div>
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      urlToImage: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default NewsList;
