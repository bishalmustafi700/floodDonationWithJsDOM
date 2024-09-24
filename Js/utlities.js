function getInputFieldValueByID(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueByID (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById (id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}


function addDonationToHistory(amount, city) {
    console.log(amount);
    const historyList = document.getElementById('historyList');
    const donationTime = document.getElementById('time');
    const listItem = document.createElement('div');
    const timeList = document.createElement('p');
    listItem.textContent = `${amount} Taka is Donated for famine-2024 at , Bangladesh 
    Date : ${new Date().toLocaleString()} GMT +0600 (Bangladesh Standard Time)`;

    // timeList.textContent = `Date : ${new Date().toLocaleString()} GMT +0600 (Bangladesh Standard Time)`;
    // 96500 Taka is Donated for famine-2024 at Feni, Bangladesh
    // Donated: $${amount} 
    // on ${new Date().toLocaleString()}

    historyList.appendChild(listItem);
    donationTime.appendChild(timeList);
  }