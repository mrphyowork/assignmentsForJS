// For Switch Button
const standardForm = document.getElementById("standardForm");
const metricsForm = document.getElementById("metricsForm");
const standardRadio = document.getElementById("standard");
const metricsRadio = document.getElementById("metrics");

standardRadio.addEventListener("click", () => {
  standardForm.classList.remove("hidden");
  metricsForm.classList.add("hidden");
});

metricsRadio.addEventListener("click", () => {
  standardForm.classList.add("hidden");
  metricsForm.classList.remove("hidden");
});

// For BMI Calculation
// For Standard Form
const bmiCalculateStandardButton = document.getElementById(
  "bmiCalculateStandard"
);

bmiCalculateStandardButton.addEventListener("click", () => {
  let weightLb = Number(document.getElementById("weightStandard").value);
  let feet = Number(document.getElementById("feet").value);
  let inches = Number(document.getElementById("inches").value);
  let bmiStandardAnswer = 0;

  let heightIn = feet * 12 + inches;
  bmiStandardAnswer = ((weightLb / (heightIn * heightIn)) * 730).toFixed(1);
  bmiStandardAnswer = Number(bmiStandardAnswer);
  document.getElementById("bmiStandardAnswer").value = bmiStandardAnswer;

  // For BMI Status
  const bmiStandard = document.getElementById("bmiStandardAnswer");

  if (bmiStandardAnswer < 18.5) {
    bmiStandard.style.backgroundColor = "#FFC007";
  } else if (bmiStandardAnswer >= 18.5 && bmiStandardAnswer < 25) {
    bmiStandard.style.backgroundColor = "#198753";
  } else if (bmiStandardAnswer >= 25 && bmiStandardAnswer < 30) {
    bmiStandard.style.backgroundColor = "#10CAF0";
  } else {
    bmiStandard.style.backgroundColor = "#DC3444";
  }
});

// For Metrics Form
const bmiCalculateMetricsButton = document.getElementById(
  "bmiCalculateMetrics"
);

bmiCalculateMetricsButton.addEventListener("click", () => {
  let weightKg = Number(document.getElementById("weightMetrics").value);
  let heightM = Number(document.getElementById("heightMetrics").value);
  let bmiMetricsAnswer = 0;

  bmiMetricsAnswer = (weightKg / (heightM * heightM)).toFixed(1);
  bmiMetricsAnswer = Number(bmiMetricsAnswer);
  document.getElementById("bmiMetricsAnswer").value = bmiMetricsAnswer;
  //   console.log(bmiMetricsAnswer, typeof bmiMetricsAnswer);

  // For BMI Status
  const bmiMetrics = document.getElementById("bmiMetricsAnswer");

  if (bmiMetricsAnswer < 18.5) {
    bmiMetrics.style.backgroundColor = "#FFC007";
  } else if (bmiMetricsAnswer >= 18.5 && bmiMetricsAnswer < 25) {
    bmiMetrics.style.backgroundColor = "#198753";
  } else if (bmiMetricsAnswer >= 25 && bmiMetricsAnswer < 30) {
    bmiMetrics.style.backgroundColor = "#10CAF0";
  } else {
    bmiMetrics.style.backgroundColor = "#DC3444";
  }
});

// For Clear Data
// For Standard Form
const clearStandard = document.getElementById("clearStandard");

clearStandard.addEventListener("click", () => {
  const bmiStandardColor = document.getElementById("bmiStandardAnswer");
  bmiStandardColor.style.backgroundColor = "#FFFFFF";
});

// For Metrics Form
const clearMetrics = document.getElementById("clearMetrics");

clearMetrics.addEventListener("click", () => {
  const bmiMetricsColor = document.getElementById("bmiMetricsAnswer");
  bmiMetricsColor.style.backgroundColor = "#FFFFFF";
});

// For FAQs
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const question = faq.querySelector(".faq-question");
  question.addEventListener("click", () => {
    faq.classList.toggle("active");

    // expand or collapse the answer
    const answer = faq.querySelector(".faq-answer");

    if (faq.classList.contains("active")) {
      answer.style.display = "block";
      faq.querySelector(".toggle-icon").textContent = "-";
    } else {
      answer.style.display = "none";
      faq.querySelector(".toggle-icon").textContent = "+";
    }
  });
});
