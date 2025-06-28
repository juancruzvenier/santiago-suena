import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, ShoppingCart, Users } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary">
          Contacto
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
          Estamos aquí para ayudarte. Encontrá toda la información que necesitás.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-3"><Users className="text-accent" /> Canales de Comunicación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              <p className="flex items-center gap-3"><Mail className="text-primary w-6 h-6" /> <a href="mailto:info@santiagosuena.com" className="hover:underline">info@santiagosuena.com</a></p>
              <p className="flex items-center gap-3"><Phone className="text-primary w-6 h-6" /> (385) 450-1234</p>
              <p className="text-sm text-muted-foreground">Horario de atención telefónica: Lunes a Viernes de 9 a 18 hs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-3"><ShoppingCart className="text-accent" /> Puntos de Venta Físicos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-lg">
              <p><strong className="text-primary">Santiago Capital:</strong> Peatonal Tucumán 123</p>
              <p><strong className="text-primary">La Banda:</strong> Av. Besares 456</p>
              <p><strong className="text-primary">Termas de Río Hondo:</strong> Rivadavia 789 (Oficina de Turismo)</p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
            <Card>
                <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-3"><MapPin className="text-accent" /> Ubicación del Festival</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border-2 border-primary/20">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56542.47920368944!2d-64.2950587413696!3d-27.783637651081347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b5210747432b1%3A0x7733458348b52f36!2sSantiago%20del%20Estero!5e0!3m2!1ses-419!2sar!4v1689286469731!5m2!1ses-419!2sar"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    </div>
                    <p className="mt-4 text-center text-muted-foreground">Predio del Festival, Santiago del Estero, Argentina.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
