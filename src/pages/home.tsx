// import React from "react";
// import { MagicCard } from "@/components/ui/magic-card";

// const HomeDashboard = () => {
//   const quizzes = [
//     { id: 1, title: "React Basics", questions: 10, description: "Learn the fundamentals of React.js" },
//     { id: 2, title: "Advanced JavaScript", questions: 15, description: "Dive deep into JavaScript concepts" },
//     { id: 3, title: "TailwindCSS Mastery", questions: 12, description: "Master utility-first CSS with Tailwind" },
//   ];

//   const leaderboard = [
//     { id: 1, name: "Alice", score: 980 },
//     { id: 2, name: "Bob", score: 920 },
//     { id: 3, name: "Charlie", score: 850 },
//   ];

//   return (
//     <div className="min-h-screen w-auto bg-[hsl(0,0%,7%)] text-[hsl(220,15%,85%)] px-4 py-8">
//       {/* Welcome Section */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-[hsl(212,70%,45%)]">Welcome, User!</h1>
//         <p className="text-lg mt-2">
//           Here’s your dashboard with an overview of your quizzes and the top performers.
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="grid gap-8">
//         {/* Quizzes Section */}
//         <div>
//           <h2 className="text-2xl font-semibold text-[hsl(212,70%,45%)] mb-4">Your Quizzes</h2>
//           <div className="grid grid-cols-1 gap-6">
//             {quizzes.map((quiz) => (
//               <MagicCard
//                 key={quiz.id}
//                 hoverEffect="glow"
//                 className="p-6 bg-[hsl(0,0%,12%)] border border-[hsl(0,0%,20%)] rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
//               >
//                 <div className="flex flex-col items-center space-y-4">
//                   <div className="w-16 h-16 bg-[hsl(205,78%,55%)] rounded-full flex items-center justify-center text-[hsl(0,0%,7%)] font-bold text-xl">
//                     {quiz.questions}
//                   </div>
//                   <div className="text-center">
//                     <h3 className="text-xl font-bold text-[hsl(205,78%,55%)]">{quiz.title}</h3>
//                     <p className="mt-2 text-sm">{quiz.description}</p>
//                   </div>
//                 </div>
//               </MagicCard>
//             ))}
//           </div>
//         </div>

//         {/* Leaderboard Section */}
//         <div>
//           <h2 className="text-2xl font-semibold text-[hsl(212,70%,45%)] mb-4">Leaderboard</h2>
//           <div className="p-4 bg-[hsl(0,0%,12%)] border border-[hsl(0,0%,20%)] rounded-lg shadow-lg">
//             <ul className="space-y-4">
//               {leaderboard.map((user) => (
//                 <li
//                   key={user.id}
//                   className="p-4 bg-[hsl(0,0%,15%)] rounded-md border border-[hsl(0,0%,20%)] flex justify-between"
//                 >
//                   <span className="font-bold">{user.name}</span>
//                   <span>{user.score} Points</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeDashboard;

// import React from "react";
// import { MagicCard } from "@/components/ui/magic-card";

// const HomeDashboard = () => {
//   const quizzes = [
//     { id: 1, title: "React Basics", questions: 10, description: "Learn the fundamentals of React.js" },
//     { id: 2, title: "Advanced JavaScript", questions: 15, description: "Dive deep into JavaScript concepts" },
//     { id: 3, title: "TailwindCSS Mastery", questions: 12, description: "Master utility-first CSS with Tailwind" },
//   ];

//   const leaderboard = [
//     { id: 1, name: "Alice", score: 980 },
//     { id: 2, name: "Bob", score: 920 },
//     { id: 3, name: "Charlie", score: 850 },
//   ];

//   return (
//     <div className="min-h-screen w-full bg-background text-foreground p-8">
//       {/* Welcome Section */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-primary">Welcome, User!</h1>
//         <p className="text-lg mt-2 text-muted-foreground">
//           Here's your dashboard with an overview of your quizzes and the top performers.
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="space-y-8">
//         {/* Quizzes Section */}
//         <div>
//           <h2 className="text-2xl font-semibold text-primary mb-6">Your Quizzes</h2>
//           <div className="grid grid-cols-1 gap-6">
//             {quizzes.map((quiz) => (
//               <MagicCard
//                 key={quiz.id}
//                 hoverEffect="glow"
//                 className="bg-card border-border hover:border-primary/50 p-6 border border-[hsl(0,0%,20%)] rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
//               >
//                 <div className="flex items-center p-6 gap-6">
//                   <div className="shrink-0">
//                     <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
//                       {quiz.questions}
//                     </div>
//                   </div>
//                   <div className="flex-grow">
//                     <h3 className="text-xl font-bold text-primary text-left mb-2">{quiz.title}</h3>
//                     <p className="text-muted-foreground">{quiz.description}</p>

//                   </div>
//                 </div>
//               </MagicCard>
//             ))}
//           </div>
//         </div>

//         {/* Leaderboard Section */}
//         <div>
//           <h2 className="text-2xl font-semibold text-primary mb-6">Leaderboard</h2>
//           <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
//             <div className="divide-y divide-border">
//               {leaderboard.map((user, index) => (
//                 <div
//                   key={user.id}
//                   className="flex items-center justify-between p-4 hover:bg-muted transition-colors"
//                 >
//                   <div className="flex items-center gap-4">
//                     <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
//                       {index + 1}
//                     </span>
//                     <span className="font-semibold text-card-foreground">{user.name}</span>
//                   </div>
//                   <span className="text-primary font-bold">{user.score.toLocaleString()} Points</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeDashboard;

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
                    {/* Added right padding to prevent text overlap with buttons */}
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {quiz.title}
                    </h3>
                    <p className="text-muted-foreground">{quiz.description}</p>
                  </div>

                  {/* Action Buttons - Vertically stacked and right-aligned */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a href="/playquiz">
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

        {/* Leaderboard Section */}
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
