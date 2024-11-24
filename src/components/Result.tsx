import React, { useState } from "react";
import { CheckCircle, AlertCircle, RefreshCcw, Save, XCircle, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Result = ({ quizData, userAnswers, retryQuiz }) => {
  const [showReview, setShowReview] = useState(false);
  const [loading, setLoading] = useState(false);
  const currentQuestion = null;

//   const { toast } = useToast();
  const questions = quizData.questions;
  let score = 0;

  // Calculate score
  questions.forEach((q, index) => {
    if (userAnswers[index] === q.correct_answer) {
      score++;
    }
  });

  const saveScore = () => {
    setLoading(true);
    const savedScores = JSON.parse(localStorage.getItem("quizScores")) || [];
    savedScores.push({
      quizId: quizData.transcript,
      score,
      total: questions.length,
      date: new Date().toISOString(),
    });
    localStorage.setItem("quizScores", JSON.stringify(savedScores));
    setLoading(false);
    toast({
      title: "Success",
      description: "Score saved successfully!",
    });
  };

  const renderQuestion = (question:any, index:any) => {
    const isAnswered = userAnswers[index] !== undefined;
    const styles = [
      // "p-6 mb-6",
      // "p-6 mb-6 bg-opacity-50",
      "p-6 mb-6 bg-opacity-50",
      // "p-6 mb-6 bg-gradient-to-r from-primary/20 to-accent/20",
      // "p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow"
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
                variant={userAnswers[index] === key ? "default" : "outline"}
                className={`justify-start text-left h-auto hover:bg-inherit py-3 px-4 break-words whitespace-normal ${
                  showReview && key === question.correct_answer
                    ? "bg-green-500/20 hover:bg-green-500/30"
                    : showReview && userAnswers[index] === key && key !== question.correct_answer
                    ? "bg-red-500/20 hover:bg-red-500/30"
                    : ""
                }`}
                // onClick={() => !showReview && handleAnswer(index, key)}
              >
                <div className="flex w-full">
                  <span className="flex-shrink-0 mr-3 font-semibold">{key.toUpperCase()}.</span>
                  <span className="flex-grow">{value}</span>
                  {showReview && key === question.correct_answer && (
                    <CheckCircle2 className="flex-shrink-0 ml-2 h-4 w-4 text-green-500" />
                  )}
                  {showReview && userAnswers[index] === key && key !== question.correct_answer && (
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
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 animated-background">
      <h1 className="text-3xl font-semibold text-primary mb-4">
        Quiz Complete!
      </h1>

      {/* Score Section */}
      <Card className="p-6 mb-8 text-center w-full max-w-lg">
        <CardContent className="p-0">
          <h2 className="text-2xl font-bold text-green-500 mb-2">
            Your Score: {score} / {questions.length}
          </h2>
          <p className="text-muted-foreground">
            {score === questions.length
              ? "Outstanding! You nailed it."
              : score >= questions.length / 2
              ? "Well done! You passed the quiz."
              : "Keep practicing! You can do better."}
          </p>
        </CardContent>
      </Card>

      {/* Show review toggle */}
      <Button
        variant="outline"
        onClick={() => setShowReview(!showReview)}
        className="mb-6 w-48"
      >
        {showReview ? "Hide Review" : "Review Answers"}
      </Button>

      {/* Show review if toggled */}
{/*       
      {showReview && (
        <Card className="w-full max-w-3xl p-6 mb-6 bg-background/95">
          <h3 className="text-xl font-semibold mb-4">Review Answers</h3>
          <div className="space-y-4">
            {questions.map((q, index) => (
              <React.Fragment key={index}>
                <Card
                  className={`p-4 ${
                    userAnswers[index] === q.correct_answer
                      ? "bg-green-900"
                      : "bg-destructive/10"
                  }`}
                >
                  <CardContent className="p-0">
                    <p className="font-medium mb-2">
                      {index + 1}. {q.question}
                    </p>
                    {userAnswers[index] === q.correct_answer ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        <span>Correct Answer: {q.options[q.correct_answer]}</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center text-destructive mb-1">
                          <AlertCircle className="h-4 w-4 mr-2" />
                          <span>
                            Your Answer:{" "}
                            {userAnswers[index]
                              ? q.options[userAnswers[index]]
                              : "Not Answered"}
                          </span>
                        </div>
                        <p>
                          Correct Answer: {q.options[q.correct_answer]}
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>
                {index < questions.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </Card>
      )} */}
        {/* {showReview && (
          <motion.div 
            className="mt-4 p-4 bg-primary/20 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2">
              Quiz Complete! Your Score: {score} / {questions.length}
            </h2>
            <p className="text-muted-foreground">
              Correct Answers: {Object.entries(userAnswers).filter(([index]) => 
                userAnswers[index] === quizData.questions[index].correct_answer
              ).length} / {quizData.questions.length}
            </p>
          </motion.div>
        )} */}
      <div className="space-y-6">
        {showReview
          && quizData.questions.map((question, index) => renderQuestion(question, index))}
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <Button onClick={retryQuiz} className="px-6">
          <RefreshCcw className="mr-2 h-4 w-4" />
          Retry Quiz
        </Button>
        <Button variant="outline" onClick={saveScore} className="px-6">
          <Save className="mr-2 h-4 w-4" />
          Save Score
        </Button>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="mt-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
};

export default Result;