import { z } from "zod";

export const registerChaterSchema = z.object({
  fullname: z.string()
    .min(3, "O nome deve conter pelo menos 3 caracteres")
    .max(100, "Nome muito longo"),
  
  email: z
    .email("E-mail inválido")
    .min(5, "O e-mail deve conter pelo menos 5 caracteres"),

  phone: z.string()
    .min(14, "Telefone inválido")
    .max(15, "Telefone inválido")
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Formato: (99) 99999-9999"),

  password: z.string()
    .min(1, 'Senha é obrigatória'),

  confirmPassword: z.string()
    .min(1, 'Confirme sua senha'),
  
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
})

export type RegisterChaterData = z.infer<typeof registerChaterSchema>;
