const checkbox = document.getElementById("checkboxInput");
const textAreaInput = document.getElementById("textIput");
const colorInput = document.getElementById("colorInput");
const fontSizeSelect = document.getElementById("fontSizeIput");
const previewContainer = document.getElementById("priveContainer");
const wordCount = document.getElementById("wordCount");

checkbox.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});

document.body.classList.add("dark-mode");

textAreaInput.addEventListener("input", () => {
  previewContainer.innerText = textAreaInput.value;

  let wordLend = textAreaInput.value.trim().split(" ").length;

  wordCount.innerText = wordLend;
});

colorInput.addEventListener("input", () => {
  textAreaInput.style.color = colorInput.value;
});

fontSizeSelect.addEventListener("click", () => {
  textAreaInput.style.fontSize = `${fontSizeSelect.value}px`;
});

document.getElementById("upperCaseBtn").addEventListener("click", () => {
  if (textAreaInput.style.textTransform == "uppercase") {
    textAreaInput.style.textTransform = "none";
  } else {
    textAreaInput.style.textTransform = "uppercase";
  }
});

document.getElementById("lowerCaseBtn").addEventListener("click", () => {
  if (textAreaInput.style.textTransform == "lowercase") {
    textAreaInput.style.textTransform = "none";
  } else {
    textAreaInput.style.textTransform = "lowercase";
  }
});

document.getElementById("italic").addEventListener("click", () => {
  if (textAreaInput.style.fontStyle == "italic") {
    textAreaInput.style.fontStyle = "normal";
  } else {
    textAreaInput.style.fontStyle = "italic";
  }
});

document.getElementById("bold").addEventListener("click", () => {
  if (textAreaInput.style.fontWeight == "bold") {
    textAreaInput.style.fontWeight = "100";
  } else {
    textAreaInput.style.fontWeight = "bold";
  }
});

document.getElementById("styleText").addEventListener("click", () => {
  let trimValue = textAreaInput.value.trim();
  let splitValue = trimValue.split(" ");
  textAreaInput.value = "";
  for (let i of splitValue) {
    if (!i == "") {
      textAreaInput.value += i + " ";
      textAreaInput.style.textTransform = "capitalize";
    }
  }
});

document.getElementById("copyText").addEventListener("click", () => {
  textAreaInput.select();
  textAreaInput.setSelectionRange(0, 99999);

  navigator.clipboard
    .writeText(textAreaInput.value)
    .then(() => {
      alert("Copied to clipboard!");
    })
    .catch((err) => {
      alert("Failed to copy!");
    });
});
