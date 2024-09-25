// noakhali card calculation

document.getElementById('add-money-button')
    .addEventListener('click', function(event){
        event.preventDefault();
        
    const addMoney = getInputFieldValueByID('add-money');
    const donateMoney = getTextFieldValueByID('donate-balance');
    const successModal = document.getElementById('success-modal');
        
    if (addMoney > 0) {
        newBalances = addMoney+donateMoney;
        newBalance = newBalances.toFixed(2)
        document.getElementById('donate-balance').innerText=newBalance;

        const totalDonateBalance = getTextFieldValueByID('main-balance');

        const totalBalance = totalDonateBalance-addMoney;
        document.getElementById('main-balance').innerText=totalBalance.toFixed(2);
        successModal.classList.remove('hidden')
        addDonationToHistoryForNoa(addMoney)
       } else{

           alert("Please Enter a Valid DONATION Amount. Thanks!");
       }

})
function closeModal(){
    const modal = document.getElementById('success-modal')
    modal.classList.add('hidden')
}

// feni card calculation

document.getElementById('feni-add-money-button').addEventListener('click', function(event){
    event.preventDefault()

    const feniAddMoney = getInputFieldValueByID('feni-add-money-input');
    const feniDonatedBalance= getTextFieldValueByID('feni-main-balance');
    const successModal = document.getElementById('success-modal');

    if (feniAddMoney > 0 ){
        feniNewBalances = feniAddMoney + feniDonatedBalance;
        feniNewBalance = feniNewBalances.toFixed(2)
        document.getElementById('feni-main-balance').innerText=feniNewBalance

        const totalBalances = getTextFieldValueByID('main-balance') 

        userTotalBalance = totalBalances - feniAddMoney
        document.getElementById('main-balance').innerText=userTotalBalance.toFixed(2)
        successModal.classList.remove('hidden')       
        addDonationToHistoryForFeni(feniAddMoney);
    }else{

        alert("Please Enter a Valid DONATION Amount. Thanks!");
    }

})
function closeModal(){
    const modal = document.getElementById('success-modal')
    modal.classList.add('hidden')
}


// Aid for Injured in the Quota Movement

    document.getElementById('quota-button').addEventListener('click', function(event){
        event.preventDefault();


        const quotaAddMoneyButton = getInputFieldValueByID('quota-input');
        const quotaDonateBalance = getTextFieldValueByID('quota-balance')
        

        if (quotaAddMoneyButton > 0) {
            quotaNewBalances = quotaAddMoneyButton + quotaDonateBalance;
            quotaNewBalance= quotaNewBalances.toFixed(2)
            document.getElementById('quota-balance').innerText = quotaNewBalance
            const successModal = document.getElementById('success-modal');

            const inTotalBalance = getTextFieldValueByID('main-balance')

            userInTotalBalance= inTotalBalance - quotaAddMoneyButton
            document.getElementById('main-balance').innerText=userInTotalBalance.toFixed(2)
            successModal.classList.remove('hidden')
            addDonationToHistoryForQuota(quotaAddMoneyButton);
        } else {

            alert("Please Enter a Valid DONATION Amount. Thanks!");
        }
    })

    function closeModal(){
        const modal = document.getElementById('success-modal')
        modal.classList.add('hidden')
    }


