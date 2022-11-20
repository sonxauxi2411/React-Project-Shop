import React, { useState, useEffect } from "react";
import Context from "./Context";

const Provider = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendRequest = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74`
      );
      const newRes = await res.json();
      setData(newRes);
      setLoading(false);
      setError(null);
    } catch (err) {
      setData(null);
      setError(err.message || "Something went wrong!");
      setLoading(false);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);
  if (loading) {
    return <h1>loading</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};

export default Provider;
