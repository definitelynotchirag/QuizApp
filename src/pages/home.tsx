import React from "react";
import { MagicCard } from "@/components/ui/magic-card";
import { Play, Trash2 } from "lucide-react";

const HomeDashboard = () => {
  const quizzes = [
    {
      id: 1,
      title: "React Basics",
      questions: 10,
      description: "Learn the fundamentals of React.js",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      questions: 15,
      description: "Dive deep into JavaScript concepts",
    },
    {
      id: 3,
      title: "TailwindCSS Mastery",
      questions: 12,
      description: "Master utility-first CSS with Tailwind",
    },
  ];

  const leaderboard = [
    { id: 1, name: "Alice", score: 980 },
    { id: 2, name: "Bob", score: 920 },
    { id: 3, name: "Charlie", score: 850 },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-foreground p-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary">Welcome, User!</h1>
        <p className="text-lg mt-2 text-muted-foreground">
          Here's your dashboard with an overview of your quizzes and the top
          performers.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Quizzes Section */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Your Quizzes
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {quizzes.map((quiz) => (
              <MagicCard
                key={quiz.id}
                hoverEffect="glow"
                className="bg-card border-border hover:border-primary/50 p-6 border border-[hsl(0,0%,20%)] rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 group relative"
              >
                <div className="flex items-center p-6 gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {quiz.questions}
                    </div>
                  </div>
                  <div className="flex-grow pr-32">
                    {" "}
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {quiz.title}
                    </h3>
                    <p className="text-muted-foreground">{quiz.description}</p>
                  </div>

                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a href="/1222">
                      <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors w-28">
                        <Play size={16} />
                      </button>
                    </a>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-destructive hover:bg-destructive/90 text-destructive-foreground font-medium transition-colors w-28">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>

      
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Leaderboard
          </h2>
          <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-border">
              {leaderboard.map((user, index) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-card-foreground">
                      {user.name}
                    </span>
                  </div>
                  <span className="text-primary font-bold">
                    {user.score.toLocaleString()} Points
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
