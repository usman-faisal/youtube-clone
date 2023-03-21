import React, { useCallback, useEffect, useRef, useState } from "react";
import HomeLayout from "@/components/HomeLayout";
import VideoList from "@/components/VideoList/VideoList";
import axios from "@/api/axios";
import useCategoryItem from "@/store/useCategoryItem";
import LoadingVideos from "@/components/LoadingVideos/LoadingVideos";
import Error from "@/components/Error/Error";

function HomePage() {
  const loaderRef = useRef(null);
  const { isActive } = useCategoryItem();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [pageTokens, setPageTokens] = useState({
    nextPageToken: "",
    currentPageToken: "",
  });
  const [loading, setLoading] = useState(true);
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
      await setError(false);
      const response = await axios.get(
        `/videos?part=snippet&pageToken=${pageTokens.currentPageToken}&${
          isActive && `videoCategoryId=${isActive}`
        }&chart=mostPopular&maxResults=25&key=${process.env.API_KEY}`
      );
      await setLoading(false);

      console.log(response.data);
      setData((prev) => [...prev, ...response.data.items]);
      setPageTokens((state) => ({
        nextPageToken: response.data.nextPageToken,
        currentPageToken: state.currentPageToken,
      }));
    } catch (err) {
      await setLoading(false);
      await setError(true);
      console.log(err);
    }
  }, [pageTokens.currentPageToken, isActive]);
  const clearPrevData = useCallback(() => {
    setPageTokens(() => ({ currentPageToken: "", nextPageToken: "" }));
    setLoading(true);
    setData([]);
  }, [isActive]);
  useEffect(() => clearPrevData(), [isActive]);
  useEffect(() => {
    sendQuery().then((res) => {});
  }, [pageTokens.currentPageToken, sendQuery, isActive]);
  console.log(data.length);
  return (
    <HomeLayout>
      {error && <Error />}
      {loading && <LoadingVideos />}
      {!loading && data.length !== 0 && <VideoList data={data} />}
      <div ref={loaderRef} />
    </HomeLayout>
  );
}

export default HomePage;
