
export interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  questions_count: number;
  difficulty: 'مبتدئ' | 'متوسط' | 'متقدم';
  category: string;
  icon: string;
  rating: number;
  students: number;
  is_free: boolean;
  questions: Question[];
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  activatedCourses: number[];
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  courseTitle: string;
}
