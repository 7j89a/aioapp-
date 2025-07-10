
import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-glass-bg border border-glass-border rounded-2xl p-8 text-center transition-all duration-300 hover:border-gold-accent hover:-translate-y-2">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gold-accent mb-2">{title}</h3>
    <p className="text-light-gray leading-relaxed">{description}</p>
  </div>
);

const HomePage = () => {
  return (
    <div>
      <section className="text-center py-20 px-4" style={{ background: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 60%)' }}>
        <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-primary-white to-gold-accent bg-clip-text text-transparent animate-fade-in-down">
          منصة التعلم التفاعلية
        </h1>
        <p className="text-lg md:text-xl text-light-gray max-w-2xl mx-auto mb-8 animate-fade-in-up">
          اكتشف عالماً جديداً من التعلم مع اختباراتنا التفاعلية المتطورة
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up">
          <Link to="/courses" className="bg-gold-accent text-primary-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-gold-accent/20">
            🚀 ابدأ التعلم الآن
          </Link>
          <a href="#features" className="bg-transparent border-2 border-primary-white text-primary-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-primary-white hover:text-primary-black">
            📖 تعرف على المزيد
          </a>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-gold-accent">لماذا تختارنا؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon="🧠" title="اختبارات ذكية" description="اختبارات تفاعلية متنوعة تقيس مستواك في مختلف المجالات" />
            <FeatureCard icon="🏆" title="نتائج فورية" description="احصل على نتائجك فوراً مع شرح مفصل لكل إجابة" />
            <FeatureCard icon="📊" title="تتبع التقدم" description="راقب تقدمك وحسن من أدائك مع الوقت" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
