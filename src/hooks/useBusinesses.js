import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async (term) => {
    try {
      const response = await yelp.get("/businesses/search", {
        params: {
          term: term,
          limit: 50,
          location: "new york",
        },
      });
      setResults(response.data.businesses);
      if (errorMessage) {
        setErrorMessage("");
      }
    } catch (err) {
      setErrorMessage(err.message || "something went wrong");
    }
  };

  useEffect(() => {
    // handle side effect based on state / render state
    searchAPI("pasta");
  }, []);

  return [searchAPI, results, errorMessage];
};
