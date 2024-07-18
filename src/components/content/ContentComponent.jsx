import React, { useEffect, useState } from "react";
import SearchAndSelecorsComponent from "../search-selectors/SearchAndSelecorsComponent";
import CardsComponent from "../TopicsCard/CardsComponent";
import { fetchTopicsData } from "../../api/topicsData";
import "./content.css";

const ContentComponent = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    //fetch data
    fetchTopicsData().then((res) => {
      setTopics(res);
    });
  }, []);

  return (
    <main>
      <SearchAndSelecorsComponent />
      <h2 className="nums-topic-found-h2">"24" Web Topics Found</h2>
      <CardsComponent topics={topics} />
    </main>
  );
};

export default ContentComponent;
