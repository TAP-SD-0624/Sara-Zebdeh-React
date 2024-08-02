import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTopicData } from "../../api/topicsData";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./DetailsOfTopicCard.scss";

const DetailsOfTopicCard = () => {
  let { topicId } = useParams();

  const [image, setImage] = useState("");
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    fetchTopicData(topicId).then((data) => {
      setImage(data.image);
      setTopic(data.topic);
      setName(data.name);
      setRating(data.rating);

      // Check if the topic is already in the favourites list
      const storedFavourites = localStorage.getItem("favourites");
      const favourites = storedFavourites ? JSON.parse(storedFavourites) : [];
      setIsFavourite(favourites.some((fav) => fav.id === topicId));
    });
  }, [topicId]);

  const handleFavouriteClick = () => {
    const storedFavourites = localStorage.getItem("favourites");
    let favourites = storedFavourites ? JSON.parse(storedFavourites) : [];

    if (isFavourite) {
      // Remove from favourites
      favourites = favourites.filter((fav) => fav.id !== topicId);
    } else {
      // Add to favourites
      favourites.push({ id: topicId, image, topic, rating });
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
    setIsFavourite(!isFavourite);
  };

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
              <button
                className="gap btn"
                id="add-to-favourite-btn"
                onClick={handleFavouriteClick}
              >
                <span className="add-span">
                  {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
                </span>
                {isFavourite ? (
                  <AiFillHeart className="icon-btn" />
                ) : (
                  <AiOutlineHeart className="icon-btn" />
                )}
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
