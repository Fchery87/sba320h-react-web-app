import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';

const NewsItem = ({ article }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const handleReadMore = () => {
    navigate(`/news/${encodeURIComponent(article.url)}`);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="news-item">
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <button onClick={handleReadMore}>Read more</button>
      <CiHeart
        className={`like-icon ${liked ? 'liked' : ''}`}
        onClick={handleLikeClick}
      />
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
