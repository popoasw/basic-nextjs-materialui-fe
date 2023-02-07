import {
    Box,
} from "@mui/material";

import React,{ useState } from "react";

const RequestOrder = () => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const [ptcode, setPtcode] = useState("9"); //sementara gantikan PT, harusnya dapet dari profile.mem_company
  const [ptcodeGD, setPtcodeGD] = useState("9");
  const [compname, setCompanyname] = useState("");
  const [outcode, setOutcode] = useState("A63"); //sementara gantikan PT, harusnya dapet dari login profile.mem_outcode
  const [outname, setOutname] = useState("");
  const [userID, setUserID] = useState(profile.mem_nip);
  const [username, setUsername] = useState(profile.mem_username);

//=============================================================================  
//                                  code for return
//=============================================================================  
  return (
    <Box sx={{ width: "100%", p: 1 }}>

    </Box>
  );
};

export default RequestOrder;
