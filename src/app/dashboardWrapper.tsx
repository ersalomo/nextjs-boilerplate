"use client";

import StoreProvider from "./redux";
import React from "react";

type DashboardProps = {
    children: React.ReactNode;
}

const DashboardLayout = ({children}: DashboardProps) => {
    return (
        // TODO SET SIDEBAR AND OTHERS UI COMPONENTS
        <>
            <main>
                {children}
            </main>
        </>
    );
}


const DashboardWrapper = ({children}: DashboardProps) => {
    return (
        <>
            <StoreProvider>
                <DashboardLayout>
                    {children}
                </DashboardLayout>
            </StoreProvider>
        </>
    )
}

export default DashboardWrapper;