import React from "react";
import DetailsOfTopic from "../DetailsOfTopic/DetailsOfTopic";
import DetailsOfTopicCard from "../DetailsOfTopicCard/DetailsOfTopicCard";
import SubTopics from "../SubTopics/SubTopics";
import "./detailsContent.css";

const DetailsContent = () => {
  return (
    <main className="details-content">
      <div className="main-div">
        <div className="details">
          <DetailsOfTopic />
          <DetailsOfTopicCard />
        </div>

        <div className="sub-topics-container">
          <SubTopics />
          <div className="relative-container empty-container"></div>
        </div>
      </div>
    </main>
  );
};

export default DetailsContent;
