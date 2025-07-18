# Tax Calculator App 

A system for calculating value-added tax (VAT) for online tax filing developed using Angular 20 + Standalone Component + Signal with an automatic calculation system.

## Qualifications

- Fill in the filing type
- Specify the month and tax year
- Input the value before VAT, and the system will automatically calculate the VAT
- Verify the accuracy of VAT based on the specified range (min/max)
- Calculate the total tax (including Surcharge + Penalty)
- Display an error when VAT is outside the specified range
```
## Project structure 
src/app/ 
├── taxcal/
│ ├── taxcal.component.ts
│ ├── taxcal.html
│ ├── filing-type/
│ ├── month/
│ ├── year/
│ ├── sale-amount/
│ ├── tax-amount/
│ ├── surcharge/
│ ├── penalty/
│ └── total-amount/
├── app.ts
├── app.routes.ts
└── app.config.ts
```
## Project Specs
Angular CLI: 20.1.0 

Node: 22.17.1

Package Manager: npm 10.9.2

OS: win32 x64

## Installation
install dependencies:
```
npm install
```
start serve:
```
ng serve
```

Things that have not been done

The VAT capture is not finished yet. If the screen starts when entering the VAT Amount, it can be 0.

The modal is not fully completed yet, but it can display JSON. I'm not sure if it's a JSON message or not.

And I use AI in Some parts.
