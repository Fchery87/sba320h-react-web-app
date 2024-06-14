import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const NewsItem = ({ article }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/news/${encodeURIComponent(article.url)}`);
  };

  return (
    <div className="news-item">
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <button onClick={handleReadMore}>Read more</button>
    </div>
  );
};

NewsItem.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default NewsItem;
