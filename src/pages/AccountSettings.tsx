import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { _auth, firebaseConfig } from "../utils/firebase/firebase";
import {
  _logout,
  deleteAccount,
  getPropic,
  selectProfilePic,
} from "../utils/global";
import { AuthOrHome } from "../auth/AuthOrHome";
import { GetAvatarURL } from "../components/getThings";

export default function AccountSettings() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { isOpen, onOpen: openAvatarURL, onClose } = useDisclosure();
  const [avatarURL, setAvatarURL] = useState("");
  firebase.initializeApp(firebaseConfig);
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  if (!isSignedIn) {
    return <AuthOrHome />;
  } else {
    if (avatarURL === "") {
      getPropic(_auth.currentUser!.uid).then((res) => {
        setAvatarURL(res);
      });
    }

    return (
      <>
        <Box w={"100vw"} h={"100vh"} position={"fixed"}>
          <Center h={"100%"}>
            <VStack>
              <Button onClick={() => openAvatarURL()}>Change Avatar</Button>
              <Button onClick={() => _logout()}>Logout</Button>
              <Button onClick={() => deleteAccount(_auth.currentUser!.uid)}>
                Delete Account
              </Button>
            </VStack>
          </Center>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Ultimi passi</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <GetAvatarURL setAvatarURL={setAvatarURL} AvatarURL={avatarURL} />
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={async () => {
                  if (avatarURL.trim() !== "") {
                    await selectProfilePic(
                      String(_auth.currentUser?.uid),
                      avatarURL.trim()
                    ).then(() => {
                      onClose();
                    });
                  }
                }}
              >
                Invia
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}
