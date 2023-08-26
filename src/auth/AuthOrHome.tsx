import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { StyledFirebaseAuth } from "react-firebaseui";
import { firebaseConfig } from "../utils/firebase/firebase";
import Home from "../pages/Home";
import "firebase/compat/auth";
import {
  Center,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";

export function AuthOrHome() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  firebase.initializeApp(firebaseConfig);
 

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <Center py={6}>
          <Box maxW={"500px"} w={"full"} rounded={"md"} overflow={"hidden"}>
            <Flex justify={"center"}>
              <Image w={"150px"} src={useColorModeValue("../src/assets/cah-black.png", "../src/assets/cah-white.png")} />
            </Flex>
            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} letterSpacing="">
                  Welcome to Cards Against Humanity!
                </Heading>
                <Text color={"gray.500"}>
                  Please Auth using your favorite method
                </Text>
              </Stack>
              <StyledFirebaseAuth
                      uiConfig={{
                        signInFlow: "redirect",
                        callbacks: {
                          signInSuccessWithAuthResult: () => false,
                        },
                        signInOptions: [
                          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                          firebase.auth.EmailAuthProvider.PROVIDER_ID,
                          firebase.auth.GithubAuthProvider.PROVIDER_ID,
                          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                        ],
                      }}
                      firebaseAuth={firebase.auth()}
                    />
            </Box>
          </Box>
        </Center>
      </div>
    );
  }
  return <Home />;
}
