import Menus from "../Nav/Menus/Menus"

export interface FooterProps {
    id: string
}

export default function Footer() {
  return (
    <div>
        <div className="bg-footer h-[30vh] flex gap-60">
            <div className="flex items-center pl-32">
                <h1 className="text-9xl text-white font-bold">ProFreela</h1>
            </div>

            <div className="flex flex-col justify-center">
                <Menus/>
            </div>
        </div>

        <div className="flex items-center justify-center h-[5vh]">
            <p>© ProFreela Enterprise 2024 - anoAtual</p>
        </div>
      
    </div>
  )
}
