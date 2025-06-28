import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, RadioTower, Guitar } from "lucide-react";

const schedule = {
  "Escenario Principal 'Cacuy'": [
    { time: "16:00", artist: "Apertura de Puertas" },
    { time: "17:30", artist: "Los del Fuego" },
    { time: "19:00", artist: "Miranda!" },
    { time: "20:45", artist: "Divididos" },
    { time: "22:30", artist: "Chaqueño Palavecino" },
  ],
  "Escenario Alternativo 'Telesita'": [
    { time: "18:15", artist: "DJ Set Local" },
    { time: "20:00", artist: "Babasónicos" },
    { time: "21:45", artist: "La Delio Valdez" },
    { time: "23:45", artist: "Cierre Sorpresa" },
  ],
};

export default function CronogramaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary">
          Cronograma del Festival
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
          ¡Organizá tu día! Estos son los horarios para que no te pierdas nada.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {Object.entries(schedule).map(([stage, events]) => (
          <div key={stage}>
            <h2 className="font-headline text-3xl font-bold text-primary mb-6 flex items-center gap-3">
              <RadioTower className="text-accent" /> {stage}
            </h2>
            <div className="relative border-l-2 border-primary/50 pl-6 space-y-8">
              {events.map((event, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[35px] top-1.5 h-4 w-4 rounded-full bg-accent border-4 border-background" />
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center justify-between">
                        <span className="flex items-center gap-2 font-body font-bold">
                          <Clock className="w-5 h-5 text-muted-foreground" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-2 font-headline text-primary">
                          <Guitar className="w-5 h-5" />
                          {event.artist}
                        </span>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
