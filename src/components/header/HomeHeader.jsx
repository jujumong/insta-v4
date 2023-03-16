import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline';

export default function HomeHeader() {
  return (
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
      {/* Middle */}
      <div className='relative mt-1'>
        <div className='absolute top-2 left-2'>
          <SearchIcon className='h-5 text-gray-500' />
        </div>
        <input
          type='text'
          placeholder='Search'
          className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'
        />
      </div>

      {/* Right */}
      <h1 className=''>Right sides</h1>
    </div>
  );
}
