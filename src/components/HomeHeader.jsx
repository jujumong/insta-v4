import Image from 'next/image';

export default function HomeHeader() {
  return (
    <div>
      <div className='flex items-center justify-between max-w-6xl'>
        {/* Left */}
        <div className='cursor-pointer ml-2 mt-2 h-24 w-24 relative hidden lg:inline-grid'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png'
            alt=''
            width='100'
            height='100'
          />
        </div>
        <div className='cursor-pointer ml-2 mt-2 h-24 w-10 relative lg:hidden'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png'
            alt=''
            width='100'
            height='100'
          />
        </div>
        <h1 className=''>Right sides</h1>

        {/* Middle */}
        {/* Right */}
      </div>
    </div>
  );
}
