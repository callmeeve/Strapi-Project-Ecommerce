import React from 'react'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email: e.target.email.value,
            password: e.target.password.value,
        });
        if (result.ok) {
            router.replace('/admin');
            return;
        }
        alert('Hayo cek en seng bener');
    };
    return (
        <>
            <section className="mt-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="/login.svg" className="img-fluid" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-5">
                            <form onSubmit={onSubmit}>
                                {/* Email input */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="email" name="email" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                                </div>
                                {/* Password input */}
                                <div className="form-outline mb-3">
                                    <input type="password" id="password" name="password" className="form-control form-control-lg" placeholder="Enter password" />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    {/* Checkbox */}
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="" className="text-body" style={{textDecoration: "none"}}>Forgot password?</a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', backgroundColor: '#fd576c', color: '#fff' }}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
