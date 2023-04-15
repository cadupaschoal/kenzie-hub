import { z } from 'zod';

export const editModalSchema = z.object({
  status: z.string().nonempty('O status é obrigatório'),
});
