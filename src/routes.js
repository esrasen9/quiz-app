import Home from './components/pages/Home';
import Quiz from './components/pages/Quiz';
import QuizResult from './components/pages/QuizResult';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/quiz',
    component: Quiz,
  },
  {
    path: '/result',
    component: QuizResult,
  },
];
