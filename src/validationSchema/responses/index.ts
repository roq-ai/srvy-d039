import * as yup from 'yup';

export const responseValidationSchema = yup.object().shape({
  answer: yup.string().required(),
  question_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
