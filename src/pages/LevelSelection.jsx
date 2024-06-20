import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LevelSelection = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Select a Level</Text>
        <Button colorScheme="teal" onClick={() => navigate('/quiz')}>Level 1</Button>
        <Button colorScheme="teal" onClick={() => navigate('/quiz')}>Level 2</Button>
        <Button colorScheme="teal" onClick={() => navigate('/quiz')}>Level 3</Button>
      </VStack>
    </Container>
  );
};

export default LevelSelection;