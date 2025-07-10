
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Course } from '../types';
import { useAuth } from '../context/AuthContext';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const isActivated = user?.activatedCourses.includes(course.id) ?? false;
  const canStart = course.is_free || isActivated;

  const handleStartQuiz = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: `/courses` } });
      return;
    }
    navigate(`/quiz/${course.id}`);
  };
  
  const handleActivate = () => {
     if (!isAuthenticated) {
      navigate('/login', { state: { from: `/activate/${course.id}` } });
      return;
    }
    navigate(`/activate/${course.id}`);
  };

  const getStatus = () => {
    if (course.is_free) {
      return <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold bg-success-color text-primary-black">مجاني</div>;
    }
    if (isActivated) {
      return <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold bg-gold-accent text-primary-black">مفعل</div>;
    }
    return <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold bg-error-color text-primary-white">مدفوع</div>;
  };

  return (
    <div className="bg-glass-bg border border-glass-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-gold-accent hover:-translate-y-2 flex flex-col">
      {getStatus()}
      <div className="p-6 bg-dark-gray/30">
        <div className="text-5xl mb-4">{course.icon}</div>
        <h3 className="text-2xl font-bold text-gold-accent mb-2">{course.title}</h3>
        <p className="text-light-gray text-sm mb-4 min-h-[40px]">{course.description}</p>
        <div className="flex gap-2">
          <span className="bg-glass-bg border border-glass-border text-xs font-semibold px-3 py-1 rounded-full">{course.difficulty}</span>
          <span className="bg-glass-bg border border-glass-border text-xs font-semibold px-3 py-1 rounded-full">{course.category}</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div>
            <div className="text-lg font-bold text-gold-accent">{course.questions_count}</div>
            <div className="text-xs text-light-gray">سؤال</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gold-accent">⭐ {course.rating}</div>
            <div className="text-xs text-light-gray">تقييم</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gold-accent">{course.students}</div>
            <div className="text-xs text-light-gray">طالب</div>
          </div>
        </div>
        {canStart ? (
          <button onClick={handleStartQuiz} className="w-full bg-gold-accent text-primary-black font-bold py-3 rounded-lg transition-transform duration-300 hover:scale-105">
            ▶️ بدء الاختبار
          </button>
        ) : (
          <button onClick={handleActivate} className="w-full bg-transparent border-2 border-primary-white text-primary-white font-bold py-3 rounded-lg transition-all duration-300 hover:bg-primary-white hover:text-primary-black">
            🔓 تفعيل الدورة
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
