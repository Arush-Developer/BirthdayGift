import React, { useState } from 'react';
import { CheckCircle, XCircle, Heart, Trophy } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  wrongAnswerReply: string;
  correctAnswerReply: string;
}

const PersonalQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What's the best name to call you 😏",
      options: ["Baby", "Cutie", "Madam CEO", "Jaanu"],
      correctAnswer: 2,
      wrongAnswerReply: "Arre nahi! Tu meri Madam CEO hai na! 👑 CEO title tere paas hi suit karta hai! 😘",
      correctAnswerReply: "Bilkul sahi! Tu meri asli CEO hai! 👩‍💼💖 Boss lady vibes always on point!"
    },
    {
      id: 2,
      question: "Humari sabse best memory kya hai? 🥰",
      options: ["First kiss", "Chupke se milna", "Movie Date", "Saari memories best hain"],
      correctAnswer: 3,
      wrongAnswerReply: "Arre yaar, specific memory kyun choose kiya? 😏 Humari toh saari memories hi best hain na! ✨",
      correctAnswerReply: "Exactly! 💯 Tere saath ki har moment special hai! Every memory is a treasure! 💎"
    },
    {
      id: 3,
      question: "Do you know what do I love the most in you? 💕",
      options: ["Tera smile", "Teri Body", "Tera Confidence", "Sab kuch"],
      correctAnswer: 3,
      wrongAnswerReply: "Partial answer! 😅 Main toh tere sab kuch se pyaar karta hun everything! 🌟",
      correctAnswerReply: "Perfect answer! 🎯 Tere sab kuch mujhe pasand hai - head to toe, inside out! 💖"
    },
    {
      id: 4,
      question: "Birthday par sabse bada gift kya chahiye tujhe? 🎁",
      options: ["Expensive jewelry", "Goa trip", "Arush ka pyaar", "Lots of Ice cream"],
      correctAnswer: 2,
      wrongAnswerReply: "Material things toh secondary hain! 😊 Main chahta hun tu 'Arush ka pyaar' select kare! 💕 Woh toh already tera hai forever!",
      correctAnswerReply: "Aww! 😍 Tera answer sunke dil khush ho gaya! Tu already mere pyaar ki owner hai lifetime ke liye! 👑💖"
    },
    {
      id: 5,
      question: "Future mein kya plan hai humare? 🌟",
      options: ["More dates", "Travel together", "Build empire together", "Jo bhi ho, saath mein"],
      correctAnswer: 2,
      wrongAnswerReply: "Good choice! 😊 But think bigger - hum saath mein apna empire build karenge! Tu CEO, main CTO! 💼✨",
      correctAnswerReply: "Yasss! 🚀 Power couple vibes! Tu CEO, main support system! Together we'll conquer the world! 🌍👑"
    }
  ];

  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  const handleAnswerSelect = (answerIndex: number) => {
    if (!answered) setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setAnswered(true);
    if (isCorrect) setScore(prev => prev + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(false);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-200">
              <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6 animate-bounce" />
              <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                Quiz Complete! 🎉
              </h2>
              <div className="mb-8">
                <div className="text-6xl font-bold text-purple-600 mb-2">
                  {score} / {questions.length}
                </div>
                <p className="text-2xl text-gray-700 font-medium">
                  {score === questions.length 
                    ? "Perfect Score! Tu sach mein mujhe well jaanti hai! 💯" 
                    : score >= 3 
                    ? "Great job! Tu meri good student hai! 😍" 
                    : "Koi baat nahi! Practice makes perfect! 😊"}
                </p>
              </div>
              <div className="space-y-4 text-lg text-gray-700 mb-8">
                <p className="flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-500 mr-2" />
                  Tu jo bhi score laye, tu meri #1 hai always! 👑
                </p>
                <p>
                  Yeh quiz bas fun ke liye tha... real mein toh tu meri perfect match hai! 💕
                </p>
              </div>
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
              >
                Try Again! 🔄
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Personal Quiz Time! 🎯
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Let's see kitna jaanti hai tu mujhe! Flirty questions ahead! 😏
          </p>
          <div className="mt-4">
            <span className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full text-lg font-medium text-purple-600 shadow-lg">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{currentQ.question}</h3>
          <div className="grid gap-4">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={answered}
                className={`p-4 rounded-xl text-lg font-medium transition-all ${
                  answered
                    ? index === currentQ.correctAnswer
                      ? 'bg-green-500 text-white shadow-lg'
                      : index === selectedAnswer
                      ? 'bg-red-500 text-white shadow-lg'
                      : 'bg-gray-200 text-gray-500'
                    : selectedAnswer === index
                    ? 'bg-purple-500 text-white shadow-lg'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {answered && (
                    <span>
                      {index === currentQ.correctAnswer ? <CheckCircle className="w-6 h-6" /> :
                       index === selectedAnswer ? <XCircle className="w-6 h-6" /> : null}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {answered && (
            <div className="mb-6 p-6 rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200">
              <div className="flex items-start">
                <div className="mr-4">
                  {isCorrect ? <CheckCircle className="w-8 h-8 text-green-500" /> : <XCircle className="w-8 h-8 text-red-500" />}
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-800 mb-2">{isCorrect ? 'Correct! 🎉' : 'Oops! 😅'}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {isCorrect ? currentQ.correctAnswerReply : currentQ.wrongAnswerReply}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            {!answered ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                  selectedAnswer !== null
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Answer 📝
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all shadow-lg"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question ➡️' : 'See Results 🏆'}
              </button>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Score so far: {score} / {currentQuestion + (answered ? 1 : 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalQuiz;
