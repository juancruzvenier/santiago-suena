import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const artists = [
  {
    name: "Los del Fuego",
    description: "Referentes de la cumbia santafesina, traerán su ritmo contagioso para hacer bailar a todos.",
    image: "https://placehold.co/400x400.png",
    aiHint: "band music",
  },
  {
    name: "Chaqueño Palavecino",
    description: "Un ícono del folklore argentino que promete una noche llena de tradición y sentimiento.",
    image: "https://placehold.co/400x400.png",
    aiHint: "folk singer",
  },
  {
    name: "Divididos",
    description: "La aplanadora del rock llega a Santiago con su power trío inconfundible y sus clásicos eternos.",
    image: "https://placehold.co/400x400.png",
    aiHint: "rock band",
  },
  {
    name: "Miranda!",
    description: "El dúo pop más glamoroso de Argentina, listo para llenar el festival de color y electropop.",
    image: "https://placehold.co/400x400.png",
    aiHint: "pop duo",
  },
  {
    name: "La Delio Valdez",
    description: "Una orquesta de cumbia cooperativa que fusiona ritmos latinos en un show potente y festivo.",
    image: "https://placehold.co/400x400.png",
    aiHint: "orchestra cumbia",
  },
  {
    name: "Babasónicos",
    description: "La banda que redefinió el rock alternativo en Latinoamérica con su estilo único y provocador.",
    image: "https://placehold.co/400x400.png",
    aiHint: "alternative rock",
  },
];

export default function ArtistasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary">
          Line-Up Estelar
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
          Estos son los artistas que harán historia en Santiago del Estero.
        </p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist) => (
          <Card key={artist.name} className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-64 w-full">
              <Image
                src={artist.image}
                alt={`Foto de ${artist.name}`}
                data-ai-hint={artist.aiHint}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">{artist.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{artist.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
