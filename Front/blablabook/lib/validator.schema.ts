import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères")
      .max(20, "Le nom d'utilisateur ne peut pas dépasser 20 caractères")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Le nom d'utilisateur ne peut contenir que des lettres, chiffres et underscores"
      ),
    email: z.string().email("Veuillez entrer une adresse email valide"),
    password: z
      .string()
      .min(12, "Le mot de passe doit contenir au moins 12 caractères")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/,
        "Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial"
      ),
    confirmPassword: z.string(),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "Vous devez accepter les conditions d'utilisation",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
  password: z.string().min(1, "Le mot de passe est obligatoire"),
});
