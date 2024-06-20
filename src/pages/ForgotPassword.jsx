import { Container, Text, VStack, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Forgot Password</Text>
        <Input placeholder="Email" type="email" />
        <Button colorScheme="teal" onClick={() => navigate('/login')}>Reset Password</Button>
      </VStack>
    </Container>
  );
};

export default ForgotPassword;