import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?domains=${encodeURIComponent(id)}&apiKey=7ead49c10e4d4bcca3ead8a2695128d9`)
      .then(response => response.json())
      .then(data => {
        setArticle(data.articles[0]);
      });
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="news-detail">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <p>{article.content}</p>
    </div>
  );
};

export default NewsDetail;
