import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTopicData } from "../../api/topicsData";
import Stars from "../Stars/Stars";
import "./DetailsOfTopic.css";

const DetailsOfTopic = () => {
  let { topicId } = useParams();

  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetchTopicData(topicId).then((data) => {
      setCategory(data.category);
      setTopic(data.topic);
      setDescription(data.description);
      setRating(data.rating);
    });
  }, []);

  return (
    <div className="details-div">
      <div>
        <h4>{category}</h4>
        <h3 className="details-h3">{topic}</h3>
        <div className="detailsUl">
          <Stars rating={rating} isForDetails={true} />
        </div>
      </div>
      <p className="details-p">{description}</p>
    </div>
  );
};

export default DetailsOfTopic;
