import TicketForm from "@/components/TicketForm";
import { Ticket } from "lucide-react";

export default function EntradasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary">
          Comprar Entradas
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
          ¡No te quedes afuera del festival del año! Asegurá tu lugar ahora mismo.
        </p>
      </section>

      <div className="max-w-2xl mx-auto">
        <TicketForm />
      </div>
    </div>
  );
}
