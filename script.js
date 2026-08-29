events.forEach((event) => {
  if (!event.name || !event.starred) {
    console.warn("Invalid event data:", event);
    return;
  }
  fetch("events.json")
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
  })
  .catch((error) => {
    console.error("Failed to load starred repositories:", error);
    const list = document.querySelector("#starred");
    list.textContent = "Unable to load starred repositories.";
  });
});