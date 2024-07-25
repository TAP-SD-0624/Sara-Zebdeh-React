import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { fetchTopicData } from "../../api/topicsData";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./subTopics.css";

const SubTopicItem = ({ subTopicsArray }) => {
  return (
    <>
      {subTopicsArray.map((subTopic, index) => (
        <div key={index} className="sub-topic">
          <button className="flex gap btn">
            <AiOutlineCheckCircle className="check-icon" />
            <span>{subTopic}</span>
          </button>
        </div>
      ))}
    </>
  );
};

SubTopicItem.propTypes = {
  subTopicsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const SubTopics = () => {
  let { topicId } = useParams();

  const [topic, setTopic] = useState("");
  const [subtopics, setSubtopics] = useState([]);

  useEffect(() => {
    fetchTopicData(topicId).then((data) => {
      setTopic(data.topic);
      setSubtopics(data.subtopics);
    });
  }, []);

  return (
    <div className="sub-topics-div">
      <div className="sub-topic">
        <h4 className="sub-topics-h4">{topic} Sub Topics</h4>
      </div>
      <SubTopicItem subTopicsArray={subtopics} />
    </div>
  );
};

export default SubTopics;
