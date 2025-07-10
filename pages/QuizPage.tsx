
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { COURSES } from '../constants';
import { Question } from '../types';
import Spinner from '../components/Spinner';
import { getEnhancedExplanation } from '../services/geminiService';

const QuizPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const course = COURSES.find(c => c.id === Number(courseId));
  const [questions, setQuestions] = useState<Question[]>([]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [geminiExplanation, setGeminiExplanation] = useState<string | null>(null);
  const [isLoadingGemini, setIsLoadingGemini] = useState(false);

  useEffect(() => {
    if (course) {
        // In a real app, you might shuffle questions.
        setQuestions(course.questions);
    }
  }, [course]);

  if (!course || questions.length === 0) {
    return <Navigate to="/courses" replace />;
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleAnswer = (selectedIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(selectedIndex);
    setIsAnswered(true);

    const isCorrect = selectedIndex === currentQuestion.correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedback({ message: `إجابة صحيحة! ${currentQuestion.explanation}`, type: 'success' });
    } else {
      setFeedback({ message: `إجابة خاطئة. ${currentQuestion.explanation}`, type: 'error' });
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setIsAnswered(false);
      setSelectedAnswer(null);
      setFeedback({ message: '', type: '' });
      setGeminiExplanation(null);
    } else {
      // Quiz finished
      navigate('/quiz-result', { state: { score, totalQuestions: questions.length, courseTitle: course.title } });
    }
  };

  const handleGetEnhancedExplanation = async () => {
    setIsLoadingGemini(true);
    const explanation = await getEnhancedExplanation(currentQuestion);
    setGeminiExplanation(explanation);
    setIsLoadingGemini(false);
  }

  const getButtonClass = (index: number) => {
    if (!isAnswered) {
      return 'bg-glass-bg border-glass-border hover:bg-gold-accent/10 hover:border-gold-accent';
    }
    if (index === currentQuestion.correct) {
      return 'bg-success-color/20 border-success-color text-success-color';
    }
    if (index === selectedAnswer) {
      return 'bg-error-color/20 border-error-color text-error-color';
    }
    return 'bg-glass-bg border-glass-border opacity-60';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-glass-bg border border-glass-border rounded-2xl p-6 mb-8 text-center">
        <h2 className="text-xl font-bold text-light-gray">{course.title}</h2>
        <p className="font-bold my-2">السؤال {currentIndex + 1} من {questions.length}</p>
        <div className="w-full bg-dark-gray rounded-full h-2.5">
          <div className="bg-gradient-to-r from-yellow-300 to-gold-accent h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="bg-glass-bg border border-glass-border rounded-2xl p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 leading-relaxed">{currentQuestion.question}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(index)} disabled={isAnswered} className={`w-full p-4 rounded-lg border-2 text-lg text-right transition-all duration-300 ${getButtonClass(index)}`}>
              {option}
            </button>
          ))}
        </div>
      </div>

      {isAnswered && (
        <div className="mt-8 bg-glass-bg border border-glass-border rounded-2xl p-6 text-center animate-fade-in-up">
          <p className={`text-xl font-bold ${feedback.type === 'success' ? 'text-success-color' : 'text-error-color'}`}>
            {feedback.message}
          </p>
          
          <div className="my-4">
             <button onClick={handleGetEnhancedExplanation} disabled={isLoadingGemini} className="bg-transparent border border-gold-accent text-gold-accent px-4 py-2 rounded-lg hover:bg-gold-accent hover:text-black transition-colors duration-300 flex items-center justify-center mx-auto gap-2">
               {isLoadingGemini ? <Spinner /> : "🧠 الحصول على شرح أعمق (Gemini)"}
             </button>
          </div>
          
          {geminiExplanation && (
            <div className="mt-4 text-right bg-dark-gray/50 p-4 rounded-lg border border-glass-border whitespace-pre-wrap">
                <p>{geminiExplanation}</p>
            </div>
          )}

          <button onClick={handleNextQuestion} className="mt-6 w-full max-w-sm mx-auto bg-gold-accent text-primary-black font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105">
            {currentIndex + 1 < questions.length ? '➡️ السؤال التالي' : '🏁 عرض النتيجة'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
