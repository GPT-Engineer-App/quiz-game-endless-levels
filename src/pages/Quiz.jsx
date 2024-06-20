import { useState, useEffect } from "react";
import { Container, Text, VStack, Button, useToast } from "@chakra-ui/react";
import create from "zustand";
import QuizQuestion from "../components/QuizQuestion";
import { persist } from "zustand/middleware";
import { useNavigate } from "react-router-dom";
import localforage from "localforage";
import useSWR from "swr";
import { motion } from "framer-motion";

const useStore = create(
  persist(
    (set) => ({
      score: 0,
      incrementScore: () => set((state) => ({ score: state.score + 1 })),
      resetScore: () => set({ score: 0 }),
    }),
    {
      name: "quiz-score", // name of the item in storage
    }
  )
);

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const { score, incrementScore, resetScore } = useStore();
  const [questionIndex, setQuestionIndex] = useState(0);
  const toast = useToast();

  const { data, error } = useSWR("https://opentdb.com/api.php?amount=10", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = await localforage.getItem("quizData");
      if (cachedData) {
        setCurrentQuestion(cachedData.results[questionIndex]);
      } else {
        if (data && data.results) {
          setCurrentQuestion(data.results[questionIndex]);
          await localforage.setItem("quizData", data);
        }
      }
    };

    fetchData();
  }, [data, questionIndex]);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correct_answer) {
      incrementScore();
      toast({
        title: "Correct!",
        description: "You have selected the right answer.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      // Add animation for correct answer
      const correctAnswerElement = document.getElementById("correct-answer");
      if (correctAnswerElement) {
        correctAnswerElement.classList.add("animate__animated", "animate__bounce");
      }
    } else {
      toast({
        title: "Wrong!",
        description: "You have selected the wrong answer.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    setQuestionIndex(questionIndex + 1);
    
  };

  if (error) return <div>Failed to load questions</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize="2xl">Score: {score}</Text>
      {currentQuestion && (
        <VStack spacing={4}>
          <QuizQuestion question={currentQuestion} onAnswer={handleAnswer} />
        </VStack>
      )}
    </Container>
  );
};

export default Quiz;