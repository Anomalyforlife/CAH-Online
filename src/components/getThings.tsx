import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

export const LastSteps: FC<{
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setUsername, username }) => {
  return (
    <Box>
      <FormControl id="username" isRequired>
        <Text p="5%" my="2%">
          We are almost there! Enter your username to complete the registration
          process.
        </Text>
        <HStack>
          <Box>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />
            </FormControl>
          </Box>
        </HStack>
      </FormControl>
    </Box>
  );
};

export const GetAvatarURL: FC<{
  AvatarURL: string;
  setAvatarURL: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setAvatarURL, AvatarURL }) => {
  return (
    <Box w="100%">
      <FormControl id="AvatarURL" isRequired>
        <Text>Enter your Avatar URL</Text>
        <Text color={"red.500"} fontWeight={"light"} mb={"20px"}>It must end with .png / .gif / .jpg</Text>
        <HStack>
          <Box w={"100%"}>
            <FormControl id="AvatarURL" isRequired >
              <FormLabel>AvatarURL</FormLabel>
              <Input
                value={AvatarURL}
                onChange={(e) => setAvatarURL(e.target.value)}
                type="text"
              />
            </FormControl>
          </Box>
        </HStack>
      </FormControl>
    </Box>
  );
};
