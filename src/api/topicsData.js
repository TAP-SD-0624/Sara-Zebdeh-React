export const fetchTopicsData = () => {
  return fetch("/data/data.json").then((response) => response.json());
};

export const fetchTopicData = (topicId) => {
  return fetch("/data/data.json").then((response) => response.json())
    .then((data) => {
      console.log(topicId)
      console.log(data);
      const Details = data.find((topic) => topic.id == topicId);
      console.log(Details);

      if (!Details) {
        throw new Error("Topic not found");
      }
      return Details;
    });
};
