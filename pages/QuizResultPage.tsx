
import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { QuizResult } from '../types';

const QuizResultPage = () => {
    const location = useLocation();
    const result = location.state as QuizResult;

    if (!result) {
        return <Navigate to="/courses" replace />;
    }
    
    const { score, totalQuestions, courseTitle } = result;
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

    let message = "عمل رائع! استمر في التعلم.";
    if (percentage < 50) {
        message = "لا بأس، المحاولة مرة أخرى هي مفتاح النجاح!";
    } else if (percentage >= 90) {
        message = "ممتاز! لقد أتقنت هذه المادة.";
    }

    return (
        <div className="flex justify-center items-center py-12 px-4">
            <div className="w-full max-w-lg bg-glass-bg border border-glass-border rounded-2xl p-8 backdrop-blur-lg text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h1 className="text-3xl font-bold text-gold-accent">النتيجة النهائية</h1>
                <p className="text-light-gray mt-2 mb-6">نتائجك في دورة: {courseTitle}</p>
                
                <div className="my-8">
                    <div className="text-7xl font-black text-gold-accent">{percentage}%</div>
                    <p className="text-lg text-white mt-2">
                        لقد أجبت على <span className="font-bold text-gold-accent">{score}</span> من <span className="font-bold text-gold-accent">{totalQuestions}</span> أسئلة بشكل صحيح.
                    </p>
                </div>

                <p className="text-xl text-light-gray mb-8">{message}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/courses" className="bg-transparent border-2 border-primary-white text-primary-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-primary-white hover:text-primary-black">
                        📚 العودة للدورات
                    </Link>
                    <Link to="/dashboard" className="bg-gold-accent text-primary-black font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                        🏠 لوحة التحكم
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizResultPage;
