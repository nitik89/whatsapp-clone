import { createContext, useEffect, useRef, useState } from "react";
import {io} from 'socket.io-client';
export const AccountContext = createContext(null);
const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [activeUsers,setActiveUsers]=useState();
  const [newmessages,setnewMessages]=useState(false);
  const [openStory,setOpenStory]=useState(false);
  const [open, setOpen] = useState(false);
  const socket=useRef();

  useEffect(()=>{
    socket.current=io('ws://localhost:9000');
  },[])
  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        socket,
        activeUsers,
        setActiveUsers,
        newmessages,
        setnewMessages,open,setOpen,
        openStory,setOpenStory
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
