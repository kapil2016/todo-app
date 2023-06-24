import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.data);
      return data.data;
    }
    fetchData().then((data) => { setState((pre => [...pre, ...data])) }).catch((err) => console.log(err))
  }, [url])

  function fetchNextPage(url) {
    console.log(url);
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data.data;
    }
    fetchData(url).then((data) => { setState(pre => [...data]) }).catch((err) => console.log(err))
  }

  return [state, fetchNextPage]
}

export default useFetch;