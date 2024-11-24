import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Alert } from "./ui/alert";
import { Progress as ProgressBar } from "./ui/progress";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import Result from "./Result.tsx";
import Timer from "./Timer.tsx";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const Quiz = () => {
  const { quizId } = useParams();
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const data = {
      link: [
        "https://quizviewer.s3.us-east-005.backblazeb2.com/64d55d5e1101435f92e982714e266066.json",
        "64d55d5e1101435f92e982714e266066.json",
      ],
      quiz: {
        transcript:
          "ponents change what users C based on events or new data let's create a simple card counter make a new file in the components fold",
        questions: [
          {
            question:
              "Considering the described React app structure and the explanation of `package.json` and `package-lock.json`, which statement BEST reflects the crucial difference in their functionality regarding dependency management in a collaborative development environment?",
            options: {
              a: "`package.json` dictates the versions of dependencies, while `package-lock.json` is only used for local development and ignored in version control.",
              b: "`package-lock.json` defines the project's dependencies, while `package.json` is a redundant file solely for organizational purposes.",
              c: "`package.json` specifies the desired dependencies and their semantic version ranges, whereas `package-lock.json` pins down the exact versions used, ensuring consistent builds across different environments and developers.",
              d: "Both files serve identical purposes, with `package-lock.json` acting as a backup for `package.json` in case of corruption.",
            },
            correct_answer: "c",
            explanation:
              '`package.json` lists the project\'s dependencies using semantic versioning (e.g., "^1.0.0"), allowing for updates within a range.  `package-lock.json`, however, records the precise versions installed, guaranteeing that every developer working on the project uses the same dependency versions, preventing conflicts and ensuring consistent build outcomes. This is crucial for collaboration as it eliminates discrepancies arising from different dependency versions.',
            difficulty: "medium",
            estimated_time: 60,
          },
          {
            question:
              "Considering the described React app structure and development process from the perspective of a Facebook engineer in 2013,  what is the most significant advantage React offers in addressing the challenges of creating a fast and interactive newsfeed, beyond simply component reusability?",
            options: {
              a: "The use of JSX, enabling a seamless blend of JavaScript and HTML, which streamlines development.",
              b: "The inclusion of a `robots.txt` file, optimizing search engine crawlers and improving SEO, thus indirectly boosting user engagement.",
              c: "The virtual DOM, which minimizes full page reloads and results in dramatically faster updates for a better user experience.",
              d: "The well-organized directory structure, making it easier for multiple engineers to collaborate on the project.",
            },
            correct_answer: "c",
            explanation:
              "While all options offer benefits, the virtual DOM is the core innovation of React that directly tackles the performance issues Facebook engineers faced in 2013. The massive scale of the Facebook newsfeed demanded an efficient way to update only the necessary parts of the UI, which the virtual DOM achieves.  JSX, the directory structure, and `robots.txt` are helpful, but the virtual DOM addresses the primary performance bottleneck.",
            difficulty: "medium",
            estimated_time: 25,
          },
          {
            question:
              "Considering the React app structure described,  imagine you need to add a new feature to dynamically display a user's profile picture within the main App component.  Where would you place the logic to fetch and display the image, and what file(s) would be most directly impacted by this change?",
            options: {
              a: "Within `app.css`, modifying CSS selectors to target a new image element added directly to `index.html`.",
              b: "Within `App.js`, fetching the image data and conditionally rendering it based on the presence of data, potentially needing adjustments to `index.js` for data integration.",
              c: "Within `index.js`,  modifying the React rendering process to include the image directly within the root element, then modifying `public/index.html`.",
              d: "Within `package.json`, adding a new dependency to handle image fetching, and updating the `robots.txt` file to allow crawlers to access the new image.",
            },
            correct_answer: "b",
            explanation:
              "The core logic for fetching and displaying dynamic content, like a user's profile picture, belongs within the main application component (`App.js`). This component handles the application's UI and logic. Fetching the image data and then conditionally rendering it based on successful retrieval is the correct approach. While `index.js` is the entry point, directly modifying it for this specific feature is not ideal; it's better to keep that file clean and focused on the core rendering process.  `app.css` is for styling, not dynamic data manipulation.  `package.json` and `robots.txt` are irrelevant to the core image display functionality.",
            difficulty: "medium",
            estimated_time: 60,
          },
          {
            question:
              "Considering the evolution of web development leading to React's creation in 2013, and its file structure (as described), which statement BEST reflects the primary cause-and-effect relationship driving React's design philosophy emphasizing reusable components and virtual DOM?",
            options: {
              a: "The increasing complexity of web applications in the early 2010s led to a demand for faster rendering, resulting in React's focus on component-based architecture for modularity and improved performance.  The virtual DOM is a secondary benefit.",
              b: "Facebook engineers' desire to create visually appealing user interfaces drove the development of React, with reusable components and the virtual DOM being later additions to improve the visual appeal.",
              c: "The need for cross-platform development (iOS and Android) was the primary driver, leading to React Native, and the component-based architecture and virtual DOM were implemented as supporting features for this goal.",
              d: "The popularity of JavaScript frameworks prior to 2013 directly caused Facebook to create React, aiming for feature parity, where reusable components and the virtual DOM were chosen to differentiate it from competitors.",
            },
            correct_answer: "a",
            explanation:
              "The passage clearly highlights the challenges faced by Facebook engineers due to the complexity of existing codebases in maintaining speed and interactivity.  This directly led to the need for a more efficient and modular approach, which React's component-based architecture and virtual DOM effectively addressed. While React Native (cross-platform) is mentioned, it's a consequence of the core design philosophy, not the primary cause. Options b and d misrepresent the core motivations.",
            difficulty: "medium",
            estimated_time: 60,
          },
          {
            question:
              "Considering the React app structure described, which file primarily manages the initial rendering of the React application, connecting it to the static HTML, and potentially wraps the main application component with React.StrictMode for debugging purposes?",
            options: {
              a: "`App.js`",
              b: "`index.js`",
              c: "`package.json`",
              d: "`App.css`",
            },
            correct_answer: "b",
            explanation:
              '`index.js` is where the main application component (`App.js` in this case) is rendered using `ReactDOM.render`. This process takes the React application and inserts it into the designated HTML element (typically a `<div>` with the ID "root") in the `index.html` file located in the `public` folder. The `React.StrictMode` wrapper, used for enhanced debugging during development, also typically resides within `index.js`.  `App.js` is the main application component, but it\'s not responsible for the initial rendering and integration with the static HTML. `package.json` manages project dependencies, and `App.css` handles styling.',
            difficulty: "medium",
            estimated_time: 15,
          },
        ],
        difficulty: "medium",
        time_limit: 220,
      },
    };

    try {
      const shuffledQuestions = shuffleArray(data.quiz.questions).map(
        (question) => {
          // const entries = Object.entries(question.options);
          // const shuffledEntries = shuffleArray(entries);
          return {
            ...question,
            options: question.options,
          };
        }
      );

      setQuizData({
        ...data.quiz,
        questions: shuffledQuestions,
      });
      setTimeLeft(data.quiz.time_limit);
      setQuizComplete(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load quiz. Redirecting...", {
        duration: 3000,
        onDismiss: () => navigate("/"),
      });
    }
  }, [quizId, navigate]);

  const handleAnswer = (option) => {
    setSelectedOptions((prev) => ({ ...prev, [currentQuestion]: option }));
    setUserAnswers((prev) => ({ ...prev, [currentQuestion]: option }));
    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      toast.success("Answer saved!");
    } else {
      setQuizComplete(true);
    }
  };

  const handleSkip = () => {
    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      toast.info("Question skipped");
    } else {
      setQuizComplete(true);
    }
  };

  const handleTimeUp = () => {
    if (!quizComplete) {
      setQuizComplete(true);
      toast.warning("Time's up! Submitting quiz...");
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setSelectedOptions({});
    setQuizComplete(false);
    setTimeLeft(quizData.time_limit);
    toast.success("Quiz reset! Good luck!");
  };

  if (!quizData)
    return (
      <div className="flex justify-center items-center min-h-screen bg-background text-foreground">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );

  if (quizComplete)
    return (
      <Result
        quizData={quizData}
        userAnswers={userAnswers}
        retryQuiz={handleRetry}
      />
    );

  const question = quizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <Timer startTime={timeLeft} onTimeUp={handleTimeUp} />
      <ProgressBar
        value={progress}
        className="w-full max-w-3xl h-2 bg-muted rounded mt-4 mb-6"
      />
      <div className="w-full max-w-3xl bg-card text-card-foreground shadow-lg rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          Question {currentQuestion + 1} of {quizData.questions.length}
        </h2>
        <p className="text-foreground">{question.question}</p>
        <div className="flex flex-col gap-3">
          {Object.entries(question.options).map(([key, value]) => (
            <Button
              key={key}
              variant={
                selectedOptions[currentQuestion] === key ? "default" : "outline"
              }
              className={`w-full h-auto text-left min-h-[60px] whitespace-normal break-words py-3 px-4 ${
                selectedOptions[currentQuestion] === key
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
              onClick={() => handleAnswer(key)}
            >
              <span className="mr-2">{key.toUpperCase()}.</span>
              <span className="flex-1">{value}</span>
            </Button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="secondary"
            onClick={() => setCurrentQuestion((prev) => prev - 1)}
            disabled={currentQuestion === 0}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Previous
          </Button>
          <div className="flex gap-2">
            <Button
              variant="destructive"
              onClick={() => {
                setQuizComplete(true);
                toast.info("Quiz submitted!");
              }}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Submit
            </Button>
            <Button
              variant="outline"
              onClick={handleSkip}
              className="border-border hover:bg-accent hover:text-accent-foreground"
            >
              Skip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
