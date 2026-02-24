import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

type Props = {
  title: string;
  subtitle: string;
  type: 'success' | 'error';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & React.HTMLAttributes<HTMLDivElement>;
export default function FeedbackMessageModal({ title, subtitle, type, onClick }: Props) {
  return (
    <div role="alert" aria-haspopup="dialog" className="flex flex-col items-center justify-center bg-white fixed left-0 top-0 min-h-screen w-full px-4">
      <div className="flex flex-col items-center gap-5">
        <span className="bg-linear-to-r bg-green-600/40 shadow-green-400/20 size-22 rounded-full flex justify-center items-center focus-visible:ring-1 shadow-lg"><CheckCircle2 className="text-green-700 size-12"/></span>
        <p className="text-sm text-center text-gray-700 font-medium">
          Sua conta foi criada com sucesso!
          <br />
          Continue para cadastrar seus serviços
        </p>
      </div>
      <div className="mt-12 w-full">
       <Button 
        label="Continuar"
        variant="primary"
        type="button"
        onClick={onClick}
       />
      </div>
    </div>
  )
}