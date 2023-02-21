let highScores = document.querySelector("#highscores");

Object.keys(localStorage).forEach(function (key) {
  console.log(`Key: ${key}, Value: ${localStorage.getItem(key)}`);
  const li = document.createElement("li");
  li.textContent = `${key}: ${localStorage.getItem(key)}`;
  highScores.appendChild(li);
});
