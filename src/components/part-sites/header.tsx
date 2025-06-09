import ImgTop from '../../assets/img/hamb-1.png';

export const HeaderSection = () =>{
  return(
    <header className="w-full h-[420px] bg-zinc-900 bg-center bg-cover bg-[url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/fa/cf/64/salao.jpg?w=600&h=400&s=1)] no-repeat"> 
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img 
          src={ImgTop.src} 
          className='w-32 h-32 rounded-full shadow-lg hover:scale-100 duration-200'
        />
        <h1 className="text-3xl mt-4 mb-2 font-bold text-white">Dev Burguer</h1>
        <p className='text-white bg-green-600 rounded-md p-2'>Rua dos Devs, 194 - São Paulo - SP</p>
      </div>
    </header>
  )
}