import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardHeaderProps {
  children: ReactNode;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

interface CardDescriptionProps {
  children: ReactNode;
}

interface CardContentProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => (
  <div className="p-4 border-b border-gray-200">
    {children}
  </div>
);

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
);

export const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => (
  <p className="text-gray-600">
    {children}
  </p>
);

export const CardContent: React.FC<CardContentProps> = ({ children }) => (
  <div className="p-4">
    {children}
  </div>
);
