let x = 1234567.89;

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const currencyStr = currencyFormatter.format(x);

console.log(currencyStr); // Output: "$1,234,567.89"
