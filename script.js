document.getElementById('calculateBtn').addEventListener('click', function() {
    const dobInput = document.getElementById('dob').value;
    
    if (!dobInput) {
        alert("Please enter your Date of Birth!");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Handle negative days (e.g., birth date is later in month than today)
    if (days < 0) {
        months--;
        const lastMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += lastMonthDays;
    }

    // Handle negative months (e.g., birth month is later in year than current month)
    if (months < 0) {
        years--;
        months += 12;
    }

    const ageMessage = `You are ${years} years, ${months} months, and ${days} days old.`;

    let funMessage = "";
    if (years < 13) {
        funMessage = "Hey Kiddo! 👶";
    } else if (years >= 13 && years <= 19) {
        funMessage = "Teenager Vibes 😎";
    } else if (years >= 20 && years <= 29) {
        funMessage = "Welcome to Adulting! 😅";
    } else {
        funMessage = "You’re a Legend! 🎉";
    }

    document.getElementById('ageMessage').innerText = ageMessage;
    document.getElementById('funMessage').innerText = funMessage;

    // Show result with fade-in effect
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
    setTimeout(() => {
        resultDiv.classList.add('visible');
    }, 10); // Small delay to trigger CSS transition
});
// Dark Mode Toggle
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark', themeSwitch.checked);
});
