import { HomePage } from '@/features/home/pages/HomePage'
import { ProjectDetailPage } from '@/features/projects/pages/ProjectDetailPage'
import { SiteLayout } from '@/shared/components/layout/SiteLayout'
import { Navigate, Route, Routes } from 'react-router-dom'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="proyectos/:projectSlug" element={<ProjectDetailPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  )
}
