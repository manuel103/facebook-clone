import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SidebarRow />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow />
      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
      <SidebarRow />
    </div>
  );
}

export default Sidebar;
