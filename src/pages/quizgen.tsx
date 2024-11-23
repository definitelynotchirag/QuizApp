import React, { useContext, useEffect, useState } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { FileText, Save, Trash2, RefreshCw, CheckCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const QuizGenerator = () => {
  const [transcript, setTranscript]= useState("");
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const savedTranscript = localStorage.getItem("transcript");
    if (savedTranscript) {
      setTranscript(savedTranscript);
    }
  }, []);


  const generateQuiz = async () => {
    if (!transcript) return;
    setLoading(true);
    setTimeout(() => {
      setQuiz({
        questions: [
          {
            id: 1,
            question: "What is the main topic discussed in the transcript?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: 0,
            explanation:
              "Option A is correct because it directly addresses the main theme discussed in the transcript.",
          },
          {
            id: 2,
            question: "Which key point was emphasized in the discussion?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: 1,
            explanation:
              "Option B is correct as it was repeatedly emphasized throughout the discussion.",
          },
          {
            id: 3,
            question: "What conclusion was drawn from the presentation?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: 2,
            explanation:
              "Option C accurately reflects the final conclusion presented in the transcript.",
          },
        ],
      });
      setLoading(false);
    }, 2000);
  };

  const handleSaveQuiz = () => {
    console.log("Saving quiz...");
  };

  const handleDiscardQuiz = () => {
    setQuiz(null);
  };

  const handleRegenerateQuiz = () => {
    generateQuiz();
  };

  return (
    <div className="min-h-screen bg-background flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-3xl">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-3">
            Quiz Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Generate quiz questions based on your transcript content
          </p>
        </div>

        {/* Main Content */}
        <MagicCard
          className="w-full bg-card border-border p-8 rounded-xl shadow-lg flex justify-center items-center"
          hoverEffect="glow"
        >
          <div className="flex flex-col items-center justify-center w-full">
            {!quiz ? (
              <div className="w-full space-y-6 flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-primary">
                    Current Transcript
                  </h2>
                </div>

                {transcript ? (
                  <div className="w-full flex flex-col items-center">
                    <p className="text-foreground mb-6 text-center max-w-2xl">
                      {transcript || "No transcript available"}
                    </p>
                    <button
                      onClick={generateQuiz}
                      disabled={loading}
                      className="w-full max-w-md px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <RefreshCw
                        className={`w-5 h-5 ${loading ? "animate-spin" : ""}`}
                      />
                      {loading ? "Generating Quiz..." : "Generate Quiz"}
                    </button>
                  </div>
                ) : (
                  <Alert className="bg-secondary border-primary max-w-2xl">
                    <AlertTitle className="text-primary">
                      No Transcript Available
                    </AlertTitle>
                    <AlertDescription>
                      Please generate a transcript first using the Transcript
                      Generator
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            ) : (
              <div className="w-full space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <h2 className="text-xl font-semibold text-primary">
                    Generated Quiz
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={handleRegenerateQuiz}
                      className="px-4 py-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg flex items-center gap-2"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Regenerate
                    </button>
                    <button
                      onClick={handleSaveQuiz}
                      className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Save
                    </button>
                    <button
                      onClick={handleDiscardQuiz}
                      className="px-4 py-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-lg flex items-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Discard
                    </button>
                  </div>
                </div>

                <div className="space-y-8">
                  {quiz.questions.map((q, idx) => (
                    <div
                      key={q.id}
                      className="bg-secondary p-6 rounded-lg flex flex-col items-center"
                    >
                      <h3 className="text-lg font-medium text-primary mb-6 text-center">
                        {idx + 1}. {q.question}
                      </h3>
                      <div className="w-full max-w-xl space-y-3">
                        {q.options.map((option, optIdx) => (
                          <div
                            key={optIdx}
                            className={`flex items-center gap-3 p-4 rounded-lg transition-colors ${
                              optIdx === q.correctAnswer
                                ? "bg-primary/20 border-2 border-primary"
                                : "bg-card"
                            }`}
                          >
                            {optIdx === q.correctAnswer && (
                              <CheckCircle className="w-5 h-5 text-primary" />
                            )}
                            <span className="text-foreground">{option}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-4 bg-accent/10 rounded-lg w-full max-w-xl">
                        <p className="text-primary text-sm">
                          <span className="font-semibold">Explanation:</span>{" "}
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </MagicCard>
      </div>
    </div>
  );
};

export default QuizGenerator;
