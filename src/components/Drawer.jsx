import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Button from "@material-ui/core/Button";

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
    width: 80,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
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
  fw700: {
    fontWeight: 700,
  },
  logoContainer: { padding: 0, paddingLeft: "6px", marginBottom: "35px" },
  logoIcon: { minWidth: "43px" },
  logoImg: { width: "32px" },
  navIcon: { fill: "#fff" },
  lgNavItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: ".225rem 0",
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const drawerRef = useRef();
  const [open, setOpen] = React.useState(false);
  const [customOpen, setCustomOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const customDrawerClose = () => {
    setCustomOpen(false);
  };

  const customDrawerOpen = (e) => {
    setCustomOpen((prevState) => {
      handleDrawerClose();
      if (prevState === true) {
        handleDrawerOpen();
      }
      return !prevState;
    });
  };

  useEffect(() => {
    if (customOpen) {
      document
        .querySelector(drawerRef.current.dataset.target)
        .classList.add("active");
    } else {
      document
        .querySelector(drawerRef.current.dataset.target)
        .classList.remove("active");
    }
  }, [customOpen]);

  return (
    <div className={classes.root}>
      <CssBaseline />
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
        <Divider />
        <List className={clsx(classes.pt, classes.leftList)}>
          <ListItem className={classes.logoContainer}>
            <ListItemIcon className={classes.logoIcon}>
              <img
                className={classes.logoImg}
                src="./assets/logoG.png"
                alt="logo"
              />
            </ListItemIcon>
            <ListItemText
              className={clsx(classes.listItemText, classes.fw700, "logo-text")}
              primary="UPSURANCE"
            />
          </ListItem>
          <ListItem
            button
            className="left-list-item"
            onClick={customDrawerClose}
          >
            <ListItemIcon className={classes.icon}>
              <InboxIcon className={classes.navIcon} />
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
            id="policy-btn"
          >
            <ListItemIcon classes={classes.icon}>
              <InboxIcon className={classes.navIcon} />
            </ListItemIcon>
            <ListItemText
              className={classes.listItemText}
              primary="Policy Management"
            />
          </ListItem>
          <ListItem className="last-list-item">
            <img src="./assets/bottom-btn.PNG" alt="btn" />
            <Button variant="contained">Request a quote</Button>
          </ListItem>
        </List>
      </Drawer>
      <div
        data-target="#policy-btn"
        className={clsx(classes.customDrawer, "my-custom-drawer", classes.pt, {
          [classes.customDrawerOpen]: customOpen,
        })}
        ref={drawerRef}
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
          ].map((el, idx) => {
            return (
              <ListItem
                key={"nav-item" + idx}
                button
                className={classes.lgNavItem}
              >
                <div className={classes.navLeft}>
                  <ListItemIcon className={classes.icon}>
                    <InboxIcon className={classes.navIcon} />
                  </ListItemIcon>
                  {el.text}
                </div>
                <div className="badge">{el.badgeText}</div>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}
