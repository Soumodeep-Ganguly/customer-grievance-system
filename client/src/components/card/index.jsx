import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";

export default function CustomCard(props) {
    return (
        <Card>
            {props.title && <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">{props.title}</p>
                    {props.description && <p className="text-small text-default-500">{props.description}</p>}
                </div>
            </CardHeader>}
            {props.title && <Divider/>}
            <CardBody>
                {props.children}
            </CardBody>
            {props.footerRender && <Divider/>}
            {props.footerRender && <CardFooter>
                {props.footerRender}
            </CardFooter>}
        </Card>
    )
}
