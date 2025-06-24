'use client'
import Link from 'next/link';
import { useCallback } from 'react'; //Para música
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';



export default function Home() {



  return(
    <div>
      <Link href={'/pagina1'}>
      <button>PLAY</button>
      </Link>
      
    </div>

  )
}
