document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('currency-converter');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var sourceCurrency = document.getElementById('source_currencies').value;
        var targetCurrency = document.getElementById('target_currencies').value;
        var amount = parseFloat(document.getElementById('amount').value);

        fetch('https://api.exchangerate-api.com/v4/latest/' + sourceCurrency)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (!(targetCurrency in data.rates)) {
                    throw new Error('Target currency not found in response');
                }

                var exchangeRate = data.rates[targetCurrency];
                var convertedAmount = (amount * exchangeRate).toFixed(2);
                document.getElementById('Conversion').innerHTML = amount + ' ' + sourceCurrency + ' = ' + convertedAmount + ' ' + targetCurrency + '<br>Exchange rate: 1 ' + sourceCurrency + ' = ' + exchangeRate + ' ' + targetCurrency;
            })
            .catch(error => {
                console.error('Error fetching currency data:', error);
                document.getElementById('Conversion').innerHTML = 'Error fetching currency data';
            });
    });
});