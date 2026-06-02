const correctCode = "FLY2026";

document.getElementById("enterBtn").addEventListener("click", () => {

  const entered = document.getElementById("accessCode").value;

  if (entered === correctCode) {

    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";

    // IMPORTANT: initialize globe AFTER it becomes visible
    initGlobe();
  }
});