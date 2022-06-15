import { createContext } from "react"

type PageContext = {
    page : boolean[]
    setPage : () => void
}

const defalstPage : PageContext ={
    page : [true,false,false],
    setPage : () => void
}

export const PageContext = createContext<PageContext>(defalstPage)