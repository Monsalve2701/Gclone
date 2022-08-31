import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className="header">
        <div className="header_left">

            <IconButton >
                
                <MenuIcon sx={{ mt: 1 }}/>

            </IconButton>

            <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" alt="gmail logo"/>
            

        </div>

        <div className="header_middle">
            
            <SearchIcon className="searchIcon"/>
            <input placeholder="Search mail" type={"text"}/>
            <ArrowDropDownIcon className="header_inputCaret"/>

        </div>

        <div className="header_right">
            <IconButton>
                <AppsIcon />
            </IconButton>

            <IconButton>
                <NotificationsIcon />
            </IconButton>

            <IconButton>
                <Avatar />
            </IconButton>

        </div>

    </div>
  )
}

export default Header