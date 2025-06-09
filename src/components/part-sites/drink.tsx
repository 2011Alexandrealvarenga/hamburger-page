import Imgdrink1 from '../../assets/img/refri-1.png';
import Imgdrink2 from '../../assets/img/refri-2.png';

export const Drink = () =>{
  return(
    <div id="bebidas" className='mb-30'>
      <div className="container mx-auto text-center m-5 pt-5">
        <h2 className='font-bold text-2xl'>Bebidas</h2>
      </div>    
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Itens */}
            <div className='flex p-2 m-2 rounded-sm '>
              <img 
              src={Imgdrink1.src} 
              className='rounded-md w-28 h-28 hover:scale-110 hover:-rotate-1 rudation-300'
              />
              <div className='p-2 w-full'>
                <p>Coca-cola</p>
                <div className='mt-3 flex justify-between rounded-sm'>
                  <p className='font-bold'>Preço R$ 21,00</p>
                  <button className="btn bg-green-700 text-white rounded-md p-2 cursor-pointer">Comprar</button>
                </div>
              </div>
            </div>
            {/* fim - Itens */}
              {/* Itens */}
            <div className='flex p-2 m-2 rounded-sm '>
              <img 
              src={Imgdrink2.src} 
              className='rounded-md w-28 h-28 hover:scale-110 hover:-rotate-1 rudation-300'
              />
              <div className='p-2 w-full'>
                <p>Guaraná</p>
                <div className='mt-3 flex justify-between rounded-sm'>
                  <p className='font-bold'>R$ 6,00</p>
                  <button className="btn bg-green-700 text-white rounded-md p-2 cursor-pointer">Comprar</button>
                </div>
              </div>
            </div>
            {/* fim - Itens */}
        </div>
      </div>
    </div>
  )
}