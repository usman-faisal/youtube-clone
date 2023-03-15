import React, { useCallback, useEffect, useRef, useState } from "react";
import HomeLayout from "@/components/HomeLayout";
import VideoList from "@/components/VideoList/VideoList";
import axios from "@/api/axios";

function HomePage() {
  const loaderRef = useRef(null);
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
        `/videos?part=snippet&pageToken=${pageTokens.currentPageToken}&chart=mostPopular&maxResults=20&key=${process.env.API_KEY}`
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
  return (
    <HomeLayout>
      <VideoList data={data} />
      <div ref={loaderRef} />
    </HomeLayout>
  );
}

export default HomePage;
