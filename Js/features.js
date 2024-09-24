document.getElementById('showDonation')
    .addEventListener('click', function(){
        const history = document.getElementById('showHistory');
        const donation = document.getElementById('showDonation');
        showSectionById('donation-section');
        
        history.classList.remove('bg-lime-300');
        donation.classList.add('bg-lime-300');
})

document.getElementById('showHistory')
    .addEventListener('click', function(){
        const history = document.getElementById('showHistory');
        const donation = document.getElementById('showDonation');
        showSectionById('history-section');

        history.classList.add('bg-lime-300');
        donation.classList.remove('bg-lime-300');


})