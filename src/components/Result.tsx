import React, { useState } from "react";
import { CheckCircle, AlertCircle, RefreshCcw, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      )}

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