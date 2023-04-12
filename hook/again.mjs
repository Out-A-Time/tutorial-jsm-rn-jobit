import axios from "axios";
const options = {
  method: "GET",
  url: "https://jsearch.p.rapidapi.com/search",
  params: { query: "react developer uk", page: "1", num_pages: "1" },
  headers: {
    "X-RapidAPI-Key": "13a9e1e72dmsh7c766f83d34f869p1ba781jsne083bf222460",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
