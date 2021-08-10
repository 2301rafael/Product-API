import { Item } from './item'

export class Water extends Item {
    flavor: string
    taste: string

    constructor(category: string, description: string, price: number, flavor: string, taste: string) {
        super(category, description, price)
        this.flavor = flavor
        this.taste = taste

    }
}

