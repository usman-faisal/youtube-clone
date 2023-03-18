import React, { useCallback, useEffect, useRef, useState } from "react";
import HomeLayout from "@/components/HomeLayout";
import VideoList from "@/components/VideoList/VideoList";
import axios from "@/api/axios";
import useCategoryItem from "@/store/useCategoryItem";
import useFetch from "@/hooks/useFetch";

function HomePage() {
  const loaderRef = useRef(null);
  const { isActive } = useCategoryItem();
  const [data, setData] = useState([]);
  const [pageTokens, setPageTokens] = useState({
    nextPageToken: "",
    currentPageToken: "",
  });
  const [query, setQuery] = useState("");
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
        `/videos?part=snippet&pageToken=${pageTokens.currentPageToken}&${
          isActive && `videoCategoryId=${isActive}`
        }&chart=mostPopular&maxResults=25&key=${process.env.API_KEY}`
      );
      setData((prev) => [...prev, ...response.data.items]);
      setPageTokens((state) => ({
        nextPageToken: response.data.nextPageToken,
        currentPageToken: state.currentPageToken,
      }));
    } catch (err) {
      console.log(err);
    }
  }, [pageTokens.currentPageToken, isActive]);
  const clearPrevData = useCallback(() => {
    console.log(isActive);
    setData([]);
  }, [isActive]);
  useEffect(() => clearPrevData(), [isActive]);
  useEffect(() => {
    sendQuery().then((res) => {});
  }, [pageTokens.currentPageToken, sendQuery, isActive]);
  return (
    <HomeLayout>
      <VideoList data={data} />
      <div ref={loaderRef} />
    </HomeLayout>
  );
}

export default HomePage;
