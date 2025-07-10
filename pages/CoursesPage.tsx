
import React from 'react';
import { COURSES } from '../constants';
import CourseCard from '../components/CourseCard';

const CoursesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-gold-accent mb-4">دوراتنا التعليمية</h1>
        <p className="text-lg text-light-gray max-w-2xl mx-auto">اختر الدورة المناسبة لك وابدأ رحلة التعلم</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
