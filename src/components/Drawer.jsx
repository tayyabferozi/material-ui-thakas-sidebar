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
    transition: "0.4s ease",
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
  logoContainer: { padding: 0, paddingLeft: "8px", marginBottom: "35px" },
  logoIcon: { minWidth: "43px" },
  logoImg: { width: "32px" },
  navIcon: { fill: "#fff" },
  lgNavItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navItem: {
    margin: ".225rem 0",
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.24)",
    },
    "&.active": {
      backgroundColor: "rgba(255, 255, 255, 0.24)",
    },
  },
  leftNavItem: {
    paddingLeft: "11px",
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
  },
  wrapOpen: {
    width: drawerWidth,
  },
  logoText: {
    opacity: 0,
    transition: ".25s ease",
  },
  showLogoText: {
    opacity: 1,
  },
  quoteBtnContainer: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "20px",
    display: "flex",
    justifyContent: "center",
  },
  quoteImg: {
    width: "28px",
  },
  hideQuoteImg: {
    opacity: 0,
  },
  quoteBtn: {
    display: "none",
    textTransform: "none",
    width: "100%",
    transition: ".25s ease",
    backgroundColor: "#21e3d2",
    "&:hover": {
      backgroundColor: "#21e3d2",
    },
  },
  showQuoteBtn: {
    display: "inline-flex",
  },
  badge: {
    width: "22px",
    height: "14px",
    backgroundColor: "#fff",
    color: "#331976",
    fontSize: "8px",
    textAlign: "center",
    borderRadius: "8px",
    fontWeight: "bold",
    lineHeight: "1.75",
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const drawerRef = useRef();
  const [open, setOpen] = React.useState(false);
  const [customOpen, setCustomOpen] = React.useState({
    state: false,
    target: "",
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const customDrawerOpen = (e, target) => {
    e.stopPropagation();

    setCustomOpen((prevState) => {
      let toSet = {};
      handleDrawerClose();

      if (!prevState.state) {
        toSet.state = true;
        handleDrawerClose();
      } else if (prevState.state && prevState.target === target) {
        toSet.state = false;
        handleDrawerOpen();
      } else if (prevState.state === true && prevState.target !== target) {
        toSet.state = true;
        handleDrawerClose();
      }

      toSet.target = target;
      return { ...prevState, ...toSet };
    });
  };

  useEffect(() => {
    const leftDrawerItems = document.querySelectorAll(".left-drawer-item");
    if (leftDrawerItems) {
      leftDrawerItems.forEach((el) => {
        el.classList.remove("active");
      });
    }
    const drawerTarget = customOpen.target;
    if (drawerTarget) {
      const drawerTarget = "#" + customOpen.target;
      if (customOpen.state) {
        document.querySelector(drawerTarget).classList.add("active");
      } else {
        document.querySelector(drawerTarget).classList.remove("active");
      }
    }
  }, [customOpen]);

  const menuData = [
    {
      text: "Dasboard",
      id: "dashboard-btn",
      subDrawerItems: [
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
      ],
    },
    {
      text: "Policy Management",
      id: "policy-btn",
      subDrawerItems: [
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
      ],
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={clsx({ [classes.wrapOpen]: customOpen.state })}>
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
                className={clsx(
                  classes.listItemText,
                  classes.fw700,
                  classes.logoText,
                  {
                    [classes.showLogoText]: open,
                  }
                )}
                primary="UPSURANCE"
              />
            </ListItem>
            {menuData.map((el) => {
              const { id, text } = el;

              return (
                <ListItem
                  id={id}
                  button
                  className={clsx(
                    "left-drawer-item",
                    classes.leftNavItem,
                    classes.navItem
                  )}
                  onClick={(e) => customDrawerOpen(e, id)}
                >
                  <ListItemIcon className={classes.icon}>
                    <InboxIcon className={classes.navIcon} />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItemText}
                    primary={text}
                  />
                </ListItem>
              );
            })}
            <ListItem className={classes.quoteBtnContainer}>
              <img
                className={clsx(
                  { [classes.hideQuoteImg]: open },
                  classes.quoteImg
                )}
                src="./assets/bottom-btn.PNG"
                alt="btn"
              />
              <Button
                className={clsx(
                  { [classes.showQuoteBtn]: open },
                  classes.quoteBtn
                )}
                variant="contained"
              >
                Request a quote
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </div>
      {menuData.map((el, idx) => {
        const { id, text, subDrawerItems } = el;

        return (
          <div
            data-target={"#" + id}
            className={clsx(classes.customDrawer, classes.pt, {
              [classes.customDrawerOpen]:
                customOpen.state && customOpen.target === id,
            })}
            ref={drawerRef}
          >
            <Typography variant="subtitle1" color="inherit">
              {text}
            </Typography>

            <List className={clsx(classes.rightList)}>
              {subDrawerItems &&
                subDrawerItems.map((el, idx) => {
                  return (
                    <ListItem
                      key={"nav-item" + idx}
                      button
                      className={clsx(classes.lgNavItem, classes.navItem)}
                    >
                      <div className={classes.navLeft}>
                        <ListItemIcon className={classes.icon}>
                          <InboxIcon className={classes.navIcon} />
                        </ListItemIcon>
                        {el.text}
                      </div>
                      <div className={classes.badge}>{el.badgeText}</div>
                    </ListItem>
                  );
                })}
            </List>
          </div>
        );
      })}
    </div>
  );
}
