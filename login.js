document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Example login validation
  if (username === "admin" && password === "1234") {
    alert("Login successful!");
    window.location.href = "index.html"; // redirect after login
  } else {
    alert("Invalid username or password");
  }
});
