'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../auth/styles.css';
import Image from 'next/image';
import { LuLoader } from 'react-icons/lu'
import { redirect } from 'next/navigation';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    function validateForm() {
        if(isLogin) {
            if(!formData.email || !formData.password) return false
        } else {
            if(formData.password !== formData.confirmPassword) return false
            if(!formData.email || !formData.password || !formData.confirmPassword || !formData.username) return false
        }

        return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!validateForm()) return 

        setIsLoading(true)
        try {
            if(isLogin) {
                await fetch('/api/Login', {
                    method: 'POST', 
                    body: JSON.stringify(formData)
                })
            } else {
                await fetch('/api/CreateUser', {
                    method: 'POST', 
                    body: JSON.stringify(formData)
                })
            }
        } catch (error) {
            alert(error)
        } finally {
            redirect('/')
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div className="auth-container">
            {/* Animated Background */}
            <div className="auth-background">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
            </div>

            {/* Auth Card */}
            <div className={`auth-card ${!isLogin ? 'register-mode' : ''}`}>
                {/* Header */}
                <div className="auth-header">
                    <Link href="/" className="back-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </Link>

                    <div className="logo-container">
                        <div className="logo-icon">
                            <Image src='/images/logo_keysafe.png' alt='logo' width={60} height={60} />
                        </div>
                        <h1 className="logo-text">KeySafe</h1>
                    </div>

                    <h2 className="auth-title">
                        {isLogin ? 'Bem-vindo de volta' : 'Criar nova conta'}
                    </h2>
                    <p className="auth-subtitle">
                        {isLogin
                            ? 'Entre para acessar suas senhas seguras'
                            : 'Comece a proteger suas senhas hoje'}
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="form-group slide-in">
                            <label htmlFor="name" className="form-label">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                Nome
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="João Silva"
                                required={!isLogin}
                            />
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="transparent"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="seu@email.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                            </svg>
                            Senha
                        </label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {!isLogin && (
                        <div className="form-group slide-in">
                            <label htmlFor="confirmPassword" className="form-label">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Confirmar senha
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="••••••••"
                                required={!isLogin}
                            />
                        </div>
                    )}

                    <button type="submit" className="submit-button" disabled={isLoading}>
                        {isLoading ?
                            <LuLoader width={22} className='animate-spin'/>
                            :
                            <>
                                <span>{isLogin ? 'Entrar' : 'Criar conta'}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </>
                        }
                    </button>
                </form>

                {/* Toggle Mode */}
                <div className="toggle-mode">
                    <p>
                        {isLogin ? 'Não tem uma conta?' : 'Já tem uma conta?'}
                        {' '}
                        <button type="button" onClick={toggleMode} className="toggle-button">
                            {isLogin ? 'Criar conta' : 'Entrar'}
                        </button>
                    </p>
                </div>


            </div>
        </div>
    );
}