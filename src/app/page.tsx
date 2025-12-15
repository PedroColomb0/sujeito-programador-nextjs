import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero com o Sujeito Programador!'
}

export default function Home() {
  return (
    <div>
      <h1>Pagina Inicial</h1>
    </div>
  );
}
