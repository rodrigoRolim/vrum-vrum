"use client";

import Button from "@/components/Button";
import FeedbackMessageModal from "@/components/FeedbackMessageModal";
import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";
import InputPhone from "@/components/InputPhone";
import InputText from "@/components/InputText";
import PasswordStrength from "@/components/PasswordStrength";
import { RegisterChaterData, registerChaterSchema } from "@/schemas/registerChaterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Smartphone, User, UserPlus, Van } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUpChater() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<RegisterChaterData>({
    resolver: zodResolver(registerChaterSchema),
    mode: "onChange"
  })

  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false)
  
  const fullname = watch("fullname", "")
  const email = watch("email", "")
  const phone = watch("phone", "")
  const password = watch("password", "")
  const confirmPassword = watch("confirmPassword", "")
  
  const creatingAccountLabel = "Criando conta..."
  const createAccountLabel = "Criar conta"

  async function onSubmit(data: RegisterChaterData) {
    console.log(fullname, email, phone, password, confirmPassword)
    await new Promise((resolve) => setTimeout(resolve, 2_000))
    setIsFeedbackModalOpen(true)
  }
  function closeFeedbackModal() {
    setIsFeedbackModalOpen(false)
  }
  return (
    <div className="max-w-md w-full">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-orange-500/25 px-6 py-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
            <Van className="text-white size-5"/>
          </div>
          <h2 className="text-xl font-bold text-white">Cadastro de fretista</h2>
          <p className="text-blue-100 text-sm mt-1">Comece a anunciar seus veículos</p>
        </div>
        <div className="p-6">
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <InputText
              {...register("fullname", { required: true })}
              label="Nome completo"
              icon={User}
              placeholder="Seu nome completo"
              error={errors.fullname}
            />
            <InputEmail
              {...register("email")}
              label="E-mail"
              icon={Mail}
              placeholder="seu@email.com"
              error={errors.email}
            />
            <InputPhone
              {...register("phone")}
              label="Whatsapp"
              icon={Smartphone}
              placeholder="Ex: (99) 99999-9999"
              error={errors.phone}
            />
            <InputPassword
              {...register("password")}
              label="Senha"
              placeholder="Digite uma senha forte"
              error={errors.password}
            />
            <InputPassword
              {...register("confirmPassword")}
              label="Confirmar senha"
              placeholder="Confirme sua senha"
              error={errors.confirmPassword}
            />
            <PasswordStrength 
              className="mb-8"
              password={password}
            />
            <Button
              type="submit"
              label={isSubmitting ? creatingAccountLabel : createAccountLabel}
              icon={UserPlus}
              loading={isSubmitting}
            />
          </form>
        </div>
      </div>
      {isFeedbackModalOpen && 
        <FeedbackMessageModal 
          title="Conta criada com sucesso!"
          subtitle="Continue para cadastrar seus serviços"
          type="success"
          onClick={closeFeedbackModal}
        />
      }
    </div>
  )
}
