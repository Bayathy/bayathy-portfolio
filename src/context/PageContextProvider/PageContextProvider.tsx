import { useState } from '@storybook/addons'
import React from 'react'
import { PageContext } from './pageContext'

type PageContextProvider = {
  children: React.ReactNode
}

const PageContextProvider: React.FC<PageContextProvider> = ({ children }) => {
  const [PageState, setPageState] = useState<boolean[]>([true, false, false])

  const Togglemenu = (id: number) => {
    setPageState(PageState.map((item, i) => (i === id ? true : false)))
  }

  return <PageContext.Provider value={{ page: PageState, setPage: Togglemenu }}>{children}</PageContext.Provider>
}

export default PageContextProvider
