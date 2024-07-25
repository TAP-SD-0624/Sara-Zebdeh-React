import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTopicData } from "../../api/topicsData";
import { AiOutlineHeart } from "react-icons/ai";
import "./DetailsOfTopicCard.css";

const DetailsOfTopicCard = () => {
  let { topicId } = useParams();

  const [image, setImage] = useState("");
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    fetchTopicData(topicId).then((data) => {
      setImage(data.image);
      setTopic(data.topic);
      setName(data.name);
    });
  }, []);

  return (
    <div className="relative-container">
      <div className="topic-of-card">
        <div className="topic-card-img">
          <img src={`/${image}`} alt={topic} />
        </div>
        <div className="favourite-information-div">
          <div className="p-h5-a-div gap">
            <h5>{topic}</h5>by <a href="#">{name}</a>
          </div>
          <div className="favourite-div">
            <p>Interested about this topic?</p>
            <div className="add-to-favourite-div">
              <button className="gap btn" id="add-to-favourite-btn">
                <span className="add-span">Add to Favourites</span>
                <AiOutlineHeart className="icon-btn" />
              </button>
            </div>
            <p className="add-to-favourite-bottom">Unlimited Credits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsOfTopicCard;
