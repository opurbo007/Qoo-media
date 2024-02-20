import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
import { Videos } from "./index";

const SearchFeed = () => {
   const [videos, setVideos] = useState([]);
   const { searchTerm } = useParams();

   useEffect(() => {
      fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
         setVideos(data.items)
      );
   }, [searchTerm]);

   return (
      <Box
         p={2}
         sx={{
            overflow: "auto",
            height: "90vh",
            flex: "2",
         }}
      >
         <Typography
            variant="h4"
            fontWeight={"bold"}
            mb={2}
            sx={{ color: "white" }}
         >
            Search Results For:
            <span style={{ color: "#F31503" }}> {searchTerm} </span>
         </Typography>
         <Videos videos={videos} />
      </Box>
   );
};

export default SearchFeed;
