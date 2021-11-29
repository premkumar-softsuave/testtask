import React, { useState, useEffect } from "react";
import serpAPI from "../../services/serpAPI";
import CircularIndeterminate from "../../shared/circularProgress";
import Result from "../result/Result";
import './News.css';

const News: React.FC = () => {
  const [result, setResult] = useState([]);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    const result = await serpAPI.search('top stories');
    setResult(result.top_stories);
    setImage([])
    setLoading(false);
  };

  return (
    <div className="news_container">
      {!loading ? (
        !!result &&
        result.map((res: any, index: number) => (
          <div className="result_container" key={index}>
            <Result result={res} index={index} image={image} type='news'/>
          </div>
        ))
      ) : (
        <CircularIndeterminate />
      )}
    </div>
  );
};

export default News;
