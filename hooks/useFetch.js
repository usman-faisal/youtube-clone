import { useEffect, useState } from "react";
import axios from "@/api/axios";

function useFetch(query) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const Controller = new AbortController();
    (async () => {
      try {
        await setLoading(false);
        await setError(false);
        const response = await axios.get(query);
        await setResponse(response.data);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
      return () => {
        Controller.abort("");
      };
    })();
  }, [query]);
  return { response, loading, error };
}
export default useFetch;
