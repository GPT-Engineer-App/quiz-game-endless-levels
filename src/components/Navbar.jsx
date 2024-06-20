import { Box, Flex, Button, useColorMode, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={onOpen}
        />
        <Box display={{ base: "none", md: "flex" }}>
          <Button as={Link} to="/" variant="ghost" color="white">
            Home
          </Button>
          <Button as={Link} to="/quiz" variant="ghost" color="white">
            Quiz
          </Button>
          <Button as={Link} to="/level-selection" variant="ghost" color="white">
            Levels
          </Button>
          <Button as={Link} to="/settings" variant="ghost" color="white">
            Settings
          </Button>
        </Box>
        <Button onClick={toggleColorMode} variant="ghost" color="white">
          {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <Button as={Link} to="/" variant="ghost" w="100%" onClick={onClose}>
              Home
            </Button>
            <Button as={Link} to="/quiz" variant="ghost" w="100%" onClick={onClose}>
              Quiz
            </Button>
            <Button as={Link} to="/level-selection" variant="ghost" w="100%" onClick={onClose}>
              Levels
            </Button>
            <Button as={Link} to="/settings" variant="ghost" w="100%" onClick={onClose}>
              Settings
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;