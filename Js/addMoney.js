// noakhali card calculation

document.getElementById('add-money-button')
    .addEventListener('click', function(event){
        event.preventDefault();
        
    const addMoney = getInputFieldValueByID('add-money');
    const donateMoney = getTextFieldValueByID('donate-balance');
    const successModal = document.getElementById('success-modal');

    if (addMoney > 0) {
        newBalance = addMoney+donateMoney;
        document.getElementById('donate-balance').innerText=newBalance;

        const totalDonateBalance = getTextFieldValueByID('main-balance');

        const totalBalance = totalDonateBalance-addMoney;
        addDonationToHistory(addMoney);
        document.getElementById('main-balance').innerText=totalBalance;
        successModal.classList.remove('hidden')
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
        feniNewBalance = feniAddMoney + feniDonatedBalance;
        document.getElementById('feni-main-balance').innerText=feniNewBalance;

        const totalBalances = getTextFieldValueByID('main-balance') 

        userTotalBalance = totalBalances - feniAddMoney
        document.getElementById('main-balance').innerText=userTotalBalance
        successModal.classList.remove('hidden')
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
            quotaNewBalance = quotaAddMoneyButton + quotaDonateBalance;
            document.getElementById('quota-balance').innerText = quotaNewBalance
            const successModal = document.getElementById('success-modal');

            const inTotalBalance = getTextFieldValueByID('main-balance')

            userInTotalBalance= inTotalBalance - quotaAddMoneyButton
            document.getElementById('main-balance').innerText=userInTotalBalance
            successModal.classList.remove('hidden')
        } else {

            alert("Please Enter a Valid DONATION Amount. Thanks!");
        }
    })

    function closeModal(){
        const modal = document.getElementById('success-modal')
        modal.classList.add('hidden')
    }


