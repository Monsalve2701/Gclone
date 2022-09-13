
import { Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone } from "@mui/icons-material"
import AddIcon from '@mui/icons-material/Add'
import StarIcon from '@mui/icons-material/Star'
import { Button, IconButton } from "@mui/material"
import { useDispatch } from "react-redux"
import { openSendMessage } from "../features/mailSlice"
import "./Sidebar.css"
import SidebarOptions from "./SidebarOptions"

const Sidebar = () => {

  const dispatch = useDispatch()


  return (
    <div className="sidebar">

        <Button startIcon={<AddIcon fontSize="large"/>}
        className="sidebar_compose" onClick={ () => dispatch( openSendMessage() ) }> Compose </Button>
        
        
        { /* Side Bar Option Section */}
        <SidebarOptions Icon={Inbox } title="Inbox" number={ 64 } selected={ true }/>
        <SidebarOptions Icon={StarIcon } title="Starred" number={ 15 }/>
        <SidebarOptions Icon={LabelImportant } title="Important" number={ 15 }/>

        <SidebarOptions Icon={NearMe } title="Sent" number={ 15 }/>
        <SidebarOptions Icon={Note } title="Drafts" number={ 15 }/>
        <SidebarOptions Icon={ExpandMore } title="More" number={ 15 }/>


        <div className="sidebar_foter">
          <div className="sidebar_footerIcons">
            <IconButton>
              <Person />
            </IconButton>

            <IconButton>
              <Duo />
            </IconButton>

            <IconButton>
              <Phone />
            </IconButton>
          </div>
        </div>



    </div>
  )
}

export default Sidebar