import {
  Avatar,
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
}> = ({ setAvatarURL, AvatarURL }) => {1
  return (
    <Box w="100%">
      <FormControl id="AvatarURL" isRequired>
        <HStack>
        <Box mr={"15px"}>
        <Text mb={"20px"} fontWeight={"bold"}>Enter your Avatar URL</Text>
        <Text color={"red.500"} fontWeight={"semibold"}>It must end with .png / .gif / .jpg</Text>
        </Box>
        <Box>
          <Avatar size={"xl"} src={{AvatarURL}.AvatarURL} w={"100%"} left={"40%"}/>
        </Box>
        </HStack>
        <HStack>
          <Box w={"100%"}>
            <FormControl id="AvatarURL" isRequired >
              <FormLabel fontSize={"larger"}>AvatarURL</FormLabel>
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
