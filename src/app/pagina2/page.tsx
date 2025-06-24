'use client'


import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page2() {
    const router = useRouter();
    useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/pagina3'); // ✅ Redireciona para a Home após 5 segundos
    }, 5000);

    return () => clearTimeout(timer); // ✅ Limpa o timer se o componente for desmontado
    }, [router]);
    return (
        <div className="flex justify-center items-center select-none overflow-hidden h-screen bg-black">
            <img
                className="h-screen fade-in"
                src="cartaz.png"
                alt="cartaz"
                />
                </div>
            );
}
