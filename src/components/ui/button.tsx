import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({ asChild, className = "", children, ...props }: ButtonProps) {
  if (asChild) {
    // Permite usar el botón como wrapper de un Link u otro componente
    return React.cloneElement(children as React.ReactElement, {
      className: `inline-flex items-center justify-center px-4 py-2 rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${className}`,
      ...props,
    });
  }
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}