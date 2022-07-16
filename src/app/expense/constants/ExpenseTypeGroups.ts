export const expenseTypesGroups = [
    {
        name: 'Business',
        options: [
            {
                value: 'research_experimental',
                label: 'Research or Experimental Costs',
            },
            {
                value: 'intangible_drilling_costs',
                label: 'Intangible Drilling Costs',
            },
            { value: 'exploration_costs', label: 'Exploration Costs' },
            { value: 'development_costs', label: 'Development Costs' },
            { value: 'circulation_costs', label: 'Circulation Costs' },
            {
                value: 'business_startup_organizational_costs',
                label: 'Business Startup and Organizational Costs',
            },
            { value: 'reforestation_costs', label: 'Reforestation Costs' },
            {
                value: 'retired_asset_removal_costs',
                label: 'Retired Asset Removal Costs',
            },
            { value: 'barrier_removal_costs', label: 'Barrier Removal Costs' },
            {
                value: 'film_television_live_theatrical_production_costs',
                label: 'Film, Television, and Live Theatrical Production Costs',
            },
            {
                value: 'repair_maintenance_costs',
                label: 'Repair and Maintenance Costs',
            },
        ],
    },
    {
        name: "Employees' Pay",
        options: [
            { value: 'employee_pay', label: 'Employee Pay' },
            { value: 'employee_bonus', label: 'Employee Bonus' },
            {
                value: 'employee_education_expenses',
                label: 'Education Expense',
            },
            { value: 'fringe_benefit', label: 'Fringe Benefit' },
            { value: 'meals', label: 'Meals' },
            { value: 'lodging', label: 'Lodging' },
            { value: 'employee_advance', label: 'Employee Advance' },
            { value: 'property_transfer', label: 'Property Transfer' },
            { value: 'sick_pay', label: 'Sick Pay' },
            { value: 'vacation_pay', label: 'Vacation Pay' },
        ],
    },
    {
        name: 'Rent',
        options: [
            { value: 'rent', label: 'Rent' },
            { value: 'lease_cancellation', label: 'Lease Cancellation' },
            { value: 'lease_taxes', label: 'Lease Taxes' },
            { value: 'lease_cost', label: 'Lease Cost' },
            { value: 'lease_renewal', label: 'Lease Renewal' },
            { value: 'lessee_improvements', label: 'Lessee Improvements' },
            {
                value: 'mortgage_obtain_expenses',
                label: 'Mortgage Obtainment Expenses',
            },
            {
                value: 'mortgage_prepayment_penalty',
                label: 'Mortgage Prepayment Penalty',
            },
        ],
    },
    {
        name: 'Interest',
        options: [
            {
                value: 'nonpassive_trade_interest',
                label: 'Nonpassive Trade or Business Activity Interest',
            },
            {
                value: 'passive_trade_interest',
                label: 'Passive Trade or Business Activity Interest',
            },
            { value: 'investment_interest', label: 'Investment Interest' },
            { value: 'portfolio_interest', label: 'Portfolio Interest' },
            { value: 'personal_interest', label: 'Personal Interest' },
            {
                value: 'partial_liability_loan_interest',
                label: 'Partial Liability Loan Interest',
            },
            { value: 'mortgage_interest', label: 'Mortgage Interest' },
            {
                value: 'employment_tax_deficiency_interest',
                label: 'Employment Tax Deficiency Interest',
            },
            { value: 'oid', label: 'Original Issue Discount' },
            { value: 'de_minimis_oid', label: 'De minimis OID' },
            {
                value: 'partial_payment_nontax_debt',
                label: 'Partial Payment on Nontax Debt',
            },
            { value: 'installment_purchase', label: 'Installment Purchase' },
            {
                value: 'below_market_loan_interest',
                label: 'Below-Market Loan Interest',
            },
        ],
    },
    {
        name: 'Taxes',
        options: [
            { value: 'real_estate_taxes', label: 'Real Estate Taxes' },
            {
                value: 'real_estate_purchase_sale_taxes',
                label: 'Real Estate Purchase or Sale Taxes',
            },
            {
                value: 'state_income_taxes',
                label: 'State or Local Income Taxes',
            },
            { value: 'foreign_income_taxes', label: 'Foreign Income Taxes' },
            { value: 'employment_taxes', label: 'Employment Taxes' },
            { value: 'employment_taxes', label: 'Employment Taxes' },
            { value: 'self_employment_tax', label: 'Self-Employment Tax' },
            { value: 'excise_taxes', label: 'Excise Taxes' },
            { value: 'franchise_taxes', label: 'Franchise Taxes' },
            { value: 'occupational_taxes', label: 'Occupational Taxes' },
            {
                value: 'personal_property_taxes',
                label: 'Personal Property Taxes',
            },
            { value: 'sales_taxes', label: 'Sales Taxes' },
        ],
    },
    {
        name: 'Insurance',
        options: [
            { value: 'damage', label: 'Fire/Storm/Theft/etc Insurance' },
            {
                value: 'business_bad_debts',
                label: 'Business Bad Debts Insurance',
            },
            {
                value: 'employee_hospitalization',
                label: 'Employee Hospitalization and Medical Insurance',
            },
            { value: 'liability', label: 'Liability Insurance' },
            { value: 'malpractice', label: 'Malpractice Insurance' },
            { value: 'workers_comp', label: "Workers' Compensation" },
            {
                value: 'state_unemployment',
                label: 'State Unemployment Contribution',
            },
            { value: 'overhead', label: 'Overhead Insurance' },
            { value: 'vehicle', label: 'Car and Vehicle Insurance' },
            { value: 'life', label: 'Life Insurance' },
            {
                value: 'business_interruption',
                label: 'Business Interruption Insurance',
            },
            { value: 'self_health', label: 'Self Employed Health Insurance' },
            {
                value: 'qualified_long_term_insurance',
                label: 'Qualified Long-term Care Insurance',
            },
            {
                value: 'qualified_long_term_services',
                label: 'Qualified Long-term Care Services',
            },
        ],
    },
    {
        name: 'Depletion',
        options: [
            { value: 'mineral_property', label: 'Mineral Property' },
            { value: 'oil_gas_well', label: 'Oil and Gas Well' },
            {
                value: 'mines_geothermal_deposit',
                label: 'Mines and Geothermal Deposits',
            },
            { value: 'timber', label: 'Timber' },
        ],
    },
    {
        name: 'Other',
        options: [
            {
                value: 'travel_non_entertainment_meals',
                label: 'Travel and Non-entertainment related Meals',
            },
            { value: 'advertising', label: 'Advertising' },
            { value: 'car_truck_expenses', label: 'Car and Truck Expenses' },
            {
                value: 'charitable_contributions',
                label: 'Charitable Contributions',
            },
            {
                value: 'credit_card_convenience_fees',
                label: 'Credit Card Convenience Fees',
            },
            { value: 'damages_recovered', label: 'Damages Recovered' },
            {
                value: 'franchise_trademark_trade_name',
                label: 'Franchise, Trademark, Trade Name Purchase',
            },
            {
                value: 'impairment_related_expenses',
                label: 'Impairment Related Expenses',
            },
            {
                value: 'internet_related_expenses',
                label: 'Internet Related Expenses',
            },
            {
                value: 'interview_related_expenses',
                label: 'Interview Related Expenses',
            },
            {
                value: 'legal_professional_fees',
                label: 'Legal and Professional Fees',
            },
            { value: 'tax_preparation_fees', label: 'Tax Preparation Fees' },
            {
                value: 'licenses_regulatory_fees',
                label: 'Licenses and Regulatory Fees',
            },
            { value: 'moving_machinery', label: 'Moving Machinery' },
            { value: 'outplacement_services', label: 'Outplacement Services' },
            { value: 'penalties_fines', label: 'Penalties and Fines' },
            { value: 'repayment', label: 'Repayment' },
            { value: 'supplies_materials', label: 'Supplies and Materials' },
            { value: 'water', label: 'Water' },
            { value: 'power', label: 'Power' },
            { value: 'heat', label: 'Heat' },
            { value: 'telephone', label: 'Telephone' },
            { value: 'sewage', label: 'Sewage' },
            { value: 'wifi', label: 'WiFi' },
            { value: 'car_mileage', label: 'Car Mileage' },
            { value: 'gas', label: 'Gas' },
        ],
    },
];
