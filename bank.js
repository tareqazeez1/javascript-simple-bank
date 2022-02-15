/* -----*** DOM manupuation with reusable Functions *** ----- */


/* --------Function for getting the input value from the fields --------- */

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // To make field empty
    inputField.value = '';
    return amountValue;
}

/* --------Function for updating the deposit withdraw total box --------- */

function updateTotalBox(totalFieldId, newAmount) {  //'show-deposit-total' or 'show-withdraw-total'
    const showTotal = document.getElementById(totalFieldId);
    const prevTotalAmountText = showTotal.innerText;
    const prevTotal = parseFloat(prevTotalAmountText);
    showTotal.innerText = prevTotal + newAmount;
}

/* -------Function to get the current balance in the total balance box------*/

function getCurrentBalance() {
    const balanceTotal = document.getElementById('show-balance-total');
    const balanceTotalAmountText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(balanceTotalAmountText);
    return prevBalanceTotal;
}


/* --------Function for updating main balance total box --------- */

function updateBalance(newAmount, isAdd) {
    const balanceTotal = document.getElementById('show-balance-total');
    /*  const balanceTotalAmountText = balanceTotal.innerText;
        const prevBalanceTotal = parseFloat(balanceTotalAmountText);  */
    const prevBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = prevBalanceTotal + newAmount;
    } else {
        balanceTotal.innerText = prevBalanceTotal - newAmount;
    }
}



/* ----------------------- For deposit ----------------------- */
document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');

    // update deposit box
    if (newDepositAmount > 0) {
        updateTotalBox('show-deposit-total', newDepositAmount)
    } else { alert("Deposit amount cannot be negative or string") }
    // Update account balance (+)
    updateBalance(newDepositAmount, true);
})
/* ----------------------- For withdraw ----------------------- */
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    // update the withdraw box
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalBox('show-withdraw-total', newWithdrawAmount);
    } else { alert("Withdraw amount cannot be negative or string") }
    // Update account balance (+)
    updateBalance(newWithdrawAmount, false);


})