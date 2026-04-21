export interface Job {
  id: number;
  role: string;
  company: string;
  location: string;
  salaryRange: string;
  type: 'Remoto' | 'Híbrido' | 'Presencial';
  logo: string; 
  tags: string[];
}