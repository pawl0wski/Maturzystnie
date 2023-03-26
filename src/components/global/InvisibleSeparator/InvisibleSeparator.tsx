import React from "react";

interface InvisibleSeparatorProps {
    height?: number;
}

export default function InvisibleSeparator(props: InvisibleSeparatorProps) {
    const { height } = props;
    const invisibleSeparatorStyle = {
        height: height == null ? "8rem" : `${height}rem`,
        width: "100vw",
    };

    return <div style={invisibleSeparatorStyle} />;
}
