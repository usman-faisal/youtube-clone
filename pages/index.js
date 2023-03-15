import React, { useRef } from "react";
import HomeLayout from "@/components/HomeLayout";
import VideoList from "@/components/VideoList/VideoList";
import useFetchVideoList from "@/hooks/useFetchVideoList";

function HomePage() {
  const loaderRef = useRef(null);
  const { loading, data } = useFetchVideoList(loaderRef);

  return (
    <HomeLayout>
      <VideoList data={data} />
      <div ref={loaderRef} />
    </HomeLayout>
  );
}

export default HomePage;
