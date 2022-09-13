import {
  ArrowBack,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoveToInbox,
  Print,
  Subject,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMail } from "../features/mailSlice";
import "./Mail.css";

const Mail = ({ Subject , title, time, }) => {
  const navigate = useNavigate();
  const selectedMail = useSelector( (state) => state.mail.selectedMail )


  return (
    <div className="mail">

      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <MoveToInbox />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Delete />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater />
          </IconButton>
        </div>

        <div className="mail_toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>

          <IconButton>
            <Print />
          </IconButton>

          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      
      <div className="mail-body">
        <div className="mail_bodyHeader">
          <h2>{ selectedMail?.title }</h2>
          <LabelImportant sx={{ color: "#e8ab02"}} />
          <p>{ selectedMail.subject  }</p>

          <p className="mail_time">{ selectedMail?.time }</p>

        </div>

        <div className="mail_message">

          <p> { selectedMail.description } </p>

        </div>

      </div>

    </div>
  );
};

export default Mail;
