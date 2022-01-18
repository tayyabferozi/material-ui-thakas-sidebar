import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import $ from "jquery";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    borderRight: "1px solid #676767",
    background:
      "transparent linear-gradient(180deg, #341978 0%, #311973 17%, #121136 100%) 0% 0% no-repeat padding-box",
  },
  drawerOpen: {
    width: drawerWidth,
    borderRight: "1px solid #434343",
    background:
      "transparent linear-gradient(180deg, #341978 0%, #311973 17%, #121136 100%) 0% 0% no-repeat padding-box",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    borderRight: "1px solid #434343",
    background:
      "transparent linear-gradient(180deg, #341978 0%, #311973 17%, #121136 100%) 0% 0% no-repeat padding-box",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    // width: theme.spacing(7) + 1,
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing(9) + 1,
    // },
    width: 80,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItemText: {
    color: "#fff",
  },
  customDrawer: {
    color: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    background:
      "transparent linear-gradient(180deg, #331976 0%, #331976 29%, #331976 100%) 0% 0% no-repeat padding-box;",
    height: "100%",
    width: 260,
    position: "fixed",
    left: -340,
  },
  customDrawerOpen: {
    left: 80,
  },
  pt: {
    paddingTop: 40,
  },
  icon: {
    minWidth: 52,
  },
  leftList: {
    position: "relative",
    height: "100%",
    overflow: "hidden",
    paddingLeft: 16,
    paddingRight: 16,
  },
  rightList: {
    paddingTop: 40,
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [customOpen, setCustomOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    $("#main").click();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    $("#main").click();
    console.log($("#main"));
  };

  const customDrawerOpen = () => {
    $("#main").click();
    setCustomOpen((prevState) => {
      // if (prevState === false) {
      handleDrawerClose();
      // }
      if (prevState === true) {
        handleDrawerOpen();
      }
      return !prevState;
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        onMouseDown={handleDrawerOpen}
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          "drawer-open": open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        {/* <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div> */}
        <Divider />
        <List className={clsx(classes.pt, classes.leftList)}>
          <ListItem button className="left-list-item">
            <ListItemIcon style={{ minWidth: "52px" }} classes={classes.icon}>
              <InboxIcon style={{ fill: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary="Dashboard"
            />
          </ListItem>
          <ListItem
            button
            className="left-list-item"
            onClick={customDrawerOpen}
          >
            <ListItemIcon style={{ minWidth: "52px" }} classes={classes.icon}>
              <InboxIcon style={{ fill: "#fff" }} />
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary="Policy Management"
            />
          </ListItem>
          <ListItem className="last-list-item">
            <img src="./assets/bottom-btn.PNG" alt="btn" />{" "}
            <Button variant="contained">Request a quote</Button>
          </ListItem>

          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        {/* <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <div
        className={clsx(classes.customDrawer, "my-custom-drawer", classes.pt, {
          [classes.customDrawerOpen]: customOpen,
        })}
      >
        <Typography variant="subtitle1" color="inherit">
          Policy Management
        </Typography>

        <List className={classes.rightList}>
          {[
            {
              text: "On cover",
              badgeText: "3",
            },
            {
              text: "Submitted",
              badgeText: "12",
            },
            {
              text: "Quoted",
              badgeText: "21",
            },
            {
              text: "Indicated",
              badgeText: "15",
            },
            {
              text: "Draft",
              badgeText: "8",
            },
          ].map((el) => {
            return (
              <ListItem
                button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: ".225rem 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItemIcon
                    style={{ minWidth: "52px" }}
                    classes={classes.icon}
                  >
                    <InboxIcon style={{ fill: "#fff" }} />
                  </ListItemIcon>
                  {el.text}
                </div>
                <div className="badge">{el.badgeText}</div>
              </ListItem>
            );
          })}
        </List>
      </div>
      <main
        id="main"
        // className={classes.content}
      >
        <div
        // className={classes.toolbar}
        />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </main>
    </div>
  );
}
