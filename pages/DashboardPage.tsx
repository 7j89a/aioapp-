
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { COURSES } from '../constants';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    const { user } = useAuth();

    if (!user) {
        return null;
    }

    const availableCourses = COURSES.filter(course => course.is_free || user.activatedCourses.includes(course.id));

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                    مرحباً بعودتك، <span className="text-gold-accent">{user.fullName}!</span> 👋
                </h1>
                <p className="text-lg text-light-gray max-w-2xl mx-auto">هنا ملخص نشاطك. واصل التعلم لتحقيق أهدافك.</p>
            </div>

            <h2 className="text-2xl font-bold text-center text-gold-accent mb-8">دوراتك المفعلة والمتاحة</h2>
            
            {availableCourses.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {availableCourses.map(course => (
                        <div key={course.id} className="bg-glass-bg border border-glass-border rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-gold-accent hover:-translate-y-2">
                            <div className="text-6xl mb-4">{course.icon}</div>
                            <h3 className="text-2xl font-bold text-gold-accent mb-2">{course.title}</h3>
                            <p className="text-light-gray text-sm mb-6 flex-grow">{course.description}</p>
                            <Link to={`/quiz/${course.id}`} className="w-full mt-auto bg-gold-accent text-primary-black font-bold py-3 rounded-lg transition-transform duration-300 hover:scale-105">
                                ▶️ ابدأ الآن
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-glass-bg border border-glass-border rounded-2xl">
                    <p className="text-xl text-light-gray">ليس لديك أي دورات مفعلة بعد.</p>
                    <Link to="/courses" className="mt-6 inline-block bg-gold-accent text-primary-black font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105">
                        استكشف الدورات
                    </Link>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
