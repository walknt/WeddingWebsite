const form = document.getElementById('rsvpForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitButton = form.querySelector("button");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  const formData = new FormData(form);

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwSRNGWMHij4xTWXbV3Nsm4bjNhzgY6s_KmVZYKYga_jaa90kyacfu6jmE-EaXyyem6/exec", {
      method: "POST",
      body: formData
    });

    alert("✅ Thank you! Your RSVP has been successfully sent.");
    form.reset();
  } catch (err) {
    console.error(err);
    alert("❌ Something went wrong. Please try again!");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
  }
});
