import "./globals.css";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CalendarDays, Contact, Music, Ticket } from "lucide-react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="container mx-auto px-4 py-12">
          <section className="text-center mb-16">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-4">
              Santiago Suena 2025
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              ¡Vibrá al ritmo del corazón de Argentina! El festival de música que une
              tradición y vanguardia en Santiago del Estero.
            </p>
          </section>

          <section className="mb-16">
            <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Music className="text-accent" /> Artistas</CardTitle>
                <CardDescription>Conocé a las estrellas que iluminarán nuestro escenario.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/artistas">Ver Line-Up <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><CalendarDays className="text-accent" /> Cronograma</CardTitle>
                <CardDescription>No te pierdas ni un minuto. Planificá tu día.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/cronograma">Ver Horarios <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Ticket className="text-accent" /> Entradas</CardTitle>
                <CardDescription>Asegurá tu lugar en el evento del año. ¡No te quedes afuera!</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/entradas">Comprar Entradas <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Contact className="text-accent" /> Contacto</CardTitle>
                <CardDescription>¿Tenés dudas? Encontrá toda la información que necesitás.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contacto">Contactanos <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
        {children}
      </body>
    </html>
  );
}
