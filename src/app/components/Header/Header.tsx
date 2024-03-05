import React from 'react'
import avatarUsuario from './avatar.svg'
import bytebankLogo from './bytebank.svg'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex h-[76px] items-center justify-center bg-[#111111]">
      <div className="mx-auto flex w-[1199px] justify-between">
        <Image src={bytebankLogo} alt={'logo'} />
        <div className="flex w-[282px] items-center justify-center">
          <p className="mr-6 text-sm text-[#31b237]">Joana Fonseca Gomes</p>
          <Image
            className="size-10"
            src={avatarUsuario}
            alt="Ícone de um avatar de usuário"
          />
        </div>
      </div>
    </header>
  )
}
