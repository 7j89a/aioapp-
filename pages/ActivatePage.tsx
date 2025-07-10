
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { COURSES } from '../constants';
import Spinner from '../components/Spinner';

const ActivatePage = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const { activateCourse, isLoading } = useAuth();
    const [code, setCode] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const course = COURSES.find(c => c.id === Number(courseId));

    if (!course) {
        return <div className="text-center py-20 text-error-color">الدورة المطلوبة غير موجودة.</div>;
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setMessage(null);
        if (!code) {
            setError("الرجاء إدخال كود التفعيل.");
            return;
        }

        try {
            await activateCourse(code, course.id);
            setMessage("تم تفعيل الدورة بنجاح! سيتم توجيهك الآن.");
            setTimeout(() => navigate('/courses'), 2000);
        } catch (err: any) {
            setError(err.message || "حدث خطأ غير متوقع.");
        }
    };

    return (
        <div className="flex justify-center items-center py-12 px-4">
            <div className="w-full max-w-md bg-glass-bg border border-glass-border rounded-2xl p-8 backdrop-blur-lg">
                <div className="text-center mb-8">
                    <div className="inline-block bg-gold-accent text-primary-black rounded-full p-4 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.623 5.912M15 7A5.966 5.966 0 0010 3a5.966 5.966 0 00-5 4.901M9 10a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gold-accent">تفعيل دورة: {course.title}</h1>
                    <p className="text-light-gray mt-2">{course.description}</p>
                </div>
                
                {error && <div className="bg-error-color/20 border border-error-color text-error-color p-3 rounded-lg mb-4 text-center">{error}</div>}
                {message && <div className="bg-success-color/20 border border-success-color text-success-color p-3 rounded-lg mb-4 text-center">{message}</div>}

                <a href="https://t.me/Wbbdhdhdh_bot" target="_blank" rel="noopener noreferrer" className="w-full bg-[#0088cc] text-white font-bold py-3 mb-6 rounded-lg transition-transform duration-300 hover:scale-105 flex justify-center items-center gap-2">
                    🤖 احصل على كود من بوت التليجرام
                </a>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-primary-white mb-2" htmlFor="code">كود التفعيل</label>
                        <input
                            type="text"
                            id="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full bg-dark-gray border border-glass-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-accent text-center tracking-widest"
                            placeholder="أدخل الكود هنا"
                            required
                        />
                    </div>
                    <button type="submit" disabled={isLoading} className="w-full bg-gold-accent text-primary-black font-bold py-3 rounded-lg transition-transform duration-300 hover:scale-105 flex justify-center items-center">
                        {isLoading ? <Spinner /> : '🔓 تفعيل'}
                    </button>
                </form>
                 <div className="text-center mt-6">
                    <Link to="/courses" className="text-light-gray hover:text-gold-accent transition-colors">
                        ← العودة للدورات
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ActivatePage;
