import { QuestionInterface } from 'interfaces/question';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ResponseInterface {
  id?: string;
  answer: string;
  question_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  question?: QuestionInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ResponseGetQueryInterface extends GetQueryInterface {
  id?: string;
  answer?: string;
  question_id?: string;
  user_id?: string;
}
