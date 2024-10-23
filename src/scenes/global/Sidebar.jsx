import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import AnnouncementIcon from '@mui/icons-material/Announcement'; // New icon for Manage Announcement

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Icon for Add Announcement

import { Link } from "react-router-dom";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

import BookIcon from '@mui/icons-material/Book'; // Icon for Manage Books
import AddBoxIcon from '@mui/icons-material/AddBox'; // Icon for Add Book


import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import "react-pro-sidebar/dist/css/styles.css";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'; // Import the money icon

import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1"; // For 'Add User'
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"; // For 'Manage Users'
import MessageIcon from "@mui/icons-material/Message"; // For 'View Message'
import AddCommentIcon from "@mui/icons-material/AddComment"; // For 'Add Message'




const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`data:image/jpeg;base64,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`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  ET Book
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Dr Monor
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />


            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <SubMenu title="User Management" icon={<PeopleOutlinedIcon />}>
              <MenuItem icon={<ManageAccountsIcon />}>
                Manage Users
                <Link to="/users" />
              </MenuItem>
              <MenuItem icon={<PersonAddAlt1Icon />}>
                Add User
                <Link to="/add-user" />
              </MenuItem>
            </SubMenu>

            {/* messege section  */}
            <SubMenu title="Message Management" icon={<PeopleOutlinedIcon />}>
              <MenuItem icon={<MessageIcon />}>

                Manage messages
                <Link to="/message" />
              </MenuItem>
              <MenuItem icon={<AddCommentIcon />}>
                Send Messages
                <Link to="/author-to-admin-message" />
              </MenuItem>
              <MenuItem icon={<PersonAddAlt1Icon />}>
                feedback
                <Link to="/feedback" />
              </MenuItem>
            </SubMenu>

            {/*  */}


            <Item
              title="PaymentDetails"
              to="/payment-detail"
              icon={<AttachMoneyOutlinedIcon />} // Updated icon
              selected={selected}
              setSelected={setSelected}
            />
            {/* manage books */}
            <SubMenu title="Book Management" icon={<ContactsOutlinedIcon />}>
              <MenuItem icon={<BookIcon />}>
                Manage Books
                <Link to="/contacts" />
              </MenuItem>
              <MenuItem icon={<AddBoxIcon />}>
                Add Book
                <Link to="/add-book-form" />
              </MenuItem>
            </SubMenu>
            {/* Management Announce */}

            <SubMenu title="Manage Announcement" icon={<AnnouncementOutlinedIcon />}>
              <MenuItem icon={<AnnouncementIcon/>}>
                <Link to="/manage-announcement">Manage Announcement</Link>
              </MenuItem>
              <MenuItem icon={<AddCircleOutlineIcon />}>
                <Link to="/announcement-form">Add Announcement</Link>
              </MenuItem>
            </SubMenu>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Add User "
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                 <Item
              title="Add Sale"
              to="/sale"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
         />
              <Item
              title="Add Author"
              to="/author"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
         />
              <Item
              title="Add Book"
              to="/book"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
         />
              <Item
              title="Add Audio"
              to="/audio"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
         />

            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />


          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
