"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, CreditCard, Ticket, User, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const formSchema = z.object({
  fullName: z.string().min(3, "El nombre debe tener al menos 3 caracteres."),
  email: z.string().email("Por favor, introduce un email válido."),
  creditCard: z
    .string()
    .regex(
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
      "Número de tarjeta inválido."
    ),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Fecha debe ser MM/AA."),
  cvc: z
    .string()
    .min(3, "CVC debe tener 3 dígitos.")
    .max(4, "CVC debe tener 4 dígitos como máximo."),
  dni: z
    .string()
    .regex(/^\d{7,8}$/, "DNI debe tener entre 7 y 8 dígitos numéricos."),
});

export default function TicketForm() {
  const { toast } = useToast();
  const [showSuccessDialog, setShowSuccessDialog] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      creditCard: "",
      expiryDate: "",
      cvc: "",
      dni: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Simulando compra con:", values);
    setShowSuccessDialog(true);
    form.reset();
  }

  const getFieldStateClass = (fieldName: keyof z.infer<typeof formSchema>) => {
    const fieldState = form.getFieldState(fieldName);
    if (!fieldState.isTouched) return "";
    return fieldState.invalid
      ? "border-destructive focus-visible:ring-destructive"
      : "border-green-500 focus-visible:ring-green-500";
  };

  const renderIcon = (fieldName: keyof z.infer<typeof formSchema>) => {
    const fieldState = form.getFieldState(fieldName);
    if (!fieldState.isTouched) return null;
    return fieldState.invalid ? (
      <XCircle className="absolute right-3 top-2.5 h-5 w-5 text-destructive" />
    ) : (
      <CheckCircle className="absolute right-3 top-2.5 h-5 w-5 text-green-500" />
    );
  };

  return (
    <>
      <Card className="border-2 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Ticket className="text-primary" /> Entrada General
          </CardTitle>
          <CardDescription>
            Precio: $25,000 ARS. Acceso a todos los escenarios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <h3 className="font-headline text-xl text-primary flex items-center gap-2">
                <User /> Datos Personales
              </h3>

              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre Completo</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="Ej: Juan Pérez"
                          {...field}
                          className={cn(
                            "pr-10",
                            getFieldStateClass("fullName")
                          )}
                        />
                      </FormControl>
                      {renderIcon("fullName")}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="juan.perez@email.com"
                          {...field}
                          className={cn("pr-10", getFieldStateClass("email"))}
                        />
                      </FormControl>
                      {renderIcon("email")}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dni"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>DNI</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="Su número de DNI sin puntos"
                          {...field}
                          className={cn("pr-10", getFieldStateClass("dni"))}
                        />
                      </FormControl>
                      {renderIcon("dni")}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <h3 className="font-headline text-xl text-primary flex items-center gap-2 pt-4">
                <CreditCard /> Datos de Pago
              </h3>

              <FormField
                control={form.control}
                name="creditCard"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de Tarjeta</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="**** **** **** ****"
                          {...field}
                          className={cn(
                            "pr-10",
                            getFieldStateClass("creditCard")
                          )}
                        />
                      </FormControl>
                      {renderIcon("creditCard")}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-6">
                <FormField
                  control={form.control}
                  name="expiryDate"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Vencimiento (MM/AA)</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            placeholder="MM/AA"
                            {...field}
                            className={cn(
                              "pr-10",
                              getFieldStateClass("expiryDate")
                            )}
                          />
                        </FormControl>
                        {renderIcon("expiryDate")}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvc"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>CVC</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            placeholder="***"
                            {...field}
                            className={cn("pr-10", getFieldStateClass("cvc"))}
                          />
                        </FormControl>
                        {renderIcon("cvc")}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            onClick={form.handleSubmit(onSubmit)}
            disabled={!form.formState.isValid}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
          >
            Comprar
          </Button>
        </CardFooter>
      </Card>
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline text-2xl text-green-600 flex items-center gap-2">
              <CheckCircle /> ¡Compra Exitosa!
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tu entrada ha sido enviada a tu correo electrónico. ¡Gracias por
              ser parte de Santiago Suena! Nos vemos en el festival.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setShowSuccessDialog(false)}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              ¡Genial!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
