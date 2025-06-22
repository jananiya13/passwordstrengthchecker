document.getElementById('passwordInput').addEventListener('input', function(e) {
    const password = e.target.value;
    const strengthMeter = document.getElementById('strengthMeter');
    const strengthMeterFill = strengthMeter.querySelector('.strength-meter-fill');
    const strengthLabel = document.getElementById('strengthLabel');

    const lengthCheck = document.getElementById('lengthCheck');
    const lowercaseCheck = document.getElementById('lowercaseCheck');
    const uppercaseCheck = document.getElementById('uppercaseCheck');
    const numberCheck = document.getElementById('numberCheck');
    const specialCharCheck = document.getElementById('specialCharCheck');

    lengthCheck.checked = password.length > 7;
    lowercaseCheck.checked = /[a-z]/.test(password);
    uppercaseCheck.checked = /[A-Z]/.test(password);
    numberCheck.checked = /[0-9]/.test(password);
    specialCharCheck.checked = /[^a-zA-Z0-9]/.test(password);

    let score = 0;
    if (lengthCheck.checked) score++;
    if (lowercaseCheck.checked) score++;
    if (uppercaseCheck.checked) score++;
    if (numberCheck.checked) score++;
    if (specialCharCheck.checked) score++;

    strengthMeterFill.style.width = `${score * 20}%`;
    switch(score) {
        case 0:
        case 1:
            strengthMeterFill.style.backgroundColor = "red";
            break;
        case 2:
            strengthMeterFill.style.backgroundColor = "orange";
            break;
        case 3:
            strengthMeterFill.style.backgroundColor = "yellow";
            break;
        case 4:
            strengthMeterFill.style.backgroundColor = "green";
            break;
    }

    const strengths = {
        0: "Very Weak",
        1: "Weak",
        2: "Moderate",
        3: "Strong",
        4: "Very Strong"
    };
    strengthLabel.textContent = strengths[score];
});
