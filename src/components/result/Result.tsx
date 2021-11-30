import React, { useMemo } from "react";
import "./Result.css";

type Props = {
  result: any;
  image: any;
  index: number;
  type: string;
};

const Result: React.FC<Props> = ({ result, image, index, type }) => {
  const imgUrl = useMemo(() => {
    if (type === "search") {
      return image[index]?.thumbnail || null;
    } else if (type === "news") {
      return result?.thumbnail || null;
    }
  }, [type, image, result, index]);

  return (
    <div className="result_container" data-testid="container">
      <div className="result_content">
        <div className="image_content">
          {!!imgUrl && <img src={imgUrl} alt="serp_img" />}
        </div>
        <div className="text_content">
          <h3 className="card-title">{result.title}</h3>
          <p className="card-desc">
            {result?.about_this_result?.source?.description}
          </p>
          <div className="card-action">
            <span className="visit-name">Visit here :</span>
            <a className="visit-url" target="_blank" rel="noreferrer" href={result?.link}>
              {result?.link}
            </a>
          </div>
          {type === "news" && (
            <div className="source_content">
              <p className="source-txt">Source: {result?.source}</p>
              <p className="update-txt">Updated on: {result?.date}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
