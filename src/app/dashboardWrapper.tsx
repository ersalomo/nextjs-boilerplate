"use client";

import Scripts from "@/components/fe/inc/Scripts";
import StoreProvider from "./redux";
import React from "react";

import '/public/fe/dist/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css';
import '/public/fe/dist/assets/plugins/custom/datatables/datatables.bundle.css';
import '/public/fe/dist/assets/plugins/global/plugins.bundle.css';
import '/public/fe/dist/assets/css/style.bundle.css';

type DashboardProps = {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardProps) => {
    return (
        // TODO SET SIDEBAR AND OTHERS UI COMPONENTS
        <>
            <main>
                {children}
            </main>
            <Scripts />
        </>
    );
}


const DashboardWrapper = ({ children }: DashboardProps) => {
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