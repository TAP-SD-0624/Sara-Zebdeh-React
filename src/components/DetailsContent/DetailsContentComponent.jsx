import React, { useEffect, useState } from "react";
import { fetchTopicsData } from "../../api/topicsData";
import TopicDetailsInformation from "../topicDetails/TopicDetailsInformation";
import TopicDetailsCard from "../detailsCard/TopicDetailsCard";
import SubTopicsComponent from "../subTopics/SubTopicsComponent";
import "./detailsContent.css";

const DetailsContentComponent = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    //fetch data
    fetchTopicsData().then((res) => {
      setTopics(res);
    });
  }, []);

  return (
    <main className="details-content">
      <div className="main-div">
        <div className="details">
          <TopicDetailsInformation />
          <TopicDetailsCard />
        </div>

        <div className="sub-topics-container">
          <SubTopicsComponent />
          <div className="relative-container empty-container"></div>
        </div>
      </div>
    </main>
  );
};

export default DetailsContentComponent;
