import React from "react";
import "./Result.css";

type Props = {
  result: any;
  image: any;
  index: number;
  type: string;
};

const Result: React.FC<Props> = ({ result, image, index, type }) => {
  return (
    <div className="result_container">
      <div className="result_content">
        {type === "search" &&
        <div className="image_content">
         {!!image && <img src={image[index]?.thumbnail} alt="serp_img" />}
        </div>}
        {type === "news" &&
        <div className="image_content">
         {!!result && <img src={result?.thumbnail} alt="serp_img" />}
        </div>}
        <div className="text_content">
          <a href={result?.link}>{result?.link}</a>
          <h3>{result.title}</h3>
          <p>{result?.about_this_result?.source?.description}</p>
          <div className="source_content">
            <p>Source: {result?.source}</p>
            <p>Updated on: {result?.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
