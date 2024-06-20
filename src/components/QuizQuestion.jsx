import { useState } from "react";
import { VStack, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

const QuizQuestion = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSubmit = () => {
    onAnswer(selectedAnswer);
    setSelectedAnswer("");
  };

  return (
    <VStack spacing={4}>
      <ReactMarkdown>{question.question}</ReactMarkdown>
      <RadioGroup onChange={setSelectedAnswer} value={selectedAnswer}>
        <Stack direction="column">
          {question.incorrect_answers.concat(question.correct_answer).map((answer, index) => (
            <Radio key={index} value={answer}>
              <ReactMarkdown>{answer}</ReactMarkdown>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button colorScheme="teal" onClick={handleSubmit}>Submit Answer</Button>
    </VStack>
  );
};

export default QuizQuestion;