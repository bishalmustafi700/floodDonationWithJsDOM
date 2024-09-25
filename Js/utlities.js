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

// Noakhali history

function addDonationToHistoryForNoa(amount) {
    console.log(amount);
    const listItem = document.createElement('div');
    listItem.className= "mb-6 text-3xl font-bold"
    const timeList = document.createElement('p');
    timeList.className= " mb-10"
    listItem.textContent = `${amount} Taka is Donated for famine-2024 at Noakhali, Bangladesh`;
    timeList.textContent = `Date : ${new Date().toLocaleString()} GMT +0600 (Bangladesh Standard Time)`;

    const historyContainer = document.getElementById('history-section')
    historyContainer.insertBefore(timeList, historyContainer.firstChild)
    historyContainer.insertBefore(listItem, historyContainer.firstChild)
    
  }


//   Feni history

function addDonationToHistoryForFeni(amount) {
    console.log(amount);
    const listItem = document.createElement('div');
    listItem.className= "mb-6 text-3xl font-bold"
    const timeList = document.createElement('p');
    timeList.className= " mb-10"
    listItem.textContent = `${amount} Taka is Donated for Flood Relief in Feni,Bangladesh`;
    timeList.textContent = `Date : ${new Date().toLocaleString()} GMT +0600 (Bangladesh Standard Time)`;

    const historyContainer = document.getElementById('history-section')
    historyContainer.insertBefore(timeList, historyContainer.firstChild)
    historyContainer.insertBefore(listItem, historyContainer.firstChild)
    
  }

//   quota history
function addDonationToHistoryForQuota(amount) {
    console.log(amount);
    const listItem = document.createElement('div');
    listItem.className= "mb-6 text-3xl font-bold"
    const timeList = document.createElement('p');
    timeList.className= " mb-10"
    listItem.textContent = `${amount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
    timeList.textContent = `Date : ${new Date().toLocaleString()} GMT +0600 (Bangladesh Standard Time)`;

    const historyContainer = document.getElementById('history-section')
    historyContainer.insertBefore(timeList, historyContainer.firstChild)
    historyContainer.insertBefore(listItem, historyContainer.firstChild)
    
  }