
// Mobile Menu

document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}


// About us Tab

// var aboutUs = {
//   "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
//   "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
//   "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
// };

// var unseletectedColor = "#646872";
// var seletectedColor = "#2A2D34";

// var aboutUsTabs = document.getElementsByClassName("single-tab");

// for (var a = 0; a < aboutUsTabs.length; a++) {
//   aboutUsTabs[a].onclick = function() {
//     var clickedValue = this.innerHTML;
//     document.getElementById("box-text").innerHTML = aboutUs[clickedValue];

//     for (var b = 0; b < aboutUsTabs.length; b++) {
//       aboutUsTabs[b].style["background-color"] = unseletectedColor;
//       aboutUsTabs[b].style["font-weight"] = "normal";
//     }

//     this.style["background-color"] = seletectedColor;
//     this.style["font-weight"] = "bold";


//   }
// }



// Service slider

var ourServices = [
  {
    'title': 'Education',
    'text': '<br><br>Studied Bachelor of Science in Computer Engineering <strong>(BSCpE)</strong> at Polytechnic University of the Philippines (PUP) batch of 2015.'
  },

  {
    'title': 'Experience',
    'text': '<br><br>Had two (2) internships, one as an <strong>encoder and web designer</strong>, and the other as an <strong>IT support on-premise</strong>. Also had professional background as an <strong>IT staff and website developer</strong> from two (2) separate companies.'
  },

  {
    'title': 'Other Skills',
    'text': '<br><br>Hardware and Software Troubleshooting &nbsp;•&nbsp; Computer Programming &nbsp;•&nbsp; Microsoft Office Literate &nbsp;•&nbsp; Photo Editing &nbsp;•&nbsp; English Proficiency and Proofreading'
  }
  
];

var previousArrow = document.getElementById("service-previous");
var nextArrow = document.getElementById("service-next");
var serviceTitleArea = document.getElementById("service-title");
var serviceTextArea = document.getElementById("service-text");

var currentService = 0;

nextArrow.onclick = function() {
  if (currentService == (ourServices.length - 1)) {
    currentService = 0;
  } else {
    currentService += 1;
  }
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;
}

previousArrow.onclick = function() {
  if (currentService == 0) {
    currentService = ourServices.length - 1;
  } else {
    currentService -= 1;
  }
  
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;
}




// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();


  
   


   