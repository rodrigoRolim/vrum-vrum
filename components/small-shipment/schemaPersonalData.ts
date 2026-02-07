import z from "zod";

export const transportRequestSchema = z.object({
  name: z.string().min(3, "Nome obrigatório"),
  phone: z
    .string()
    .min(10, "Telefone inválido")
    .refine(
      (value) => 
        /^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/.test(value),
      "Formato válido é (DD) 9XXX-XXXX"
    ),
  company: z.string().optional(),
  email: z
    .email({ error: "Email inválido"}),
  travelOption: z.string({ error: "Campo obrigatório"}).min(1, "Campo obrigatório")
})