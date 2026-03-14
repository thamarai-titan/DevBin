import { Menu } from "lucide-react"


export const Navbar = () => {
    return (
        <nav className="w-full p-10 z-50 top-0 fixed"> 
            <div className="max-w-7xl mx-auto rounded-md border border-black w-40 p-3 flex justify-between items-center shadow-(--shadow-card)">
                <div className="text-md font-bold">
                    DevBin.
                </div>
                <div>
                    <Menu className="w-5"/>
                </div>
            </div>
        </nav>
    )
}