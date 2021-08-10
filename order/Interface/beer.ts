import { TaxItem } from './TaxItem'

export class Beer extends TaxItem {
    private flavor: string
    private color: string
    constructor(category: string, dscription: string, price: number, id: string, flavor: string, color: string) {
        super(category, dscription, price, id)
        this.flavor = flavor
        this.color = color
    }


    getTaxes() {
        return 0.1
    }

}

