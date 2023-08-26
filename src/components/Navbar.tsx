import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { _logout, getUserDocData } from "../utils/global";
import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { _auth, firebaseConfig } from "../utils/firebase/firebase";
import { getRedirectResult } from "firebase/auth";



export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [data, setData] = useState(null as any);
  firebase.initializeApp(firebaseConfig);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver();
  }, []);
  if (!isSignedIn) {
    return <></>;
  } else {
    getRedirectResult(_auth).then(async () => {
      setData(await getUserDocData(_auth.currentUser!.uid));
    });

    return (
      <>
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box onClick={() => (window.location.href = "/")}>
              <Image src={useColorModeValue("../src/assets/cah-black.png", "../src/assets/cah-white.png")} w={"100%"} h={"50px"} />
            </Box>

            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      id="avatar"
                      size={"sm"}
                      src={
                        data?.proPic
                          ? data?.proPic
                          : "https://avatars.dicebear.com/api/male/username.svg"
                      }
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          data?.proPic
                            ? data?.proPic
                            : "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>{data?.username ? data?.username : "UserName"}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem
                      onClick={() => (window.location.href = "/account")}
                    >
                      Account Settings
                    </MenuItem>
                    <MenuItem onClick={() => _logout()}> Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }
}
