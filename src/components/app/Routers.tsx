import { Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from '../ProtectedRoutes'
import { Treatments } from '../treatments/Treatments'
import { Calendar } from './appointments/Calendar'
import { Home } from './Home'
import { AllStaff } from './staff/AllStaff'


export const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='treatments' element={<Treatments />} />
            <Route path='staff' element={<AllStaff />} />

            <Route path='calendar' element={
                <ProtectedRoutes>
                    <Calendar />
                </ProtectedRoutes>}
            />
        </Routes>
    )
}