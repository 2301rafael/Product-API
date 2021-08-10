import { TaxItem } from './TaxItem'

export class Cigar extends TaxItem {
    flavor: string
    taste: string
    constructor(category: string, dscription: string, price: number, flavor: string, taste: string) {
        super(category, dscription, price)
        this.flavor = flavor
        this.taste = taste
    }
    getTaxes() {
        return 0.2
    }
}
