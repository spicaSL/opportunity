function psToggle(problemSet) {
  let problems2018 = document.getElementsByClassName('ps-2018');
  let problems2017 = document.getElementsByClassName('ps-2017');
  let problems2016 = document.getElementsByClassName('ps-2016');

  let button2018 = document.getElementsByClassName('yr-btn')[0];
  let button2017 = document.getElementsByClassName('yr-btn')[1];
  let button2016 = document.getElementsByClassName('yr-btn')[2];

  if (problemSet === "2018") {
    for(var i = 0; i < problems2017.length; i++) {
      problems2017[i].style.display = "none";
    }

    for(var i = 0; i < problems2016.length; i++) {
      problems2016[i].style.display = "none";
    }

    for(var i = 0; i < problems2018.length; i++) {
      problems2018[i].style.display = "inline";
    }

    button2018.style.color = "white";
    button2018.style.backgroundColor = "#004469";

    button2017.style.color = "";
    button2017.style.backgroundColor = "";

    button2016.style.color = "";
    button2016.style.backgroundColor = "";


  } else if (problemSet === "2017") {
    for(var i = 0; i < problems2017.length; i++) {
      problems2017[i].style.display = "inline";
    }

    for(var i = 0; i < problems2016.length; i++) {
      problems2016[i].style.display = "none";
    }

    for(var i = 0; i < problems2018.length; i++) {
      problems2018[i].style.display = "none";
    }

    button2018.style.color = "";
    button2018.style.backgroundColor = "";

    button2017.style.color = "white";
    button2017.style.backgroundColor = "#004469";

    button2016.style.color = "";
    button2016.style.backgroundColor = "";

  } else {
    for(var i = 0; i < problems2017.length; i++) {
      problems2017[i].style.display = "none";
    }

    for(var i = 0; i < problems2016.length; i++) {
      problems2016[i].style.display = "inline";
    }

    for(var i = 0; i < problems2018.length; i++) {
      problems2018[i].style.display = "none";
    }

    button2018.style.color = "";
    button2018.style.backgroundColor = "";

    button2017.style.color = "";
    button2017.style.backgroundColor = "";

    button2016.style.color = "white";
    button2016.style.backgroundColor = "#004469";
  }

}
