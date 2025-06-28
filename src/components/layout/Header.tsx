"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
// Si no existen estos componentes, reemplaza por un Drawer/Modal propio o elimina el menú móvil
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Music } from "lucide-react";
// Si no existe cn, reemplaza por una función simple o elimina
import { cn } from "@/lib/utils";
import React from "react";

const navLinks = [
	{ href: "/", label: "Inicio" },
	{ href: "/artistas", label: "Artistas" },
	{ href: "/cronograma", label: "Cronograma" },
	{ href: "/entradas", label: "Entradas" },
	{ href: "/contacto", label: "Contacto" },
];

export function Header() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = React.useState(false);

	// Si cn no existe, reemplaza por: (...classes: string[]) => classes.filter(Boolean).join(" ")
	const safeCn = cn ?? ((...classes: string[]) => classes.filter(Boolean).join(" "));

	const NavLink = ({ href, label }: { href: string; label: string }) => (
		<Link
			href={href}
			className={safeCn(
				"transition-colors hover:text-primary",
				pathname === href ? "text-primary font-bold" : "text-muted-foreground"
			)}
			// Solo cerrar el menú si está abierto (menú móvil)
			onClick={() => isOpen && setIsOpen(false)}
		>
			{label}
		</Link>
	);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<Link href="/" className="flex items-center gap-2" onClick={() => isOpen && setIsOpen(false)}>
					<Music className="h-6 w-6 text-primary" />
					<span className="font-headline font-bold text-lg">Santiago Suena</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
					{navLinks.map((link) => (
						<NavLink key={link.href} {...link} />
					))}
				</nav>
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button className="md:hidden" type="button">
							<Menu className="h-6 w-6" />
							<span className="sr-only">Abrir menú de navegación</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
							<div className="flex flex-col gap-6 p-6">
								<Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
									<Music className="h-6 w-6 text-primary" />
									<span className="font-headline font-bold text-lg">Santiago Suena</span>
								</Link>
								<nav className="flex flex-col gap-4 text-lg">
									{navLinks.map((link) => (
										<NavLink key={link.href} {...link} />
									))}
								</nav>
							</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
