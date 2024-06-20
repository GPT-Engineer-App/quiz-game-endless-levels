import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Home</Text>
        <Button colorScheme="teal" onClick={() => navigate('/ranking')}>View Rankings</Button>
        <Button colorScheme="teal" onClick={() => navigate('/level-selection')}>Select Level</Button>
        <Button colorScheme="teal" onClick={() => navigate('/settings')}>Settings</Button>
      </VStack>
    </Container>
  );
};

export default Home;