'use client'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/yt-icon.png'
import user from '../../../public/assets/user-icon.png'
import lupa from '../../../public/assets/lupa.png'
import Link from 'next/link'
const Header :FC= () => {
  const [search, setSearch] = useState<string>(sessionStorage.getItem('searchQuery') || '')
  useEffect(()=>{
    sessionStorage.setItem('searchQuery', search)
  }, [search])

    return (
        <header className={`py-3 px-5 justify-center items-center mx-auto text-white text-[15px]`}>
            <nav className={`flex justify-between items-center`}>
                <Link href={`/`} className={`flex items-center `}>
                    <Image className={`logo`} src={logo} priority={true} alt={`youtube icon`} width={40} height={30}/>
                    <span className={`text-lg font-semibold`}>YouTube</span>
                </Link>
                <div className={`max-w-screen-md flex justify-center items-center `}>
                  <input
                    type='text'
                    placeholder="Введите запрос"
                    value={search}
                    onChange={e=> setSearch(e.target.value)}
                    className={`bg-transparent rounded-l-3xl border-2 border-[#212020]  px-2 py-1 text-[20px] `}
                  />
                  <Link href={`/search/${search}`} type={`button`} onClick={()=>{}} className={`bg-[#212020] text-[20px] px-4 py-2.5 rounded-r-3xl `}  >
                    <Image src={lupa} alt={`lupa`} priority={true} width={24} height={24} />
                  </Link>
                </div>
                <div>
                  <button className={`flex border border-gray-500 hover:bg-blue-800/[.60] px-2 py-1.5 rounded-3xl z-1 text-blue-500 font-bold  `}>
                   <Image src={user} alt={`user`} priority={true} width={25} height={33} className={`pr-1 z-10`} /> Войти
                  </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;