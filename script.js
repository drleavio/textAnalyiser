console.log("hi");
uppercase.addEventListener("click", () => {
  console.log("transforming to upper case");
  inptext.value = inptext.value.toUpperCase();
});
lowercase.addEventListener("click", () => {
  console.log("transforming to upper case");
  inptext.value = inptext.value.toLowerCase();
});
removespaces.addEventListener("click", () => {
  console.log("Removing extra spaces");
  inptext.value = inptext.value.replace(/\s+/g, " ").trim();
});
removelines.addEventListener("click", () => {
  console.log("Removing extra new lines");
  inptext.value = inptext.value.replace(/\n+/g, "\n").trim();
});
inptext.addEventListener("input", () => {
  console.log("changed");
  charcount.innerText = inptext.value.length;
  wordcount.innerText = inptext.value.trim().split(" ").length;
});
