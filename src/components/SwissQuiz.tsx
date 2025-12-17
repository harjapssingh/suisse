import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    question: "Quelle est la capitale de la Suisse?",
    options: ["Zurich", "Genève", "Berne", "Lausanne"],
    correct: 2,
  },
  {
    question: "Combien de langues officielles y a-t-il en Suisse?",
    options: ["2", "3", "4", "5"],
    correct: 2,
  },
  {
    question: "Quelle est la monnaie de la Suisse?",
    options: ["L'euro", "Le dollar suisse", "Le franc suisse", "La livre suisse"],
    correct: 2,
  },
  {
    question: "Quel est le nom de la montagne la plus célèbre de la Suisse?",
    options: ["Le Mont Blanc", "Le Cervin (Matterhorn)", "L'Eiger", "Le Pilatus"],
    correct: 1,
  },
  {
    question: "Quel plat suisse est préparé avec du fromage fondu?",
    options: ["La raclette", "La poutine", "Le gratin", "La quiche"],
    correct: 0,
  },
  {
    question: "Quel lac se trouve entre la Suisse et la France?",
    options: ["Le lac de Zurich", "Le lac Léman", "Le lac de Constance", "Le lac de Neuchâtel"],
    correct: 1,
  },
];

export function SwissQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  const getOptionClass = (index: number) => {
    let base = "quiz-option";
    if (selectedAnswer === index) base += " selected";
    if (showResult) {
      if (index === questions[currentQuestion].correct) {
        base += " correct";
      } else if (selectedAnswer === index) {
        base += " incorrect";
      }
    }
    return base;
  };

  if (quizComplete) {
    return (
      <div className="swiss-card text-center max-w-lg mx-auto">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Quiz terminé!</h3>
          <p className="text-muted-foreground">
            Vous avez obtenu <span className="font-bold text-primary">{score}</span> sur{" "}
            <span className="font-bold">{questions.length}</span> questions.
          </p>
        </div>
        
        <div className="mb-6">
          {score === questions.length && (
            <p className="text-green-600 font-medium">Excellent! Vous êtes un expert de la Suisse!</p>
          )}
          {score >= questions.length / 2 && score < questions.length && (
            <p className="text-primary font-medium">Très bien! Vous connaissez bien la Suisse!</p>
          )}
          {score < questions.length / 2 && (
            <p className="text-muted-foreground">Continuez à apprendre sur la Suisse!</p>
          )}
        </div>

        <button
          onClick={resetQuiz}
          className="swiss-button text-primary-foreground inline-flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Recommencer le quiz
        </button>
      </div>
    );
  }

  return (
    <div className="swiss-card max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentQuestion + 1} sur {questions.length}
          </span>
          <span className="text-sm font-medium text-primary">
            Score: {score}/{currentQuestion}
          </span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-6">{questions[currentQuestion].question}</h3>

      <div className="space-y-3 mb-6">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            className={`${getOptionClass(index)} w-full text-left flex items-center gap-3`}
          >
            <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium">
              {String.fromCharCode(65 + index)}
            </span>
            <span>{option}</span>
            {showResult && index === questions[currentQuestion].correct && (
              <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto" />
            )}
            {showResult && selectedAnswer === index && index !== questions[currentQuestion].correct && (
              <XCircle className="w-5 h-5 text-red-500 ml-auto" />
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-end gap-3">
        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="swiss-button text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Vérifier
          </button>
        ) : (
          <button onClick={handleNext} className="swiss-button text-primary-foreground">
            {currentQuestion < questions.length - 1 ? "Question suivante" : "Voir les résultats"}
          </button>
        )}
      </div>
    </div>
  );
}
