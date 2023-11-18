function handlePrintButtonClick() {
    window.print(); // This will trigger the browser's print dialog
}

// Add a click event listener to the print button
const printButton = document.getElementById('print-button');
if (printButton) {
    printButton.addEventListener('click', handlePrintButtonClick);
}