import { ResponseInterface } from 'interfaces/response';
import { SurveyInterface } from 'interfaces/survey';
import { GetQueryInterface } from 'interfaces';

export interface QuestionInterface {
  id?: string;
  text: string;
  type: string;
  survey_id: string;
  created_at?: any;
  updated_at?: any;
  response?: ResponseInterface[];
  survey?: SurveyInterface;
  _count?: {
    response?: number;
  };
}

export interface QuestionGetQueryInterface extends GetQueryInterface {
  id?: string;
  text?: string;
  type?: string;
  survey_id?: string;
}
