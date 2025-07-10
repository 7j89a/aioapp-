
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("كلمات المرور غير متطابقة.");
      return;
    }
    if (password.length < 6) {
      setError("كلمة المرور يجب أن تكون 6 أحرف على الأقل.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      await register(fullName, email, password);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'فشل إنشاء الحساب. قد يكون البريد الإلكتروني مستخدماً بالفعل.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
       <div className="flex justify-center items-center py-12 px-4">
          <div className="w-full max-w-md bg-glass-bg border border-glass-border rounded-2xl p-8 backdrop-blur-lg text-center">
             <div className="inline-block bg-success-color text-primary-black rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
             </div>
             <h1 className="text-3xl font-bold text-success-color">تم التسجيل بنجاح!</h1>
             <p className="text-light-gray mt-4">
                لقد أرسلنا رابط تحقق إلى بريدك الإلكتروني <strong>{email}</strong>.
                <br/>
                الرجاء الضغط على الرابط لتفعيل حسابك ثم تسجيل الدخول.
             </p>
             <Link to="/login" className="mt-8 inline-block bg-gold-accent text-primary-black font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105">
                الذهاب لتسجيل الدخول
            </Link>
          </div>
       </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-md bg-glass-bg border border-glass-border rounded-2xl p-8 backdrop-blur-lg">
        <div className="text-center mb-8">
          <div className="inline-block bg-gold-accent text-primary-black rounded-full p-4 mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
          </div>
          <h1 className="text-3xl font-bold text-gold-accent">إنشاء حساب جديد</h1>
          <p className="text-light-gray mt-2">انضم إلينا وابدأ رحلة التعلم.</p>
        </div>

        {error && <div className="bg-error-color/20 border border-error-color text-error-color p-3 rounded-lg mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4"><label className="block text-primary-white mb-2">الاسم الكامل</label><input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-dark-gray border border-glass-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-accent" required /></div>
          <div className="mb-4"><label className="block text-primary-white mb-2">البريد الإلكتروني</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-dark-gray border border-glass-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-accent" required /></div>
          <div className="mb-4"><label className="block text-primary-white mb-2">كلمة المرور</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-dark-gray border border-glass-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-accent" required /></div>
          <div className="mb-6"><label className="block text-primary-white mb-2">تأكيد كلمة المرور</label><input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full bg-dark-gray border border-glass-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-accent" required /></div>
          <button type="submit" disabled={loading} className="w-full bg-gold-accent text-primary-black font-bold py-3 rounded-lg transition-transform duration-300 hover:scale-105 flex justify-center items-center">
            {loading ? <Spinner /> : '✨ إنشاء الحساب'}
          </button>
        </form>
        <p className="text-center mt-6 text-light-gray">
          لديك حساب بالفعل؟ <Link to="/login" className="text-gold-accent hover:underline font-semibold">سجل دخولك</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
