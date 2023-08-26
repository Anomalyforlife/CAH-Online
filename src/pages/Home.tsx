import { useEffect, useState } from "react";
import { _auth } from "../utils/firebase/firebase";
import { createUserDocument, userHasInfos } from "../utils/global";
import { getRedirectResult } from "firebase/auth";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { LastSteps } from "../components/getThings";

export default function Home() {
  const [username, setName] = useState("".trim());

  const { isOpen, onOpen: openLastSteps, onClose } = useDisclosure();

  useEffect(() => {
    getRedirectResult(_auth).then(async () => {
      if (!(await userHasInfos(_auth.currentUser!.uid))) {
        openLastSteps();
      }
    });
  });

  return (
    <>
      <div>
        <h1>Home</h1>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ultimi passi</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LastSteps
              setUsername={setName}
              username={username}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={async () => {
                if (
                  username.trim() !== ""
                ) {
                  await createUserDocument({
                    username : username.trim(),
                    uid: _auth.currentUser!.uid,
                    accountCreationDate: new Date(),
                  }).then(() => {
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
