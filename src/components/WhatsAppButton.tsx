import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  className?: string;
  size?: "default" | "large";
}

const WHATSAPP_LINK = "https://chat.whatsapp.com/SEU_LINK_AQUI"; // Substitua pelo seu link

const WhatsAppButton = ({ className = "", size = "default" }: WhatsAppButtonProps) => {
  const sizeClasses = size === "large" 
    ? "px-10 py-5 text-xl gap-4" 
    : "px-8 py-4 text-lg gap-3";

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${sizeClasses} ${className}`}
    >
      <MessageCircle className={size === "large" ? "w-7 h-7" : "w-6 h-6"} />
      <span>Entrar no Grupo VIP</span>
    </a>
  );
};

export default WhatsAppButton;
