import React from 'react'
import {Select, SelectItem} from "@nextui-org/react";

export default function SimpleSelect(props) {
    return (
        <Select 
            items={props.items}
            label={props.label}
            className={props.className}
            style={{ ...props.style }}
            selectedKeys={props.value}
            defaultSelectedKeys={props.value}
            labelPlacement={"outside"}
            placeholder={props.placeholder}
            onSelectionChange={(items) => {
                const arrayfied = Array.from(items);
                props.onChange(arrayfied.length > 0 ? arrayfied[0] : null)
            }}
        >
            {(item) => (
                <SelectItem key={item.value} value={item.value} aria-label={item.label}>
                    {item.label}
                </SelectItem>
            )}
        </Select>
    )
}
