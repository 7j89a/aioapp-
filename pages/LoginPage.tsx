
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.message || 'فشل تسجيل الدخول. يرجى التحقق من بياناتك.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-md bg-glass-bg border border-glass-border rounded-2xl p-8 backdrop-blur-lg">
        <div className="text-center mb-8">
          <div className="inline-block bg-gold-accent text-primary-black rounded-full p-4 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h1 className="text-3xl font-bold text-gold-accent">تسجيل الدخول</h1>
          <p className="text-light-gray mt-2">مرحباً بعودتك! أدخل بياناتك للمتابعة.</p>
        </div>

        {error && <div className="bg-error-color/20 border border-error-color text-error-color p-3 rounded-lg mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-primary-white mb-2" htmlFor="email">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-dark-gray border border-glass-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-accent"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-primary-white mb-2" htmlFor="password">كلمة المرور</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-dark-gray border border-glass-border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gold-accent"
              required
            />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-gold-accent text-primary-black font-bold py-3 rounded-lg transition-transform duration-300 hover:scale-105 flex justify-center items-center">
            {loading ? <Spinner /> : '🚀 تسجيل الدخول'}
          </button>
        </form>
        <p className="text-center mt-6 text-light-gray">
          ليس لديك حساب؟ <Link to="/register" className="text-gold-accent hover:underline font-semibold">سجل الآن</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
