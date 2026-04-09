import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { SidebarAndHeader } from '@/components/dashboard/sidebar-header'
import { NotificationProviderWrapper } from '@/components/providers/notification-provider'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <NotificationProviderWrapper>
      <SidebarAndHeader user={session.user}>
        {children}
      </SidebarAndHeader>
    </NotificationProviderWrapper>
  )
}
