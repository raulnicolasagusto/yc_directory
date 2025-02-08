import React from 'react'
import Link from 'next/link'
import { X } from 'lucide-react';

const SearchFormReset = () => {

    const reset = () => {
        const form = document.querySelector('form') as HTMLFormElement;
        
        if (form) form.reset();
     }   

  return (
    
    

        <button className="" type="reset" onClick={reset}>
            <Link href="/" className="search-btn text-white font-bold">
            <X className="size-5"/>
            </Link>       
        </button>
    
  )
}

export default SearchFormReset