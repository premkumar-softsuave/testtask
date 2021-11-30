import React, { useState, useEffect } from "react";
import Result from "../result/Result";
import CircularIndeterminate from "../../shared/circularProgress";
import serpAPI from "../../services/serpAPI";
import useQuery from "../hooks/useQuery";
import "./Home.css";
import { searchPhrases } from "../../shared/constants";

const Home: React.FC = () => {
  const [result, setResult] = useState([]);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [search] = useQuery(["search"]);

  useEffect(() => {
    if (search) {
      searchSomething(search);
    } else {
      let index = Math.floor(Math.random() * searchPhrases.length);
      searchSomething(searchPhrases[index]);
    }
  }, [search]);

  const searchSomething = async (value: string) => {
    setLoading(true);
    const result = await serpAPI.search(value);
    setResult(result?.organic_results || []);
    setImage(result?.inline_images || []);
    setLoading(false);
  };

  return (
    <div className="home_container" data-testid="test-container">
      {!loading ? (
        !!result &&
        result.map((res: any, index: number) => (
          <div className="home_content" key={index}>
            <Result result={res} image={image} index={index} type="search" />
          </div>
        ))
      ) : (
        <CircularIndeterminate />
      )}
    </div>
  );
};

export default Home;
