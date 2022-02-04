import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (id) => {
  const [result, setResult] = useState(null);
  const findDetail = async (id) => {
    try {
      const response = await yelp.get(`/businesses/${id}`);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findDetail(id);
  }, []);

  return [result];
};
