import { Container, Text, VStack } from "@chakra-ui/react";

const Ranking = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Rankings</Text>
        <Text>Global Ranking: 1</Text>
        <Text>Your Ranking: 5</Text>
      </VStack>
    </Container>
  );
};

export default Ranking;