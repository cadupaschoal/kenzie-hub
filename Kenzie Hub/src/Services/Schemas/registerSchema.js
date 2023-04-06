import { z } from 'zod';

export const RegisterSchema = z
  .object({
    name: z.string().min(1, 'O nome é obrigatório'),
    email: z
      .string()
      .min(1, 'O e-mail é obrigatório')
      .email('O email deve estar no formato adequado'),
    password: z
      .string()
      .min(8, 'A senha deve conter ao menos 8 caracteres')
      .regex(/(?=.*?[A-Z])/, 'A senha deve conter ao menos uma letra maiúscula')
      .regex(/(?=.*?[a-z])/, 'A senha deve conter ao menos uma letra minúscula')
      .regex(/(?=.*?[0-9])/, 'A senha deve conter pelo menos um número')
      .regex(
        /(?=.*?)[!@#$%^&*]/,
        'A senha deve conter ao menos um caractere especial'
      ),
    confirm: z.string().min(1, 'A confirmação de senha é obrigatória'),
    bio: z.string().min(1, 'A bio é obrigatória'),
    contact: z.string().min(1, 'O contato é obrigatório'),
    course_module: z.string().min(1, 'O módulo é obrigatório'),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: 'As senhas não correspondem, tente novamente',
    path: ['confirm'],
  });
