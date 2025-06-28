import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="font-headline text-2xl font-bold text-primary">Santiago Suena</h3>
            <p className="text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Youtube" className="hover:text-primary transition-colors">
              <Youtube className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
