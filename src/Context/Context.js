 import React from "react";

const UserContext = React.createContext({
    open: false,
    setOpen: () => {}
});

export default UserContext;