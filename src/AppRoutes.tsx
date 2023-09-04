/*
  This file contains the routes of the application 
*/

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageRelations } from './pages/relations/PageRelations'
import { PageRelation } from './pages/relation/PageRelation'
import { PageHome } from './pages/home/PageHome'
import { PageNotFound } from './pages/not-found/PageNotFound'

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
