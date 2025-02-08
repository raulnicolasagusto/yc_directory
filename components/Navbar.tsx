"use client"; // Componente del Cliente

import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const { data: session } = useSession(); // Obtener sesión en el cliente

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center text-black'>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={200} height={80} />
        </Link>
        <div className='flex items-center gap-5'>
          {session?.user ? (
            <>
              <Link href="/startup/create">Create</Link>
              <button onClick={() => signOut()}>Sign Out</button>
            </>
          ) : (
            <button onClick={() => signIn("github")}>Sign In</button>
          )}
          <Link href={`/user/${session?.user.id}`}>
            <span>{session?.user.name}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
