import { useEffect, useState } from "react";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import Section from "./Section";
import { collection, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";



const EmailList = () => {
  
  const [emails, setemails] = useState([])

  

  useEffect(() => {

    onSnapshot(collection(db, "mails"), (snapshot) => 
      setemails( snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
        time: serverTimestamp()
      }) ))
    )
 
  }, [])
  
  

  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>

          <IconButton>
            <Redo />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>

          <IconButton>
            <ChevronRight />
          </IconButton>

          <IconButton>
            <KeyboardHide />
          </IconButton>

          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList_sections">
        <h4></h4>
        <Section Icon={ Inbox } title="Primary" color="red" selected />
        <Section Icon={ People } title="Social" color="#1A73E8" />
        <Section Icon={ LocalOffer } title="Promotions" color="green" />
      </div>

      <div className="emailList_list"> {/* each one of the email components*/}

      {
        emails.map( email => (
          <EmailRow key={email.id}
           title={ email.data.to }
           subject={ email.data.subject }
           description={ email.data.message }
           time={ new Date( email.data.time?.seconds * 1000).toUTCString() } />
        ))
      }
        

      </div>

    </div>
  );
};

export default EmailList;
