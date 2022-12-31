import { Suspense } from "react"
import { AppBar } from "./AppBar/appBar"
import { Outlet } from "react-router-dom"

export const Layout = ()=>{
    return (
      <>
        <AppBar></AppBar>
        <Suspense fallback={null}>
            <Outlet/>
        </Suspense></>
    )
}