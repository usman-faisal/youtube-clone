import { useEffect, useState } from "react";
import axios from "@/api/axios";

function useFetch(query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const Controller = new AbortController();
    (async () => {
      try {
        await setLoading(false);
        await setError(false);
        const response = await axios.get(query);
        await setData(response.data);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
      return () => {
        Controller.abort("");
      };
    })();
  }, [query]);
  return { data, loading, error };
}
export default useFetch;
