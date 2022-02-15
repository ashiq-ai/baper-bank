// handel deposit button---

document.getElementById('deposit-button').addEventListener('click', function () {

    // update deposit balance

    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    var newDepositAmount = parseFloat(newDepositText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    var previousDepositAmount = parseFloat(previousDepositText);

    const newCurrentTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newCurrentTotal;

    // update account balance-----

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalacneTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalacneTotal;

    // input clear field
    depositInput.value = '';
})
// update withdraw balance------

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalText);

    const newWithdrawTotalBlance = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotalBlance;

    // input withdraw clear-----
    withdrawInput.value = '';

    // update account balance-----

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const currentTotalAccountBalance = previousBalanceTotal - newWithdrawTotalBlance;

    balanceTotal.innerText = currentTotalAccountBalance;

    // -----end-----
})