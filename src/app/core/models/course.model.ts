export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
}