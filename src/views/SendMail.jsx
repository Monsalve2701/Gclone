import { Close } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const SendMail = () => {
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch()

  const MessageSubmit = async(data) => {
    
    await addDoc(collection(db, "mails"), {
      to: data.to,
      subject: data.subject,
      message: data.message,
      time: serverTimestamp()
    })

    dispatch( closeSendMessage() )

  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3> New Message </h3>

        <IconButton onClick={ () => dispatch( closeSendMessage() ) }> 
          <Close className="sendMail_close"/>
        </IconButton>
        
      </div>

      <form onSubmit={handleSubmit(MessageSubmit)}>
        {errors.to && <p className="sendMail_error">This field is required</p>}
        <input
          placeholder="To:"
          type={"email"}
          {...register("to", { required: true })}
        />

        {errors.subject && (
          <p className="sendMail_error">This field is required</p>
        )}
        <input
          placeholder="Subject"
          type={"text"}
          {...register("subject", { required: true })}
        />

        <input
          placeholder="Message.."
          type={"text"}
          className="message_body"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail_error">This field is required</p>
        )}

        <div className="sendMail_options">
          <Button className="senMail_send" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
