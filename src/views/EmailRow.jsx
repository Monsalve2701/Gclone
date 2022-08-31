import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./EmailRow.css";

const EmailRow = ({ title, subject, description, id, time }) => {

  const navigate = useNavigate()

  return (
    <div className="emailRow" onClick={ () => navigate("/mail") }>
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>

        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className="emailRow_title">{ title }</h3>

      <div className="emailRow_message">
        <h4>
          {subject} {"-"}
          <span className="emailRow_description">{ description }</span>
        </h4>
      </div>

      <div className="emailRow_time">{ time } </div>

    </div>
  );
};

export default EmailRow;
