import React from "react"
import { Parrot } from "./ParrotStorage";

export class Bucket {
    parrots: Parrot[] = []

    addItem(parrot: Parrot) {
        this.parrots.push(parrot);
    }
    
    deleteItem(id: string) {
        const parrot = this.parrots.findIndex(x => x.id === id);
        if(parrot === -1 ){
            return;
        }

        this.parrots.splice(parrot, 1);
    }
}