import { ReactNode } from "react";

export interface CardProps {
  className?: string;
  children?: ReactNode;
  backgroundColor?: string;

  onClick?: (params?: any) => void;
}
