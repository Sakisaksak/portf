
// Mobile Menu

document.getElementById("hamburguer-icon").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
};

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
};


document.getElementById("openPopup").onclick = function() {
  document.getElementById("css-only-modals").style.display = "block";
};

document.getElementById("closePopup").onclick = function() {
  document.getElementById("css-only-modals").style.display = "none";
};

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





// var ourServices = [
  // {
    // 'title': 'Education',
    // 'text': '<br><br>Studied Bachelor of Science in Computer Engineering <strong>(BSCpE)</strong> at Polytechnic University of the Philippines (PUP) batch of 2015.'
  // },

  // {
    // 'title': 'Experience',
    // 'text': '<br><br>Worked with two (2) companies with website development services. Used <strong>WordPress CMS</strong> for the first and <strong>October CMS</strong> for the other. <a href="#" id="openPopup">Read more</a>'
  // },

  // {
    // 'title': 'Other Skills',
    // 'text': '<br><br>Website Design (Figma) &nbsp;•&nbsp; Hardware and Software Troubleshooting &nbsp;•&nbsp; Computer Programming &nbsp;•&nbsp; Microsoft Office Literacy &nbsp;•&nbsp; Photo Editing (Adobe Photoshop) &nbsp;•&nbsp; English Proficiency and Proofreading'
  // }
  
// ];

// var previousArrow = document.getElementById("service-previous");
// var nextArrow = document.getElementById("service-next");
// var serviceTitleArea = document.getElementById("service-title");
// var serviceTextArea = document.getElementById("service-text");

// var currentService = 0;

// nextArrow.onclick = function() {
  // if (currentService == (ourServices.length - 1)) {
    // currentService = 0;
  // } else {
    // currentService += 1;
  // }
  // var title = ourServices[currentService].title;
  // var text = ourServices[currentService].text;
  // serviceTitleArea.innerHTML = title;
  // serviceTextArea.innerHTML = text;
// }

// previousArrow.onclick = function() {
  // if (currentService == 0) {
    // currentService = ourServices.length - 1;
  // } else {
    // currentService -= 1;
  // }
  
  // var title = ourServices[currentService].title;
  // var text = ourServices[currentService].text;
  // serviceTitleArea.innerHTML = title;
  // serviceTextArea.innerHTML = text;
// }


// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();


  
   


   