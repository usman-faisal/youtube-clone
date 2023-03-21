import { useEffect, useState } from "react";
import axios from "@/api/axios";

function useFetch(query) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(query)
      .then((res) => {
        setLoading(false);
        setError(false);
        setResponse(res.data);
      })
      .catch((err) => {
        setError(true);
      });
    return () => {
      controller.abort();
    };
  }, [query]);
  return { response, error, loading, setLoading };
}
export default useFetch;
