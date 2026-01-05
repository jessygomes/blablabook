/* eslint-disable react/no-unescaped-entities */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerSchema } from "@/lib/validator.schema";
import { registerAction } from "@/lib/actions/auth.action";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toast, useToast } from "@/components/Toast";

type RegisterFormData = z.infer<typeof registerSchema>;

interface PasswordCriteria {
  minLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast, showToast, hideToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  // Fonction pour vérifier les critères du mot de passe
  const checkPasswordCriteria = (password: string): PasswordCriteria => {
    return {
      minLength: password.length >= 12,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };
  };

  const passwordCriteria = checkPasswordCriteria(password);

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);

    try {
      const response = await registerAction(data);

      if (!response?.success) {
        showToast(
          response?.error ||
            "Une erreur est survenue lors de la création du compte.",
          "error"
        );
        return;
      }

      showToast("Compte créé avec succès !", "success");
      reset();
      setTimeout(() => {
        router.push("/mon-profil");
      }, 1500);
    } catch (error) {
      console.error("Erreur lors de la création du compte:", error);
      showToast(
        "Une erreur est survenue lors de la création du compte.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={hideToast}
        />
      )}
      <div className="max-w-md mx-auto bg-white">
        <h2 className="text-xl font-bold font-one text-center text-quater mb-4">
          Créer un compte
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Nom d'utilisateur */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-quater mb-1"
            >
              Nom d'utilisateur
            </label>
            <input
              {...register("username")}
              type="text"
              id="username"
              className={`w-full text-noir px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-quater ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Votre nom d'utilisateur"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-quater mb-1"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className={`text-noir w-full  px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-quater ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="votre.email@exemple.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Mot de passe */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-quater mb-1"
            >
              Mot de passe
            </label>
            <input
              {...register("password", {
                onChange: (e) => setPassword(e.target.value),
              })}
              type="password"
              id="password"
              className={`text-noir w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-quater ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Votre mot de passe"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirmation du mot de passe */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-quater mb-1"
            >
              Confirmer le mot de passe
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              id="confirmPassword"
              className={`text-noir w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-quater ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Confirmer votre mot de passe"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Indicateurs de validation du mot de passe */}
          {password && (
            <div className="bg-gray-50 p-3 rounded-md border">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Exigences du mot de passe :
              </p>
              <div className="grid grid-cols-1 gap-2 text-xs">
                <div className="flex items-center space-x-2">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      passwordCriteria.minLength ? "bg-green-500" : "bg-red-400"
                    }`}
                  ></span>
                  <span
                    className={`transition-colors ${
                      passwordCriteria.minLength
                        ? "text-green-700 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    Au moins 12 caractères
                  </span>
                  {passwordCriteria.minLength && (
                    <span className="text-green-500 text-xs">✓</span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      passwordCriteria.hasUppercase
                        ? "bg-green-500"
                        : "bg-red-400"
                    }`}
                  ></span>
                  <span
                    className={`transition-colors ${
                      passwordCriteria.hasUppercase
                        ? "text-green-700 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    Au moins une majuscule (A-Z)
                  </span>
                  {passwordCriteria.hasUppercase && (
                    <span className="text-green-500 text-xs">✓</span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      passwordCriteria.hasLowercase
                        ? "bg-green-500"
                        : "bg-red-400"
                    }`}
                  ></span>
                  <span
                    className={`transition-colors ${
                      passwordCriteria.hasLowercase
                        ? "text-green-700 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    Au moins une minuscule (a-z)
                  </span>
                  {passwordCriteria.hasLowercase && (
                    <span className="text-green-500 text-xs">✓</span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      passwordCriteria.hasNumber ? "bg-green-500" : "bg-red-400"
                    }`}
                  ></span>
                  <span
                    className={`transition-colors ${
                      passwordCriteria.hasNumber
                        ? "text-green-700 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    Au moins un chiffre (0-9)
                  </span>
                  {passwordCriteria.hasNumber && (
                    <span className="text-green-500 text-xs">✓</span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      passwordCriteria.hasSpecialChar
                        ? "bg-green-500"
                        : "bg-red-400"
                    }`}
                  ></span>
                  <span
                    className={`transition-colors ${
                      passwordCriteria.hasSpecialChar
                        ? "text-green-700 font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    Au moins un caractère spécial (!@#$...)
                  </span>
                  {passwordCriteria.hasSpecialChar && (
                    <span className="text-green-500 text-xs">✓</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Conditions d'utilisation */}
          <div>
            <div className="flex items-start">
              <input
                {...register("acceptTerms")}
                type="checkbox"
                id="acceptTerms"
                className={`mt-1 mr-2 h-4 w-4 text-quater focus:ring-quater border-gray-300 rounded ${
                  errors.acceptTerms ? "border-red-500" : ""
                }`}
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                J'accepte les{" "}
                <a
                  href="/conditions-utilisation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-quater hover:text-primary underline"
                >
                  conditions d'utilisation
                </a>{" "}
                et la{" "}
                <a
                  href="/politique-confidentialite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-quater hover:text-primary underline"
                >
                  politique de confidentialité
                </a>
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-red-500 text-sm mt-1">
                {errors.acceptTerms.message}
              </p>
            )}
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            disabled={isSubmitting || isLoading}
            className={`cursor-pointer w-full py-2 px-4 rounded-md font-medium transition-colors ${
              isSubmitting || isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-quater hover:bg-primary focus:ring-2 focus:ring-primary"
            } text-white`}
          >
            {isSubmitting ? "Création en cours..." : "Créer mon compte"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Vous avez déjà un compte ?{" "}
            <a
              href="/se-connecter"
              className="text-quater hover:text-primary font-medium"
            >
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
