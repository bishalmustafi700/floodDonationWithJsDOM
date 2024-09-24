document.getElementById('add-money-button')
    .addEventListener('click', function(event){
        event.preventDefault();
        
    const addMoney = getInputFieldValueByID('add-money');
    const donateMoney = getTextFieldValueByID('donate-balance');
    if (addMoney > 0) {
        newBalance = addMoney+donateMoney;
        document.getElementById('donate-balance').innerText=newBalance;
        const totalDonateBalance = getTextFieldValueByID('main-balance');
        const totalBalance = totalDonateBalance-addMoney;
        document.getElementById('main-balance').innerText=totalBalance;
       } else{
           alert("Please enter a valid donation amount. Thanks!");
       }

})