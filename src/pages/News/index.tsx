import React, { useState, useEffect } from "react";
import serpAPI from "../../services/service";
import CircularIndeterminate from "../../shared/circularProgress";
import { newsPharses } from "../../shared/constants";
import Result from "../../components/Result";
import './styles.css';

const News: React.FC = () => {
  const [result, setResult] = useState([]);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    let index = Math.floor(Math.random() * newsPharses.length);
    const result = await serpAPI.search(newsPharses[index]);
    setResult(result.top_stories);
    setImage([])
    setLoading(false);
  };

  return (
    <div className="news_container" data-testid="container">
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
