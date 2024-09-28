import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    id: "btnMyProfile",
    page: "Profile",
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    id: "btnEditProfile",
    page: "Profile",
  },
  {
    label: "Home",
    icon: InboxArrowDownIcon,
    id: "btnHome",
    page: "Home",
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    id: "btnHelp",
    page: "Help",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    id: "btnSignout",
    page: "",
  },
];

function MyNav() {
  const [colorBg, setColorBg] = useState("");
  const [colorFn, setColorFn] = useState("");
  const [emp, setEmp] = useState("");
  const [isLogedIn, setLogin] = useState(false);
  const isLogin = localStorage.getItem("isLogin");
  const retrievedObject = localStorage.getItem("EmpInfo");

  if (emp == "") {
    if (isLogin == "T") {
      setEmp(JSON.parse(retrievedObject));
      setLogin(true);
    }
  }
  if (colorBg == "" && colorFn == "") {
    setColorBg(generateRandomPastelColor());
    setColorFn(generateRandomDarkColor());
  }

  function generateRandomPastelColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    r = Math.floor((r + 255) / 2);
    g = Math.floor((g + 255) / 2);
    b = Math.floor((b + 255) / 2);

    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function generateRandomDarkColor() {
    var r = Math.floor(Math.random() * 150);
    var g = Math.floor(Math.random() * 150);
    var b = Math.floor(Math.random() * 150);

    return "rgb(" + r + "," + g + "," + b + ")";
  }

  const navigate = useNavigate();
  const goToPage = (pages) => {
    if (pages == "") {
      localStorage.setItem("isLogin", "F");
      localStorage.removeItem("EmpInfo");
      setLogin(false);
      setColorBg("");
      setColorFn("");
      setEmp("");
      navigate("/");
    } else {
      navigate("/" + pages);
    }
  };
  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = (page) => {
      setIsMenuOpen(false);
      goToPage(page);
    };

    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            {/* <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border  p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            /> */}
            <div
              className="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center text-center text-base font-mono w-9 h-9"
              style={{
                backgroundColor: `${colorBg}`,
              }}
            >
              <p className=" my-auto" style={{ color: `${colorFn}` }}>
                {emp.fname.charAt(0).toUpperCase()}
              </p>
            </div>

            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon, id, page }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={() => closeMenu(page)}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
                id={id}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                  //onclick={namefunc}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }
  const navListMenuItems = [
    {
      title: "@material-tailwind/html",
      description:
        "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
      title: "@material-tailwind/react",
      description:
        "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
      title: "Material Tailwind PRO",
      description:
        "A complete set of UI Elements for building faster websites in less time.",
    },
  ];
  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(({ title, description }) => (
      <a href="#" key={title}>
        <MenuItem>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            {title}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {description}
          </Typography>
        </MenuItem>
      </a>
    ));

    return (
      <React.Fragment>
        <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
          <MenuHandler>
            <Typography as="a" href="#" variant="small" className="font-normal">
              <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                Pages{" "}
                <ChevronDownIcon
                  strokeWidth={2}
                  className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </MenuItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
            <Card
              color="blue"
              shadow={false}
              variant="gradient"
              className="col-span-3 grid h-full w-full place-items-center rounded-md"
            >
              <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
            </Card>
            <ul className="col-span-4 flex w-full flex-col gap-1">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
          <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
          Pages{" "}
        </MenuItem>
        <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
          {renderItems}
        </ul>
      </React.Fragment>
    );
  }
  const navListItems = [
    {
      label: "Account",
      icon: UserCircleIcon,
    },
    {
      label: "Blocks",
      icon: CubeTransparentIcon,
    },
    {
      label: "Docs",
      icon: CodeBracketSquareIcon,
    },
  ];
  function NavList() {
    return (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <NavListMenu />
        {navListItems.map(({ label, icon }, key) => (
          <Typography
            key={label}
            as="a"
            href="#"
            variant="small"
            color="gray"
            className="font-medium text-blue-gray-500"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              <span className="text-gray-900"> {label}</span>
            </MenuItem>
          </Typography>
        ))}
      </ul>
    );
  }
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => {
    setIsNavOpen((cur) => !cur);
  };
  function SetCross() {
    if (isNavOpen) {
      return <XMarkIcon className="h-6 w-6" />;
    } else {
      return <Bars2Icon className="h-6 w-6" />;
    }
  }
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  if (isLogedIn) {
    return (
      <Navbar className=" rounded-none max-w-full p-2 lg:pl-6">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="button"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
            id="btnBrand"
          >
            Leave System
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            {/* <Bars2Icon className="h-6 w-6" /> */}
            <SetCross />
          </IconButton>
          <ProfileMenu />
        </div>
        <Collapse open={isNavOpen} className="overflow-scroll">
          <NavList />
        </Collapse>
      </Navbar>
    );
  } else {
    return "";
  }
}

export default MyNav;
