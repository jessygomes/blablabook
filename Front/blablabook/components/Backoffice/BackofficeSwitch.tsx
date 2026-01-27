'use client';
import { useState } from "react";
import BackofficeUsersTable from "./BackofficeUsersTable";
import { UserCookie } from "@/lib/auth";

interface BackofficeSwitchProps {
    users: UserCookie[];
}

export default function BackofficeSwitch({users}: BackofficeSwitchProps) {


    const [activeTab, setActiveTab] = useState<'users' | 'reportedComments'>('users');

    return (
        <>
            <div className="flex">
                <button type="button" 
                    className={activeTab === 'users' ? "button-switch-backoffice-active" : "button-switch-backoffice-inactive"}
                    onClick={() => {setActiveTab('users')}}>Utilisateurs</button>
                <button type="button" 
                    className={activeTab === 'reportedComments' ? "button-switch-backoffice-active" : "button-switch-backoffice-inactive"} 
                    onClick={() => {setActiveTab('reportedComments')}}>Critiques signalées</button>
            </div>
            {activeTab === 'users' && (
                <input className="text-black bg-amber-400" type="text" value="coucou"/>
            )}
            {activeTab === 'users' && <BackofficeUsersTable users={users}/>}
        </>
    )
}