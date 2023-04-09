import './App.css';
import Messanger from './components/Messanger';
import {GoogleOAuthProvider} from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';
import UserProvider from './context/UserProvider';
function App() {
    const clientId = '16345252141-mcnqqgqjb1fa7cfj87jv93dtfnt4c4db.apps.googleusercontent.com'
    return (
    <GoogleOAuthProvider clientId={clientId}>
        <UserProvider>
        <AccountProvider>
            <Messanger/>
        </AccountProvider>
        </UserProvider>
    </GoogleOAuthProvider>
    );
}

export default App;
