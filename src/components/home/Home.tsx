import React, { useState } from "react";
import { MemoizedSearch } from "../search/Search";
import serpAPI from "../../services/serpAPI";
import Result from "../result/Result";
import CircularIndeterminate from "../../shared/circularProgress";

const Home: React.FC = () => {
  const [result, setResult] = useState([]);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchSomething = async (value: string) => {
    setLoading(true)
    const result = await serpAPI.search(value);
    setResult(result.organic_results);
    setImage(result.inline_images)
    setLoading(false);
  };

  return (
    <div className="home_container" data-testid="test-container">
      <MemoizedSearch searchSomething={searchSomething} />
      {!loading ? !!result && result.map((res: any, index: number) => (
        <div className="home_content" key={index}>
          <Result result={res} image={image} index={index} type='search' />
        </div>
      )) : <CircularIndeterminate  />}
    </div>
  );
};

export default Home;
