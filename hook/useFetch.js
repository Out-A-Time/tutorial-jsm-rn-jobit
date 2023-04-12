import { useState, useEffect } from "react";
import axios from "axios";

// import { REACT_APP_ACCESS_KEY } from "@env";
// import { REACT_APP_ACCESS_KEY } from "react-native-dotenv";

// const rapidApiKey = process.env.REACT_APP_ACCESS_KEY;
// console.log("API key", rapidApiKey);

// const rapidApiKey = REACT_APP_ACCESS_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      //   "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      console.log(response);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      alert("There is an error with the request. Error: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetchData = () => {
    setIsLoading(true);
    fetchData();
  };

  //   return { data, isLoading, error, reFetchData };
  return { data, isLoading, error };
};

export default useFetch;
