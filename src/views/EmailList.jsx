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
import { loremIpsum } from "lorem-ipsum";
import { Checkbox, IconButton } from "@mui/material";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import Section from "./Section";

const EmailList = () => {
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
        <EmailRow 
        title={"URGENT!!"} 
        subject={"Anything"} 
        description={"Please be here"} 
        time={`${Math.floor(Math.random() * 10) + 1} AM`} />

        <EmailRow 
        title={"Twich!!"} 
        subject={"Hey bro "} 
        description={loremIpsum()} 
        time={`${Math.floor(Math.random() * 10) + 1} PM`} />

      </div>

    </div>
  );
};

export default EmailList;
