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
          <a href={result?.link}>{result?.link}</a>
          <h3>{result.title}</h3>
          <p>{result?.about_this_result?.source?.description}</p>
          {type === "news" && (
            <div className="source_content">
              <p>Source: {result?.source}</p>
              <p>Updated on: {result?.date}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
