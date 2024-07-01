// used to get the value written in brackets from html by it's ID
document.getElementById("birthdateForm");
// it listens for an event(submit) and the function executes the written function below(preveting the default)
document.addEventListener("submit", function (event) {
  // it prevents the default behavior i.e the page refreshing automatically
  event.preventDefault();
  // new date is used to represent the value of the birthdate gotten
  let birthdate = new Date(document.getElementById("birthdate").value);
  // an in built function to get the year using local time, the variable stores the persons actual age gotten from the function
  let year = birthdate.getFullYear();
  // it stores the generation of the person after their years are calculated
  let generation = "";

  // it outputs the generation of a certain age group if the conditions in the brackets are met throughout the whole if function
  if (year >= 2013) {
    generation = "generation alpha";
    // we grab the body element from html and style it in our css then we set it as the background image in js when each of this conditions is met
    document.body.style.backgroundImage = 'url("assets/gen-alpha.png")';
  } else if (year >= 1997) {
    generation = "Generation Z";
    document.body.style.backgroundImage = 'url("assets/gen-z.png")';
  } else if (year >= 1981) {
    generation = "Millennials";
    document.body.style.backgroundImage = 'url("assets/gen-y.png")';
  } else if (year >= 1965) {
    generation = "Generation X";
    document.body.style.backgroundImage = 'url("assets/gen-x.png")';
  } else if (year >= 1946) {
    generation = "Baby Boomers";
    document.body.style.backgroundImage = 'url("assets/baby-boomers.png")';
  } else if (year >= 1928) {
    generation = "silent generation";
    document.body.style.backgroundImage = 'url("assets/silent-gen.png")';
  } else if (year >= 1901) {
    generation = "greatest generation";
    document.body.style.backgroundImage = 'url("assets/greatest-gen.png")';
  } else {
    generation = "lost generation";
    document.body.style.backgroundImage = 'url("assets/lost-gen.png")';
  }

  // we grab our element containing the result ID from html using the below inbuilt function and store it the resultDiv variable
  // the resultDiv variable is where our result is stored when one of the above conditions is met
  let resultDiv = document.getElementById("result");
  // we use the innerHtml to get the actual content printed inside the tags we've created
  // this is what is printed on the console when a certain condition above is met
  resultDiv.innerHTML = `
        <h2>You belong to the ${generation}</h2>
    `;
});
