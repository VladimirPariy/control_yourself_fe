import z from 'zod';
import {passwordSchema} from '@lib/validations/password-schema';

export const loginSchema = z.object({
  email: z.string().email(),
  password: passwordSchema
});