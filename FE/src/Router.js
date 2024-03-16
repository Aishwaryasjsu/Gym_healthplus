import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation
} from "react-router-dom";
import Home from './pages/Home';
import MembersHome from './pages/MembersHome';
import MemberSignInPage from './pages/MemberSignIn';
import EmployeeLogin from './pages/EmployeeSignIn';
import EmployeeHome from './pages/EmployeeHome';
import useAuth from './hooks/useAuth';
import NotFound from './pages/NotFound';
import LogoutPage from './pages/Logout';
import routes from './util/routes';
import { EnrollClasses } from './pages/EnrollClass';
import { TrainingLogs } from './pages/TrainingLogs';
import MemberProfile from './pages/MemberProfile';
import AddMember from './pages/AddMember';
import AddClasses from './pages/AddClasses';
import ViewMembers from './pages/ViewMembers';
import EmployeeClasses from './pages/EmployeeClasses';
import EmployeeDashboard from './pages/EmployeeDashboard';

function RequireAuth({ children }) {
    const { authed } = useAuth();
    const location = useLocation();
    return authed === true ? children : <Navigate to={routes.memberLogin} replace state={{ path: location.pathname }} />;
}

function RouterContent() {

    return (<Router>
        <Routes>
            <Route path={routes.home} element={<Home></Home>} />
            <Route path={routes.memberLogin} element={<MemberSignInPage></MemberSignInPage>} />
            <Route path={routes.memberHome} element={<RequireAuth><MembersHome /></RequireAuth>} />
            <Route path={routes.enrollClass} element={<RequireAuth><EnrollClasses /></RequireAuth>} />
            <Route path={routes.memberLogs} element={<RequireAuth><TrainingLogs /></RequireAuth>} />
            <Route path={routes.memberProfile} element={<RequireAuth><MemberProfile /></RequireAuth>} />

            {/* employeeHome */}
            <Route path={routes.employeeLogin} element={<EmployeeLogin></EmployeeLogin>} />
            <Route path={routes.employeeHome} element={<RequireAuth><EmployeeHome /></RequireAuth>} />
            <Route path={routes.addMember} element={<RequireAuth><AddMember /></RequireAuth>} />
            <Route path={routes.addClasses} element={<RequireAuth><AddClasses /></RequireAuth>} />
            <Route path={routes.employeeClasses} element={<RequireAuth><EmployeeClasses /></RequireAuth>} />
            <Route path={routes.employeeDashboard} element={<RequireAuth><EmployeeDashboard /></RequireAuth>} />
            <Route path={routes.logout} element={<LogoutPage />} />
            <Route path="*" element={<NotFound></NotFound>} />
            <Route path={routes.viewMembers} element={<RequireAuth><ViewMembers /></RequireAuth>} />

        </Routes>
    </Router>)

};

export default RouterContent;