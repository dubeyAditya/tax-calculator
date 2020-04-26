import { Logger } from '@nestjs/common';
import { Repository, EntityRepository } from "typeorm";
import { TaxRules } from "./entity/tax-calculator.entity";
import { CreateTaxRuleDto } from "./dto/create-tax-rule.dto";

@EntityRepository(TaxRules)
export class TaxCalculatorRepository extends Repository<TaxRules>{
    private logger = new Logger("TaxCaclRepo");
    async createTaxRules(createTaxRuleDto: CreateTaxRuleDto): Promise<TaxRules> {
        const taxRules = new TaxRules();
        taxRules.year = createTaxRuleDto.year;
        taxRules.taxFreeLimit = createTaxRuleDto.taxFreeLimit;
        taxRules.ageRangeCriterial = createTaxRuleDto.ageRangeCriterial;
        taxRules.cessCriteria = createTaxRuleDto.cessCriteria;
        taxRules.salaryRangeCriteria = createTaxRuleDto.salaryRangeCriteria;
        this.logger.debug('Year: '+ createTaxRuleDto.year);
        this.logger.debug('Year: '+ createTaxRuleDto.taxFreeLimit);
        this.logger.debug('Year: '+ createTaxRuleDto.ageRangeCriterial);
        this.logger.debug('Year: '+ createTaxRuleDto.cessCriteria);
        await taxRules.save();
        return taxRules;
    }
}