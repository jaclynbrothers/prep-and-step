// click on placeholder image to make all images appear
const images = document.querySelectorAll('.pickImage')

Array.from(images).forEach(element => element.addEventListener('click', pickImage))

function pickImage(click){
	if(click.target.classList.contains('pickImage')){
 document.querySelectorAll('.showImage').forEach(x=>x.classList.toggle('hidden'))
    }else{
        alert("Error: please refresh and try again.");
    }
}

// click on breakfast to replace the 1st placeholder image that was clicked with that picture and hide the other pictures
const replaceImagewithBreakfast = document.querySelectorAll('.breakfast')

Array.from(replaceImagewithBreakfast).forEach(element => element.addEventListener('click', switchWithBreakfast))

function switchWithBreakfast(click){
            let Image_Id = document.getElementById('getImage1');
            if (Image_Id.src.match("images/placeholder-image1.png")) {
                Image_Id.src = "images/breakfast.png.variant-medium.png";
              document.querySelectorAll('.showImage').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image1.png";
            }
        }

// click on reading to replace the 2nd placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithReading = document.querySelectorAll('.reading')

        Array.from(replaceImageWithReading).forEach(element => element.addEventListener('click', switchWithReading))

        function switchWithReading(click){
            let Image_Id = document.getElementById('getImage2');
            if (Image_Id.src.match("images/placeholder-image2.png")) {
                Image_Id.src = "images/reading.png.variant-medium.png";
              document.querySelectorAll('.showImage').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image2.png";
            }
        }

// click on park to replace the 3rd placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithPark = document.querySelectorAll('.park')

        Array.from(replaceImageWithPark).forEach(element => element.addEventListener('click', switchWithPark))

        function switchWithPark(click){
            let Image_Id = document.getElementById('getImage3');
            if (Image_Id.src.match("images/placeholder-image3.png")) {
                Image_Id.src = "images/park.png";
              document.querySelectorAll('.showImage').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image3.png";
            }
        }

// click on speech therapy picture to replace the 4th placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithSpeechTherapy = document.querySelectorAll('.speechTherapy')

        Array.from(replaceImageWithSpeechTherapy).forEach(element => element.addEventListener('click', switchWithSpeechTherapy))

        function switchWithSpeechTherapy(click){
            let Image_Id = document.getElementById('getImage4');
            if (Image_Id.src.match("images/placeholder-image4.png")) {
                Image_Id.src = "images/speech therapy_3.png";
              document.querySelectorAll('.showImage').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image4.png";
            }
        }

// click on lunch picture to replace the 5th placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithLunch = document.querySelectorAll('.lunch')

        Array.from(replaceImageWithLunch).forEach(element => element.addEventListener('click', switchWithLunch))

        function switchWithLunch(click){
            let Image_Id = document.getElementById('getImage5');
            if (Image_Id.src.match("images/placeholder-image5.png")) {
                Image_Id.src = "images/lunch.png.variant-medium.png";
              document.querySelectorAll('.showImage').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image5.png";
            }
        }

// OLD CODE BELOW

// // select image element
// const img = document.getElementById('show-image');

// // listen for the click event

// // toggle variable

// let toggle = true;

// img.addEventListener('click', function(){
//     // toggle
//     toggle = !toggle;
//     if(toggle){
//         img.src = 'images/placeholder-image.png'
//     }else{
//         img.src = 'images/breakfast.png.variant-medium.png'
//     }

//     // img.src = 'images/breakfast.png.variant-medium.png'
// })

// const images = document.querySelectorAll('.displayImages')

// Array.from(images).forEach(element => element.addEventListener('click', displayImage))

// function displayImage(click){
// 	if(click.target.classList.contains('pickImage')){
// 		document.querySelector('#show-image').classList.toggle('hidden')
// 	}else{
// 		alert("Error: please refresh and try again.");
// 	}
// }

// function switchImage() {
//     let Image_Id = document.getElementById('getImage');
//     if (Image_Id.src.match("images/placeholder-image.png")) {
//         Image_Id.src = "images/breakfast.png.variant-medium.png";
//     }
//     else {
//         Image_Id.src = "images/placeholder-image.png";
//     }
// }        

// const replaceImages = document.querySelectorAll('.replaceImage')

// Array.from(replaceImages).forEach(element => element.addEventListener('click', replaceImage))

// function replaceImage(click){
// 	if(click.target.classList.contains('switchImage')){
// 		document.querySelector('#show-image')
//         // classList.toggle('hidden')
//         img.src = 'images/breakfast.png.variant-medium.png'
// 	}else{
// 		alert("Error: please refresh and try again.");
// 	}
// }

// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	}else{
// 		alert("Wrong!");
// 	}
// }