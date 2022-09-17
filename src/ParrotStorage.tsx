import React from "react"

export type Parrot = {
    id: string,
    name: string,
    price: number
}

export class ParrotStorage {
    parrots: Parrot[] = [
        {
            id: "1",
            name: "Chibi",
            price: 500
        },
        {
            id: "2",
            name: "Kesha",
            price: 50
        },
        {
            id: "3",
            name: "Chucha",
            price: 30
        },
        {
            id: "4",
            name: "ParrotReact",
            price: 0
        }
    ]

    addItem(parrot: Parrot) {
        this.parrots.push(parrot);
    }
}