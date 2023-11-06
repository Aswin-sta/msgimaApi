async function getData() {
  try {
    const result = await fetch("https://api.msigma.in/btech/v2/branches/");
    if (!result.ok) {
      throw new error(`API request failed ,status :${result.status}`);
    }
    const data = await result.json();
    console.log(data);
    courses = [...data.branches];
    courses.forEach((data) => {
      console.log(data);
      let courseWrapper = document.querySelector(".courseWrapper");
      let courseContainer = document.createElement("div");
      courseContainer.classList.add("courseWrapper");
      const primaryColors = [
        "255, 0, 0",
        "0, 128, 0",
        "0, 0, 255",
        "255, 165, 0",
        "128, 0, 128",
      ];

      const randomColor =
        primaryColors[Math.floor(Math.random() * primaryColors.length)];
      let title = document.createElement("h2");
      title.innerHTML = data.short;
      title.style.color = "rgb(" + randomColor + ")";
      let description = document.createElement("p");
      description.innerHTML = data.name;
      description.id = "description";
      let button = document.createElement("button");
      button.innerHTML = "Apply now";

      button.style.borderColor = "rgb(" + randomColor + ")";
      button.style.color = "rgb(" + randomColor + ")";
      button.style.backgroundColor = "rgb(" + randomColor + ",0.35)";

      let pricing = document.createElement("p");
      pricing.innerHTML = "Fee starting at ₹799 per subject";
      pricing.id = "pricing";
      courseContainer.append(title, description, button, pricing);
      courseWrapper.append(courseContainer);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
