import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getBusinessData } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { data: business } = useQuery({
    queryKey: ['business'],
    queryFn: getBusinessData,
    retry: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the message to a backend
    window.location.href = `tel:${business?.basic_info.phone}`;
    setMessage('');
  };

  if (!isOpen) {
    return (
      <Button
        className="fixed bottom-4 right-4 rounded-full w-16 h-16 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 shadow-xl">
      <div className="p-4 border-b flex justify-between items-center bg-primary text-primary-foreground">
        <h3 className="font-semibold">Chat with {business?.basic_info.name}</h3>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-primary-foreground hover:text-primary-foreground/90"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">
          Need assistance? Leave your message and we'll call you right back!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full"
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </Card>
  );
}
