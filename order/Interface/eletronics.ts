import { TaxItem } from './TaxItem'

class Eletronic extends TaxItem {
    model: string
    version: string
    constructor(category: string, dscription: string, price: number, model: string, version: string) {
        super(category, dscription, price)
        this.model = model
        this.version = version
    }
    getTaxes() {
        return 0.3
    }
}
