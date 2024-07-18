export const fetchTopicsData = () => {
  return fetch("./data/data.json").then((response) => response.json());
};
