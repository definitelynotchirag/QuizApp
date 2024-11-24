import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion'; // Using framer-motion for animations

const QuizInterface = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(220);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const quizData = {
    questions: [
      {
        question: "Considering the described React app structure and the explanation of package.json and package-lock.json, which statement BEST reflects the crucial difference in their functionality regarding dependency management in a collaborative development environment?",
        options: {
          a: "package.json dictates the versions of dependencies, while package-lock.json is only used for local development and ignored in version control.",
          b: "package-lock.json defines the project's dependencies, while package.json is a redundant file solely for organizational purposes.",
          c: "package.json specifies the desired dependencies and their semantic version ranges, whereas package-lock.json pins down the exact versions used, ensuring consistent builds across different environments and developers.",
          d: "Both files serve identical purposes, with package-lock.json acting as a backup for package.json in case of corruption."
        },
        correct_answer: "c",
        estimated_time: 60
      },
      {
        question: "Considering the described React app structure and development process from the perspective of a Facebook engineer in 2013,  what is the most significant advantage React offers in addressing the challenges of creating a fast and interactive newsfeed, beyond simply component reusability?",
        options: {
          a: "The use of JSX, enabling a seamless blend of JavaScript and HTML, which streamlines development.",
          b: "The inclusion of a `robots.txt` file, optimizing search engine crawlers and improving SEO, thus indirectly boosting user engagement.",
          c: "The virtual DOM, which minimizes full page reloads and results in dramatically faster updates for a better user experience.",
          d: "The well-organized directory structure, making it easier for multiple engineers to collaborate on the project."
        },
        correct_answer: "c",
        estimated_time: 25
      }
    ],
    time_limit: 220
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsQuizComplete(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (questionIndex, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
    // Move to the next question after answering
    if (questionIndex < quizData.questions.length - 1) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setIsQuizComplete(true); // Complete the quiz if it's the last question
      setTimeLeft(0); // Reset the timer to 0 when the quiz is complete
    }
  };

  const submitQuiz = () => {
    setIsQuizComplete(true);
    setTimeLeft(0); // Reset the timer to 0 when the quiz is manually submitted
  };

  const reattemptQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setIsQuizComplete(false);
    setTimeLeft(220); // Reset the timer
  };

  const goHome = () => {
    window.location.href = '/'; // Adjust for your home page route
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const renderQuestion = (question, index) => {
    const isAnswered = answers[index] !== undefined;
    const styles = [
      "p-6 mb-6",
      "p-6 mb-6 bg-opacity-50",
      "p-6 mb-6 border-2 border-primary",
      "p-6 mb-6 bg-gradient-to-r from-primary/20 to-accent/20",
      "p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow"
    ];

    return (
      <motion.div 
        key={index} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card 
          className={`${styles[index % styles.length]} transition-all duration-300 max-w-full`}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground">
              {index + 1}
            </div>
            <p className="text-lg">{question.question}</p>
          </div>

          <div className="grid gap-3 mt-4">
            {Object.entries(question.options).map(([key, value]) => (
              <Button
                key={key}
                variant={answers[index] === key ? "default" : "outline"}
                className={`justify-start text-left h-auto py-3 px-4 break-words whitespace-normal ${
                  isQuizComplete && key === question.correct_answer
                    ? "bg-green-500/20 hover:bg-green-500/30"
                    : isQuizComplete && answers[index] === key && key !== question.correct_answer
                    ? "bg-red-500/20 hover:bg-red-500/30"
                    : ""
                }`}
                onClick={() => !isQuizComplete && handleAnswer(index, key)}
              >
                <div className="flex w-full">
                  <span className="flex-shrink-0 mr-3 font-semibold">{key.toUpperCase()}.</span>
                  <span className="flex-grow">{value}</span>
                  {isQuizComplete && key === question.correct_answer && (
                    <CheckCircle2 className="flex-shrink-0 ml-2 h-4 w-4 text-green-500" />
                  )}
                  {isQuizComplete && answers[index] === key && key !== question.correct_answer && (
                    <XCircle className="flex-shrink-0 ml-2 h-4 w-4 text-red-500" />
                  )}
                </div>
              </Button>
            ))}
          </div>

          <div className="mt-4 flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            Estimated time: {question.estimated_time} seconds
          </div>
        </Card>
      </motion.div>
    );
  };

  const calculateScore = () => {
    let correct = 0;
    quizData.questions.forEach((question, index) => {
      if (answers[index] === question.correct_answer) {
        correct++;
      }
    });
    return (correct / quizData.questions.length) * 100;
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 mb-6 rounded-lg shadow-lg"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">React Knowledge Quiz</h1>
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center text-primary">
              <Clock className="mr-2 h-5 w-5" />
              <span className="font-mono text-lg">
                {formatTime(timeLeft)}
              </span>
            </div>
            {!isQuizComplete && (
              <Button onClick={submitQuiz} variant="default">
                Submit Quiz
              </Button>
            )}
          </div>
        </div>
        {isQuizComplete && (
          <motion.div 
            className="mt-4 p-4 bg-primary/20 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2">
              Quiz Complete! Your Score: {calculateScore().toFixed(1)}%
            </h2>
            <p className="text-muted-foreground">
              Correct Answers: {Object.entries(answers).filter(([index, answer]) => 
                answer === quizData.questions[index].correct_answer
              ).length} / {quizData.questions.length}
            </p>
            <div className="flex gap-4 mt-4">
              <Button onClick={reattemptQuiz} variant="outline">
                Reattempt
              </Button>
              <Button onClick={goHome} variant="outline">
                Home
              </Button>
            </div>
          </motion.div>
        )}
      </motion.div>

      <div className="space-y-6">
        {isQuizComplete
          ? quizData.questions.map((question, index) => renderQuestion(question, index))
          : renderQuestion(quizData.questions[currentQuestion], currentQuestion)}
      </div>
    </div>
  );
};

export default QuizInterface;
