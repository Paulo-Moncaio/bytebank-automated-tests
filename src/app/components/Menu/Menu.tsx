const listaMenu = [
  'Inicial',
  'Transferências',
  'Investimentos',
  'Outros serviços',
]

export default function Menu() {
  return (
    <nav className="h-full w-[180px] list-image-none rounded-lg bg-[#f7f7f7] p-6 shadow-lg">
      {listaMenu.map((item, index) => {
        return (
          <div key={index} className="text-center">
            <a
              href="/"
              className="cursor-pointer font-semibold text-[#111111] no-underline hover:font-semibold hover:text-black"
            >
              {item}
            </a>
            {index !== listaMenu.length - 1 && (
              <div className="mx-auto my-4 h-[1px] w-[90%] bg-[#111111]" />
            )}
          </div>
        )
      })}
    </nav>
  )
}
