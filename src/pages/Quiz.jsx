import { useState, useEffect } from "react";
import { Container, Text, VStack, Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import localforage from "localforage";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);

  const { data, error } = useSWR("https://opentdb.com/api.php?amount=10", fetcher);

  useEffect(() => {
    if (data && data.results) {
      setCurrentQuestion(data.results[questionIndex]);
    }
  }, [data, questionIndex]);

  const handleAnswer = () => {
    if (selectedAnswer === currentQuestion.correct_answer) {
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswer("");
  };

  if (error) return <div>Failed to load questions</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {currentQuestion && (
        <VStack spacing={4}>
          <Text fontSize="2xl">{currentQuestion.question}</Text>
          <RadioGroup onChange={setSelectedAnswer} value={selectedAnswer}>
            <Stack direction="column">
              {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).map((answer, index) => (
                <Radio key={index} value={answer}>
                  {answer}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
          <Button colorScheme="teal" onClick={handleAnswer}>Submit Answer</Button>
        </VStack>
      )}
    </Container>
  );
};

export default Quiz;