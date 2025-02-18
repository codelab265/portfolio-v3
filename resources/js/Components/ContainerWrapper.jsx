import React from "react";

export default function ContainerWrapper({ children, id, className = "" }) {
    return (
        <section id={id} className={className}>
            <div className="max-w-5xl mx-auto">{children}</div>
        </section>
    );
}
