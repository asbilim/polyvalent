"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillEye,
} from "react-icons/ai";
import { buttonVariants } from "@/components/ui/button";

export default function TrainWords({ words }) {
  const [currentWord, setCurrentWord] = useState({});
  const [wordGuess, setWordGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [wordsLeft, setWordsLeft] = useState([]);
  const [totalWords, setTotalWords] = useState(0);
  const [showCorrectWord, setShowCorrectWord] = useState(false);
  const [numWords, setNumWords] = useState(10);

  const success = "/sounds/success.wav";
  const error = "/sounds/error.wav";

  useEffect(() => {
    const selectedWords = words.slice(0, numWords);
    setWordsLeft([...selectedWords]);
    setTotalWords(selectedWords.length);
    getNextWord(selectedWords);
  }, [words, numWords]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      handleCheck();
    }
  }, [timer]);

  useEffect(() => {
    const handleEnterPress = (event) => {
      if (event.key === "Enter") {
        handleCheck();
      }
    };

    window.addEventListener("keydown", handleEnterPress);

    return () => {
      window.removeEventListener("keydown", handleEnterPress);
    };
  }, [wordGuess]);

  const getNextWord = (wordsArray = wordsLeft) => {
    if (wordsArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * wordsArray.length);
      setCurrentWord(wordsArray[randomIndex]);
      setFeedback("");
      setWordGuess("");
      setIsCorrect(null);
      setShowCorrectWord(false);
      setTimer(30);
    } else {
      setFeedback("No more words left!");
      setIsCorrect(null);
    }
  };

  const handleCheck = () => {
    if (
      currentWord.initial.word &&
      currentWord.initial.word.toLowerCase() === wordGuess.toLowerCase()
    ) {
      setIsCorrect(true);
      setFeedback("Correct! 🎉");
      playGoodSong();
      setScore(score + timer); // Score based on remaining time
      setWordsLeft(wordsLeft.filter((word) => word.id !== currentWord.id));
      getNextWord(wordsLeft.filter((word) => word.id !== currentWord.id));
    } else {
      setIsCorrect(false);
      setFeedback("Incorrect! Try again. 😞");
      playBadSong();
    }
  };

  const playGoodSong = () => {
    const audio = new Audio(success);
    audio.play();
  };

  const playBadSong = () => {
    const audio = new Audio(error);
    audio.play();
  };

  const handleShowCorrectWord = () => {
    setShowCorrectWord(true);
  };

  const handleNumWordsChange = (event) => {
    setNumWords(Number(event.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] p-6 w-full">
      <h1 className="text-4xl font-bold mb-8">Word Training</h1>
      <div className="flex flex-col items-center gap-4 w-full max-w-6xl">
        <Link
          href="/words/add"
          target="_blank"
          className={
            "text-xl px-6 py-3 mb-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 " +
            buttonVariants("")
          }>
          Add word
        </Link>
        <div className="flex flex-col w-full mb-4">
          <Label htmlFor="numWords" className="font-semibold text-xl">
            Number of Words to Work On:
          </Label>
          <Input
            type="number"
            id="numWords"
            value={numWords}
            onChange={handleNumWordsChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between mb-4">
            <div className="text-xl font-semibold">Score: {score}</div>
            <div className="text-xl font-semibold">Timer: {timer}s</div>
            <div className="text-xl font-semibold">
              Words Left: {wordsLeft.length}/{totalWords}
            </div>
          </div>
          {currentWord.translation && wordsLeft.length > 0 && (
            <>
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="meaning" className="font-semibold text-3xl">
                  Meaning: {currentWord.translation.word}
                </Label>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="wordGuess">Guess the Word</Label>
                <Input
                  id="wordGuess"
                  value={wordGuess}
                  onChange={(e) => setWordGuess(e.target.value)}
                  placeholder="Enter the word"
                  className="p-2 border border-gray-300 rounded"
                />
              </div>
              <Button
                onClick={handleCheck}
                className="text-xl px-6 py-3 mt-4 max-w-48 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                Check
              </Button>
              <Button
                onClick={handleShowCorrectWord}
                className="text-xl px-6 py-3 mt-4 max-w-48 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <AiFillEye className="inline-block mr-2" /> Show Correct Word
              </Button>
              {showCorrectWord && (
                <div className="text-xl text-blue-500 mt-4">
                  Correct Word: {currentWord.initial.word}
                </div>
              )}
            </>
          )}
          {feedback && (
            <div
              className={`flex items-center gap-2 mt-4 text-xl ${
                isCorrect ? "text-green-500" : "text-red-500"
              }`}>
              {isCorrect ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
              {feedback}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
