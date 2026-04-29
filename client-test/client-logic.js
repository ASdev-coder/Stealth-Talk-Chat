const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected:", socket.id);
});

socket.emit("join_room", "room123");

const form = document.getElementById("message-form");
const input = document.getElementById("message-input");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  socket.emit("message", {
    roomId: "room123",
    text: input.value,
  });

  input.value = "";
});

socket.on("message", (msg) => {
  messages.innerHTML += `<p>${msg.from}: ${msg.text}</p>`;
});
