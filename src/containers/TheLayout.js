import React from 'react'
import { TheContent, TheFooter, TheHeader, TheSideBar } from './index';

const TheLayout = () => {
    return (
        <>
          <TheSideBar/>
          <TheHeader />
          <TheContent/>
          <TheFooter/>
        </>
    )
}

export default TheLayout
