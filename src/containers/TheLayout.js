import React from 'react'
import TheContent from './TheContent'
import TheFooter from './TheFooter'
import TheHeader from './TheHeader'
import TheSideBar from './TheSideBar'

const TheLayout = () => {
    return (
        <div className="">
          <TheSideBar/>
          <TheHeader />
          <TheContent/>
          <TheFooter/>
        </div>
    )
}

export default TheLayout
