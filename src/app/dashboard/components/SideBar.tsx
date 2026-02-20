"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  RiShieldKeyholeLine,
  RiAddLine,
  RiFolderLine,
  RiFolderOpenLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiLogoutBoxLine,
} from "react-icons/ri";
import "../css/SideBar.css";
import Image from "next/image";
import { LuLoader } from "react-icons/lu";

interface SidebarProps {
  user: { email: string; username: string };
  folders: any[];
}

export default function SideBar({ user, folders }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setIsLoading] = useState(false);
  const router = useRouter();
  const [activeFolder, setActiveFolder] = useState<string | null>("general");

  const initials = user.username
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleLogout = async () => {
    setIsLoading(true);
    try {      
      const response = await fetch("/api/Logout", { method: "POST" });
      if (response.ok) {
        router.refresh(); 
        router.push("/");
      }
    } catch (error) {
      console.error("Erro ao sair:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside className={isOpen ? "sidebar sidebar--open" : "sidebar sidebar--closed"}>

      {/* Toggle Button — always visible */}
      <button
        className="toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <RiArrowLeftSLine size={18} /> : <RiArrowRightSLine size={18} />}
      </button>

      {/* All content fades out when closed */}
      <div className="sidebar-content">

        {/* Brand */}
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">
            <Image
              src='/images/logo_keysafe.png'
              alt='logo'
              width={25}
              height={25}
            />
          </div>
          <span className="sidebar-brand-name">KeySafe</span>
        </div>

        {/* User */}
        <div className="user-section">
          <div className="user-avatar">{initials}</div>
          <div className="user-info">
            <p className="user-name">{user.username}</p>
            <p className="user-email">{user.email}</p>
          </div>
        </div>

        {/* Add Password */}
        <button className="action-button">
          <RiAddLine size={16} />
          Nova Password
        </button>

        {/* Folders */}
        <nav>
          <p className="nav-title">Pastas</p>
          <ul className="folder-list">
            <li
              className={`folder-item ${activeFolder === "general" ? "active" : ""}`}
              onClick={() => setActiveFolder("general")}
            >
              <RiFolderOpenLine size={16} />
              Geral
            </li>
            {folders.map((f) => (
              <li
                key={f.id}
                className={`folder-item ${activeFolder === f.id ? "active" : ""}`}
                onClick={() => setActiveFolder(f.id)}
              >
                <RiFolderLine size={16} />
                {f.name}
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="logout-section">
          <button className="logout-button" onClick={handleLogout} disabled={loading}>
            {loading ? (
              <LuLoader size={15} className="animate-spinner" />
            ) : (
              <RiLogoutBoxLine size={15} />
            )}
            Terminar Sessão
          </button>
        </div>

      </div>
    </aside>
  );
}