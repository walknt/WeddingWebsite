// Match box height to text dynamically
function syncBoxHeight() {
  const text = document.getElementById("text");
  const box = document.getElementById("box");
  box.style.height = 250 + text.offsetHeight + "px";
}

window.addEventListener("load", syncBoxHeight);
window.addEventListener("resize", syncBoxHeight);

// Random gradient for box border
  function randomGradient() {
      const colors = [
        "rgba(90, 61, 43, 0.7)",   // dark brown
        "rgba(210, 190, 170, 0.7)", // light brown
        "rgba(139, 107, 79, 0.7)",  // medium brown
        "rgba(243, 224, 193, 0.7)"  // very light brown
      ];

      // pick 6 random stops between 0 and 100%
      let stops = [];
      for (let i = 0; i < 6; i++) {
        stops.push(Math.floor(Math.random() * 101)); // 0–100
      }
      // sort them so gradient flows in order
      stops.sort((a, b) => a - b);

      // assign random colors to each stop
      let gradientStops = stops.map((stop, i) => {
        let color = colors[i % colors.length];
        return `${color} ${stop}%`;
      });

      // build gradient string
      let gradient = `linear-gradient(to bottom right, ${gradientStops.join(", ")})`;

      // apply to box
      document.querySelector(".decor-box").style.borderImage = `${gradient} 1`;
    }


randomGradient();

// RSVP Form Submission
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

document.getElementById("scrollToRsvp").addEventListener("click", function() {
  document.getElementById("rsvp").scrollIntoView({ behavior: "smooth" });
});