import { ExpenseType } from '../models/expense-type';

export const expenseTypesGroups: ExpenseType[] = [
    {
        name: 'Business',
        subType: [
            {
                name: 'Research or Experimental Costs',
            },
            {
                name: 'Intangible Drilling Costs',
            },
            { name: 'Exploration Costs' },
            { name: 'Development Costs' },
            { name: 'Circulation Costs' },
            {
                name: 'Business Startup and Organizational Costs',
            },
            { name: 'Reforestation Costs' },
            {
                name: 'Retired Asset Removal Costs',
            },
            { name: 'Barrier Removal Costs' },
            {
                name: 'Film, Television, and Live Theatrical Production Costs',
            },
            {
                name: 'Repair and Maintenance Costs',
            },
        ],
    },
    {
        name: "Employees' Pay",
        subType: [
            { name: 'Employee Pay' },
            { name: 'Employee Bonus' },
            {
                name: 'Education Expense',
            },
            { name: 'Fringe Benefit' },
            { name: 'Meals' },
            { name: 'Lodging' },
            { name: 'Employee Advance' },
            { name: 'Property Transfer' },
            { name: 'Sick Pay' },
            { name: 'Vacation Pay' },
        ],
    },
    {
        name: 'Rent',
        subType: [
            { name: 'Rent' },
            { name: 'Lease Cancellation' },
            { name: 'Lease Taxes' },
            { name: 'Lease Cost' },
            { name: 'Lease Renewal' },
            { name: 'Lessee Improvements' },
            {
                name: 'Mortgage Obtainment Expenses',
            },
            {
                name: 'Mortgage Prepayment Penalty',
            },
        ],
    },
    {
        name: 'Interest',
        subType: [
            {
                name: 'Nonpassive Trade or Business Activity Interest',
            },
            {
                name: 'Passive Trade or Business Activity Interest',
            },
            { name: 'Investment Interest' },
            { name: 'Portfolio Interest' },
            { name: 'Personal Interest' },
            {
                name: 'Partial Liability Loan Interest',
            },
            { name: 'Mortgage Interest' },
            {
                name: 'Employment Tax Deficiency Interest',
            },
            { name: 'Original Issue Discount' },
            { name: 'De minimis OID' },
            {
                name: 'Partial Payment on Nontax Debt',
            },
            { name: 'Installment Purchase' },
            {
                name: 'Below-Market Loan Interest',
            },
        ],
    },
    {
        name: 'Taxes',
        subType: [
            { name: 'Real Estate Taxes' },
            {
                name: 'Real Estate Purchase or Sale Taxes',
            },
            {
                name: 'State or Local Income Taxes',
            },
            { name: 'Foreign Income Taxes' },
            { name: 'Employment Taxes' },
            { name: 'Employment Taxes' },
            { name: 'Self-Employment Tax' },
            { name: 'Excise Taxes' },
            { name: 'Franchise Taxes' },
            { name: 'Occupational Taxes' },
            {
                name: 'Personal Property Taxes',
            },
            { name: 'Sales Taxes' },
        ],
    },
    {
        name: 'Insurance',
        subType: [
            { name: 'Fire/Storm/Theft/etc Insurance' },
            {
                name: 'Business Bad Debts Insurance',
            },
            {
                name: 'Employee Hospitalization and Medical Insurance',
            },
            { name: 'Liability Insurance' },
            { name: 'Malpractice Insurance' },
            { name: "Workers' Compensation" },
            {
                name: 'State Unemployment Contribution',
            },
            { name: 'Overhead Insurance' },
            { name: 'Car and Vehicle Insurance' },
            { name: 'Life Insurance' },
            {
                name: 'Business Interruption Insurance',
            },
            { name: 'Self Employed Health Insurance' },
            {
                name: 'Qualified Long-term Care Insurance',
            },
            {
                name: 'Qualified Long-term Care Services',
            },
        ],
    },
    {
        name: 'Depletion',
        subType: [
            { name: 'Mineral Property' },
            { name: 'Oil and Gas Well' },
            {
                name: 'Mines and Geothermal Deposits',
            },
            { name: 'Timber' },
        ],
    },
    {
        name: 'Other',
        subType: [
            {
                name: 'Travel and Non-entertainment related Meals',
            },
            { name: 'Advertising' },
            { name: 'Car and Truck Expenses' },
            {
                name: 'Charitable Contributions',
            },
            {
                name: 'Credit Card Convenience Fees',
            },
            { name: 'Damages Recovered' },
            {
                name: 'Franchise, Trademark, Trade Name Purchase',
            },
            {
                name: 'Impairment Related Expenses',
            },
            {
                name: 'Internet Related Expenses',
            },
            {
                name: 'Interview Related Expenses',
            },
            {
                name: 'Legal and Professional Fees',
            },
            { name: 'Tax Preparation Fees' },
            {
                name: 'Licenses and Regulatory Fees',
            },
            { name: 'Moving Machinery' },
            { name: 'Outplacement Services' },
            { name: 'Penalties and Fines' },
            { name: 'Repayment' },
            { name: 'Supplies and Materials' },
            { name: 'Water' },
            { name: 'Power' },
            { name: 'Heat' },
            { name: 'Telephone' },
            { name: 'Sewage' },
            { name: 'WiFi' },
            { name: 'Car Mileage' },
            { name: 'Gas' },
        ],
    },
];
