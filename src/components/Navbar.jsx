import { Box, Flex, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
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
    </Box>
  );
};

export default Navbar;