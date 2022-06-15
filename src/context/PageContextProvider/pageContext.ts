import { createContext, useContext } from "react"

type PageContext = {
    page : boolean[]
    setPage : (id : number) => void
}

const defalstPage : PageContext ={
    page : [true,false,false],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setPage : () => {}
}

export const PageContext = createContext<PageContext>(defalstPage)
export const usePageState = () =>useContext(PageContext)