import React from "react";
import MeuComponente from "@/components/part-sites/itens-hamb";
import { HeaderSection } from "@/components/part-sites/header";
import { Footer } from "@/components/part-sites/footer";
import { Drink } from "@/components/part-sites/drink";


export const Main = () =>{
  return(
    <div>
      <HeaderSection />
      <MeuComponente />
      <hr className="text-gray-300" />
      <Drink />
      <Footer />
    </div>
  )
}

export default Main;