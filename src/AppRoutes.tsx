/*
  This file contains the routes of the application 
*/

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageRelations } from './pages/PageRelations'
import { PageRelation } from './pages/PageRelation'
import { PageHome } from './pages/PageHome'
import { PageNotFound } from './pages/PageNotFound'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/relations" element={<PageRelations />} />
      <Route path="/relation/:id" element={<PageRelation />} />
      <Route index element={<PageHome />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)
