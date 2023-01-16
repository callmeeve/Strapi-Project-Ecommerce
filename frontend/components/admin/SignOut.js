import React from 'react'
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Login from './Login';

export default function SignOut() {
    const { data: session } = useSession();

    useEffect(() => {
        if (session == null) return;
        console.log('session.jwt', session.jwt);
    }, [session]);
    return (
        <>
            {session ? (
                // <div className="row">
                //     <div className="col-12 col-md-12 p-5 p-lg-6 text-end">
                //         <button className="btn btn-dark" onClick={signOut}>Sign out</button>
                //     </div>
                // </div>
                <>
                    <a href="#" onClick={signOut}>
                        <i className="bx bx-log-out" />
                        <span className="link_name">Log Out</span>
                    </a>
                </>
            ) : (
                <Login />
            )}
        </>
    )
}
