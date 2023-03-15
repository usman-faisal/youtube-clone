import { useCallback, useEffect, useState } from "react";
import axios from "@/api/axios";

function useFetchVideoList(loaderRef) {
  const category = "mostPopular";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageTokens, setPageTokens] = useState({
    nextPageToken: "",
    currentPageToken: "",
  });
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPageTokens((state) => ({
          nextPageToken: state.nextPageToken,
          currentPageToken: state.nextPageToken,
        }));
      }
    },
    [pageTokens.nextPageToken]
  );
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "100px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loaderRef.current) observer.observe(loaderRef.current);
  }, [pageTokens.nextPageToken, handleObserver]);
  const sendQuery = useCallback(async () => {
    try {
      const response = await axios.get(
        `/videos?part=snippet&pageToken=${pageTokens.currentPageToken}&chart=${category}&maxResults=20&key=AIzaSyBl6XVFxHVUlmmojo_drPqC67XBc4NoRSI`
      );
      setData((prev) => [...prev, ...response.data.items]);
      setLoading(false);
      setPageTokens((state) => ({
        nextPageToken: response.data.nextPageToken,
        currentPageToken: state.currentPageToken,
      }));
    } catch (err) {
      console.log(err);
    }
  }, [pageTokens.currentPageToken]);
  useEffect(() => {
    sendQuery().then((res) => {});
  }, [pageTokens.currentPageToken, sendQuery]);
  return { data, loading };
}
export default useFetchVideoList;
