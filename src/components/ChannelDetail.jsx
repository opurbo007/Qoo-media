import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
import { ChannelCard, Videos } from "./index";

const ChannelDetail = () => {
   const [channelDetail, setChannelDetail] = useState();
   const [video, setVideo] = useState(null);
   const { id } = useParams();

   useEffect(() => {
      const fetchResults = async () => {
         const data = await fetchAPI(`channels?part=snippet&id=${id}`);
         setChannelDetail(data?.items[0]);

         const videodata = await fetchAPI(
            `search?channelId=${id}&part=snippet&order=date`
         );
         setVideo(videodata?.items);
      };
      fetchResults();
   }, [id]);

   return (
      <Box minHeight="95vh">
         <Box>
            <div
               style={{
                  height: "300px",
                  background:
                     "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
                  zIndex: 10,
               }}
            />
            <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
         </Box>
         <Box p={2} display="flex">
            <Box sx={{ mr: { sm: "100px" } }} />
            <Videos videos={video} />
         </Box>
      </Box>
   );
};

export default ChannelDetail;
