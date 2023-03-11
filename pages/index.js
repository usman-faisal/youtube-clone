import Nav from "@/components/Nav/Nav";
import React, {useEffect} from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import HomeLayout from "@/components/HomeLayout";
import VideoList from "@/components/VideoList/VideoList";
import axios from "@/api/axios";
import {useState} from "react";
import dynamic from "next/dynamic";

function HomePage() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        (async () => {
           const response = await axios.get(`/videos?part=snippet&pageToken=CBkQAQ&chart=mostPopular&maxResults=20&key=AIzaSyBl6XVFxHVUlmmojo_drPqC67XBc4NoRSI`)
           console.log(response.data,'data')
           setData(response.data.items)
        })()
    },[])
  return (
    <HomeLayout>
        <VideoList data = {data}/>
    </HomeLayout>
  )
}

export default HomePage;
