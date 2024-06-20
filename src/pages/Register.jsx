import { Container, Text, VStack, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Register</Text>
        <Input placeholder="Username" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="teal" onClick={() => navigate('/home')}>Register</Button>
      </VStack>
    </Container>
  );
};

export default Register;