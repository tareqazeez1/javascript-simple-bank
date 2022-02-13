// Banking page functions

// || Funtion for deposit button ||
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // update deposit box
    const depositTotal = document.getElementById('show-deposit-total');
    const prevDepositAmountText = depositTotal.innerText;
    const prevDepositAmount = parseFloat(prevDepositAmountText);
    const newDepositTotal = prevDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // To make field empty
    depositInput.value = '';

    // Update account balance (+)

    const balanceTotal = document.getElementById('show-balance-total');
    const balanceTotalAmountText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(balanceTotalAmountText);
    const newBalanceTotal = prevBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
})

// || Funtion for withdraw button ||

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // update the withdraw box

    const withdrawTotal = document.getElementById('show-withdraw-total');
    const prevWithdrawText = withdrawTotal.innerText;
    const prevWithdrawAmount = parseFloat(prevWithdrawText);
    const showWithdrawTotal = newWithdrawAmount + prevWithdrawAmount;
    withdrawTotal.innerText = showWithdrawTotal;

    // To make input field empty
    withdrawInput.value = '';

    // Update account balance (-)

    const balanceTotal = document.getElementById('show-balance-total');
    const balanceTotalAmountText = balanceTotal.innerText;
    const prevBalanceTotal = parseFloat(balanceTotalAmountText);
    const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

})