function analyzeNews() {
  const text = document.getElementById("newsInput").value;
  const result = document.getElementById("result");

  if (text.length < 50) {
    result.innerHTML = "⚠️ Please enter a longer news article.";
    result.style.color = "#facc15";
    return;
  }

  // Fake logic for demo (works visually)
  const score = Math.floor(Math.random() * 40) + 60;

  if (score > 75) {
    result.innerHTML = `✅ Likely Genuine <br> Confidence Score: ${score}%`;
    result.style.color = "#4ade80";
  } else {
    result.innerHTML = `❌ Possibly Fake <br> Confidence Score: ${score}%`;
    result.style.color = "#f87171";
  }
}
