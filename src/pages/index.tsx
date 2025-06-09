import React from "react";
import MeuComponente from "@/components/part-sites/itens-hamb";
import { HeaderSection } from "@/components/part-sites/header";
import { Footer } from "@/components/part-sites/footer";


export const Main = () =>{
  return(
    <div>
      <HeaderSection />
      <MeuComponente />
      <Footer />
    </div>
  )
}

export default Main;