import React from 'react'

export default function Text({ size, children, align }) {
    return (
        <div style={{ fontSize: `${size || 14}px`, textAlign: `${align || "left"}` }}>{children}</div>
    )
}
