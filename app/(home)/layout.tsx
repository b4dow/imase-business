import { Footer, Header } from "@/components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
