import React from 'react';
import { Select, SelectItem, Chip } from "@nextui-org/react";

export default function MultiSelect(props) {
    return (
        <Select
            items={props.items}
            label={props.label}
            size={props.size || "sm"} // sm, md, lg
            style={{ ...props.style }}
            variant="bordered"
            isMultiline={true}
            aria-label="Select"
            selectionMode="multiple"
            selectedKeys={props.selectedItems}
            placeholder={props.placeholder}
            labelPlacement="outside"
            classNames={{
                base: "max-w-xs",
                trigger: "min-h-unit-12 py-2",
            }}
            onSelectionChange={(items) => {
                const arrayfied = Array.from(items);
                props.onChange(arrayfied)
            }}
            renderValue={(items) => {
                return (
                    <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                            <Chip key={item.key}>{item.data.label}</Chip>
                        ))}
                    </div>
                );
            }}
        >
            {(item) => (
                <SelectItem key={item.value} aria-label={"Select Item"} textValue={item.label}>
                    <div className="flex flex-col">
                        <span className="text-small">{item.label}</span>
                    </div>
                </SelectItem>
            )}
        </Select>
    )
}
