import { ReactNode } from "react";

type HeaderProps = {  //This is a way to define the typed props 
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header >
      <img {...image} />
      {children}
    </header>
  );
}
