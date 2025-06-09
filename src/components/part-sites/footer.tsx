import ImgCart from '../../assets/img/carrinho.png';
export const Footer = () =>{
  return(
    <footer className='bg-red-600 p-5 fixed bottom-0 z-40 w-full'>
      <div className="conteiner mx-auto flex justify-center">
        <p className='text-white'>(1) Veja seu carrinho </p>
        <img 
          src={ImgCart.src}
          className='ml-2 w-5'/>
      </div>
    </footer>
  )
}