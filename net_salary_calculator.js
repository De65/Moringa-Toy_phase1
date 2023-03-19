const TAX_RATE = 0.3
const NHIF_RATE = 0.025
const NSSF_RATE = 0.06

const basicSalary = prompt("Enter your basic salary: ")
const benefits = prompt("Enter the total value of your benefits: ")

const grossSalary = basicSalary + benefits
const payee = grossSalary * TAX_RATE
const nhifDeduction = grossSalary * NHIF_RATE
const nssfDeduction = basicSalary * NSSF_RATE
const netSalary = grossSalary - payee - nhifDeduction -nssfDeduction

console.log(`Gross salary: ${grossSalary.toFixed(2)}`)
console.log(`payee (tax): ${payee.toFixed(2)}`)
console.log(`NHIF deduction: ${nhifDeduction.toFixed(2)}`)
console.log(`NSSF deduction:${nssfDeduction.toFixed(2)}`)
console.log(`Net salary:${netSalary.toFixed(2)}`)

