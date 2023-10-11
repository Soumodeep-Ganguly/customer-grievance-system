import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function CustomDropdown({ 
    color, // default, primary, secondary, success, warning, danger
    variant,  // solid, bordered, light, flat, faded, shadow
    items // default, primary, secondary, success, warning, danger
}) {
    return (
        <Dropdown showArrow>
            <DropdownTrigger>
                <Button 
                    color={color}
                    variant={variant}
                    className="capitalize"
                >
                    {variant}
                </Button>
            </DropdownTrigger>
            <DropdownMenu 
                aria-label="Dropdown"
                color={color} 
                variant={variant}
            >
                {items.map((item, _i) => (
                    <DropdownItem 
                        key={_i} 
                        className={`${item.className}`}
                        color={item.type}
                        onClick={() => item.action()}
                    >
                        {item.label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}
