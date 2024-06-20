import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import localforage from "localforage";

import { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = await localforage.getItem("homepageData");
      if (cachedData) {
        setData(cachedData);
      } else {
        const response = await fetch("https://api.example.com/homepage");
        const result = await response.json();
        setData(result);
        await localforage.setItem("homepageData", result);
      }
    };

    fetchData();
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Quiz Game</Text>
        <Button colorScheme="teal" onClick={() => navigate('/quiz')}>Start Quiz</Button>
      </VStack>
    </Container>
  );
};

export default Index;