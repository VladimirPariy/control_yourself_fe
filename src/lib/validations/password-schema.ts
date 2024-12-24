import z from 'zod';

export const passwordSchema = z
  .string()
  .min(8, {message: 'Password must be at least 8 characters long'})
  .max(32, {message: 'Password must be at most 32 characters long'})
  .trim()
  .refine(pass => /[A-Z]/.test(pass), {
    message: 'Password must contain at least one uppercase letter',
  })
  .refine(pass => /[a-z]/.test(pass), {
    message: 'Password must contain at least one lowercase letter',
  })
  .refine(pass => /[0-9]/.test(pass), {
    message: 'Password must contain at least one number',
  })
  .refine(pass => /[^A-Za-z0-9]/.test(pass), {
    message: 'Password must contain at least one special character',
  })