import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Topics from "../Topics/Topics";
import { fetchTopicsData } from "../../api/topicsData";
import "./homeContent.css";

const HomeContentComponent = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    //fetch data
    fetchTopicsData().then((res) => {
      setTopics(res);
    });
  }, []);

  return (
    <main className="home-content">
      <SearchBar />
      <h2 className="nums-topic-found-h2">"24" Web Topics Found</h2>
      <Topics topics={topics} />
    </main>
  );
};

export default HomeContentComponent;
