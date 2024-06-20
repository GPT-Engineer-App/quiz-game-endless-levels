import { Container, Text, VStack, Switch, FormControl, FormLabel } from "@chakra-ui/react";

const Settings = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Settings</Text>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="sound" mb="0">
            Sound
          </FormLabel>
          <Switch id="sound" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="music" mb="0">
            Background Music
          </FormLabel>
          <Switch id="music" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="theme" mb="0">
            Dark Theme
          </FormLabel>
          <Switch id="theme" />
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Settings;