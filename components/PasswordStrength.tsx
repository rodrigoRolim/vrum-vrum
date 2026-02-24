"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useMemo } from "react";

type Props = {
  password: string;
} & React.HTMLAttributes<HTMLDivElement>;
const PASSWORD_CRITERIAS = [
  { id: 0, label: "Pelo menos 8 caracteres", regex: /^.{8,}$/, passed: false },
  { id: 1, label: "Letra maiúscula", regex: /[A-Z]/, passed: false },
  { id: 2, label: "Letra minúscula", regex: /[a-z]/, passed: false },
  { id: 3, label: "Número", regex: /\d/, passed: false },
  { id: 4, label: "Caractere especial", regex: /[!@#$%^&*(),.?":{}|<>]/, passed: false },
];
export default function PasswordStrength({ password, ...props }: Props) {
  const checkedCriterias = useMemo(() => {
    return PASSWORD_CRITERIAS.map(criteria => ({
      ...criteria,
      passed: criteria.regex.test(password)
    }))
  }, [password])
  return (
    <div className="max-full" {...props}> 
      <p className="text-sm font-medium mb-2">Força da senha:</p>
      <ul className="text-xs space-y-1 text-gray-600">
        {checkedCriterias.map((criteria) => (
          <li key={criteria.id} className="text-gray-600 flex justify-between items-center">
            {criteria.label} 
            { criteria.passed
              ? <CheckCircle2 className="text-green-600 size-4"/> 
              : <XCircle className="text-red-600 size-4"/>}
          </li>
        ))}
      </ul>
    </div>
  )
}