// Import: Dependencies
import React from 'react';
import {Alert} from "react-bootstrap";

// Component: Message
export default function Message({variant, children}) {
    return (
        <Alert variant={variant}>
        {children}
        </Alert>
    );
}

Message.defaultProps = {
    variant: "info",
}