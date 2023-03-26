import React, { useCallback, useEffect, useRef, useState } from "react";
import HomeLayout from "@/components/HomeLayout";
import VideoList from "@/components/VideoList/VideoList";
import axios from "@/api/axios";
import useCategoryItem from "@/store/useCategoryItem";
import LoadingVideos from "@/components/LoadingVideos/LoadingVideos";
import Error from "@/components/Error/Error";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

function HomePage() {
  const loaderRef = useRef(null);
  const { isActive } = useCategoryItem();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  let pageToken = "";
  const isIntersecting = useIntersectionObserver(loaderRef);
  const sendQuery = useCallback(() => {
    axios
      .get(
        `/videos?part=snippet&pageToken=${pageToken}&${
          isActive && `videoCategoryId=${isActive}`
        }&chart=mostPopular&maxResults=25&key=${process.env.API_KEY}`
      )
      .then((response) => {
        setError(false);
        setLoading(false);
        pageToken = response.data.nextPageToken;
        console.log(response.data);
        setData((prev) => [...prev, ...response.data.items]);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, [isActive]);
  const clearPrevData = useCallback(() => {
    pageToken = "";
    setData([]);
    sendQuery();
  }, [isActive]);
  useEffect(() => {
    if (isIntersecting) {
      sendQuery();
    }
  }, [sendQuery, isIntersecting]);
  useEffect(() => {
    setLoading(true);
    setError(false);
    clearPrevData();
  }, [clearPrevData, sendQuery, isActive]);
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
