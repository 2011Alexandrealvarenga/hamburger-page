import React from 'react';
import imagem1 from '../../assets/img/hamb-1.png';
import imagem2 from '../../assets/img/hamb-2.png';
import imagem3 from '../../assets/img/hamb-3.png';

const MeuComponente: React.FC = () => {
  return (
    <div id="main">  
      <div className="container mx-auto text-center m-5 pt-5">
        <h2 className='font-bold text-2xl'>Conheça nosso meu</h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Itens */}
          <div className='flex p-2 m-2 rounded-sm'>
            <img 
            src={imagem1.src} 
            className='rounded-md w-28 h-28 hover:scale-110 hover:-rotate-1 rudation-300'
            />
            <div className='p-2  content-center'>
              <p>Pão levinho de fermentação natural da trigou, burder 160g, queijo prato e maionese da casa.</p>
              <div className='mt-3 flex justify-between rounded-sm'>
                <p className='font-bold'>Preço R$ 21,00</p>
                <button className="btn bg-green-700 text-white rounded-md p-2 cursor-pointer">Comprar</button>
              </div>
            </div>
          </div>
          {/* fim - Itens */}

          {/* Itens */}
          <div className='flex p-2 m-2 rounded-sm'>
            <img 
            src={imagem2.src} 
            className='rounded-md w-28 h-28 hover:scale-110 hover:-rotate-1 rudation-300'
            />
            <div className='p-2  content-center'>
              <p>Pão levinho de fermentação natural da trigou, burder 160g, queijo prato e maionese da casa.</p>
              <div className='mt-3 flex justify-between rounded-sm'>
                <p className='font-bold'>Preço R$ 20,00</p>
                <button className="btn bg-green-700 text-white rounded-md p-2 cursor-pointer">Comprar</button>
              </div>
            </div>
          </div>
          {/* fim - Itens */}

          {/* Itens */}
          <div className='flex p-2 m-2 rounded-sm'>
            <img 
            src={imagem3.src} 
            className='rounded-md w-28 h-28 hover:scale-110 hover:-rotate-1 rudation-300'
            />
            <div className='p-2  content-center'>
              <p>Pão levinho de fermentação natural da trigou, burder 160g, queijo prato e maionese da casa.</p>
              <div className='mt-3 flex justify-between rounded-sm'>
                <p className='font-bold'>Preço R$ 23,00</p>
                <button className="btn bg-green-700 text-white rounded-md p-2 cursor-pointer">Comprar</button>
              </div>
            </div>
          </div>
          {/* fim - Itens */}
        </div>
      </div>
    </div>
  );
};

export default MeuComponente;