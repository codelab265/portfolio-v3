import { BorderBeam } from "@/Components/magicui/border-beam";
import React from "react";

function Box({ children, className }) {
    return (
        <div className={`border border-gray-100 ${className} relative`}>
            {children}
            <BorderBeam duration={8} size={100} />
        </div>
    );
}

export default Box;
