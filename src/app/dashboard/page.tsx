import { getSessionUser, logout } from "@/libs/auth";
import prisma from "@/libs/prisma";
import Sidebar from "../dashboard/components/SideBar";
import { redirect } from "next/navigation";
import SideBar from "../dashboard/components/SideBar";


export default async function DashboardPage() {
  const session = await getSessionUser();
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.userId as number },
    include: { folders: true }
  });

  return (
    <div className="dashboard-wrapper">
      {user &&
        <SideBar
          user={{ email: user.email, username: user.username }}
          folders={user.folders}
        />
      }

      <main className="main-content">
        <h1>Minhas Passwords</h1>
        {/* Futuro conteúdo aqui */}
      </main>
    </div>
  );
}