export type Language = 'en' | 'te' | 'ta' | 'hi';

export interface SurveyResponse {
  id: string;
  fullName: string;
  villageName: string;
  age: number;
  gender: string;
  phoneNumber: string;
  educationLevel: string;
  isSmartphoneUser: boolean;
  isInternetUser: boolean;
  hasDigitalAwareness: boolean;
  createdAt: string;
}

export interface QuizQuestion {
  id: number;
  chapterId?: string;
  level?: 1 | 2 | 3;
  category: 'smartphone' | 'internet' | 'payments' | 'security' | 'government' | 'communication';
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

export interface QuizChapter {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  color: string;
}

export interface UserProgress {
  surveyCompleted: boolean;
  completedModules: string[]; // module ids
  quizHighScores: { [quizId: string]: number };
  badges: string[]; // badge ids
}

export interface CompletedModule {
  moduleId: string;
  completedAt: string;
}

export interface Badge {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  iconName: string;
  color: string;
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: string;
  duration: string;
}

export interface FAQItem {
  question: Record<Language, string>;
  answer: Record<Language, string>;
  category: string;
}

export interface PosterItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'security' | 'payments' | 'basics' | 'smartphone' | 'communication' | 'government' | 'internet' | 'accessibility' | 'services' | 'agriculture';
  imageUrl: string;
}
