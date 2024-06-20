import { Container, Text, VStack, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Login</Text>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="teal" onClick={() => navigate('/home')}>Login</Button>
        <Button colorScheme="teal" variant="link" onClick={() => navigate('/register')}>Register</Button>
        <Button colorScheme="teal" variant="link" onClick={() => navigate('/forgot-password')}>Forgot Password</Button>
      </VStack>
    </Container>
  );
};

export default Login;