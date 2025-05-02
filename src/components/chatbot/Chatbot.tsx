
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageSquare, Send, X } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Bonjour ! Comment puis-je vous aider aujourd'hui ?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock responses from the chatbot
  const botResponses = [
    "Comment puis-je vous aider concernant votre facture ?",
    "Pour signaler une coupure de courant, veuillez préciser votre quartier et la durée de la coupure.",
    "Vous pouvez contacter notre service client au 30 33 30 30.",
    "Nos agences sont ouvertes du lundi au vendredi de 8h à 17h et le samedi de 9h à 13h.",
    "Pour toute réclamation, veuillez nous fournir votre numéro de contrat.",
    "Je vous remercie pour votre patience. Un technicien va examiner votre demande dans les plus brefs délais.",
    "La SENELEC s'engage à améliorer constamment la qualité de ses services.",
  ];

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");

    // Simulate bot typing
    setTimeout(() => {
      // Select a random response
      const randomIndex = Math.floor(Math.random() * botResponses.length);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[randomIndex],
        isBot: true,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot toggle button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-primary shadow-lg hover:bg-primary/90"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>

      {/* Chatbot dialog */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 z-50 flex flex-col shadow-xl border border-primary/20 overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <h3 className="font-semibold">Assistant SENELEC</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-primary/80">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-3 bg-secondary/5">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[80%] mb-2 ${
                  message.isBot
                    ? "bg-primary/10 text-foreground rounded-tr-lg rounded-br-lg rounded-bl-lg ml-0 mr-auto"
                    : "bg-secondary/10 text-foreground rounded-tl-lg rounded-bl-lg rounded-br-lg ml-auto mr-0"
                } p-3 break-words`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-3 border-t border-primary/10 bg-background">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 border-primary/20 focus-visible:ring-primary"
              />
              <Button onClick={handleSendMessage} className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
