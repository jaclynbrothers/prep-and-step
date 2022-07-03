// click on 1st placeholder image to make all images appear
const imagesRowOne = document.querySelectorAll('.pickImageRowOne')

Array.from(imagesRowOne).forEach(element => element.addEventListener('click', pickImageRowOne))

function pickImageRowOne(click){
	if(click.target.classList.contains('pickImageRowOne')){
    document.querySelectorAll('.showImageRowOne').forEach(x=>x.classList.toggle('hidden'))
    }else{
        alert("Error: please refresh and try again.");
    }
}

// click on 2nd placeholder image to make all images appear
const imagesRowTwo = document.querySelectorAll('.pickImageRowTwo')

Array.from(imagesRowTwo).forEach(element => element.addEventListener('click', pickImageRowTwo))

function pickImageRowTwo(click){
	if(click.target.classList.contains('pickImageRowTwo')){
    document.querySelectorAll('.showImageRowTwo').forEach(x=>x.classList.toggle('hidden'))
    }else{
        alert("Error: please refresh and try again.");
    }
}

// click on 3rd placeholder image to make all images appear
const imagesRowThree = document.querySelectorAll('.pickImageRowThree')

Array.from(imagesRowThree).forEach(element => element.addEventListener('click', pickImageRowThree))

function pickImageRowThree(click){
	if(click.target.classList.contains('pickImageRowThree')){
    document.querySelectorAll('.showImageRowThree').forEach(x=>x.classList.toggle('hidden'))
    }else{
        alert("Error: please refresh and try again.");
    }
}

// click on 4th placeholder image to make all images appear
const imagesRowFour = document.querySelectorAll('.pickImageRowFour')

Array.from(imagesRowFour).forEach(element => element.addEventListener('click', pickImageRowFour))

function pickImageRowFour(click){
	if(click.target.classList.contains('pickImageRowFour')){
    document.querySelectorAll('.showImageRowFour').forEach(x=>x.classList.toggle('hidden'))
    }else{
        alert("Error: please refresh and try again.");
    }
}

// click on 5th placeholder image to make all images appear
const imagesRowFive = document.querySelectorAll('.pickImageRowFive')

Array.from(imagesRowFive).forEach(element => element.addEventListener('click', pickImageRowFive))

function pickImageRowFive(click){
	if(click.target.classList.contains('pickImageRowFive')){
    document.querySelectorAll('.showImageRowFive').forEach(x=>x.classList.toggle('hidden'))
    }else{
        alert("Error: please refresh and try again.");
    }
}

// --- BREAKFAST PICTURE --

// click on breakfast to replace the 1st placeholder image that was clicked with that picture and hide the other pictures
const replaceImagewithBreakfastRowOne = document.querySelectorAll('.breakfastRowOne')

Array.from(replaceImagewithBreakfastRowOne).forEach(element => element.addEventListener('click', switchWithBreakfastRowOne))

function switchWithBreakfastRowOne(click){
            let Image_Id = document.getElementById('getImage1');
            if (Image_Id.src.match("images/placeholder-image1.png")) {
                Image_Id.src = "images/breakfast.png.variant-medium.png";
                document.querySelectorAll('.showImageRowOne').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image1.png";
            }
        }

// click on breakfast to replace the 2nd placeholder image that was clicked with that picture and hide the other pictures
const replaceImagewithBreakfastRowTwo = document.querySelectorAll('.breakfastRowTwo')

Array.from(replaceImagewithBreakfastRowTwo).forEach(element => element.addEventListener('click', switchWithBreakfastRowTwo))

function switchWithBreakfastRowTwo(click){
            let Image_Id = document.getElementById('getImage2');
            if (Image_Id.src.match("images/placeholder-image2.png")) {
                Image_Id.src = "images/breakfast.png.variant-medium.png";
                document.querySelectorAll('.showImageRowTwo').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image2.png";
            }
        }

// click on breakfast to replace the 3rd placeholder image that was clicked with that picture and hide the other pictures
const replaceImagewithBreakfastRowThree = document.querySelectorAll('.breakfastRowThree')

Array.from(replaceImagewithBreakfastRowThree).forEach(element => element.addEventListener('click', switchWithBreakfastRowThree))

function switchWithBreakfastRowThree(click){
            let Image_Id = document.getElementById('getImage3');
            if (Image_Id.src.match("images/placeholder-image3.png")) {
                Image_Id.src = "images/breakfast.png.variant-medium.png";
                document.querySelectorAll('.showImageRowThree').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image3.png";
            }
        }

// click on breakfast to replace the 4th placeholder image that was clicked with that picture and hide the other pictures
const replaceImagewithBreakfastRowFour = document.querySelectorAll('.breakfastRowFour')

Array.from(replaceImagewithBreakfastRowFour).forEach(element => element.addEventListener('click', switchWithBreakfastRowFour))

function switchWithBreakfastRowFour(click){
            let Image_Id = document.getElementById('getImage4');
            if (Image_Id.src.match("images/placeholder-image4.png")) {
                Image_Id.src = "images/breakfast.png.variant-medium.png";
                document.querySelectorAll('.showImageRowFour').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image4.png";
            }
        }

// click on breakfast to replace the 5th placeholder image that was clicked with that picture and hide the other pictures
const replaceImagewithBreakfastRowFive= document.querySelectorAll('.breakfastRowFive')

Array.from(replaceImagewithBreakfastRowFive).forEach(element => element.addEventListener('click', switchWithBreakfastRowFive))

function switchWithBreakfastRowFive(click){
            let Image_Id = document.getElementById('getImage5');
            if (Image_Id.src.match("images/placeholder-image5.png")) {
                Image_Id.src = "images/breakfast.png.variant-medium.png";
                document.querySelectorAll('.showImageRowFive').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image5.png";
            }
        }

// --- READING PICTURE --

// click on reading to replace the 1st placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithReadingRowOne = document.querySelectorAll('.readingRowOne')

Array.from(replaceImageWithReadingRowOne).forEach(element => element.addEventListener('click', switchWithReadingRowOne))

function switchWithReadingRowOne(click){
    let Image_Id = document.getElementById('getImage1');
    if (Image_Id.src.match("images/placeholder-image1.png")) {
        Image_Id.src = "images/reading.png.variant-medium.png";
        document.querySelectorAll('.showImageRowOne').forEach(x=>x.classList.toggle('hidden'));
    }
    else {
        Image_Id.src = "images/placeholder-image1.png";
    }
}

// click on reading to replace the 2nd placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithReadingRowTwo = document.querySelectorAll('.readingRowTwo')

Array.from(replaceImageWithReadingRowTwo).forEach(element => element.addEventListener('click', switchWithReadingRowTwo))

function switchWithReadingRowTwo(click){
    let Image_Id = document.getElementById('getImage2');
    if (Image_Id.src.match("images/placeholder-image2.png")) {
        Image_Id.src = "images/reading.png.variant-medium.png";
        document.querySelectorAll('.showImageRowTwo').forEach(x=>x.classList.toggle('hidden'));
    }
    else {
        Image_Id.src = "images/placeholder-image2.png";
    }
}

// click on reading to replace the 3rd placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithReadingRowThree = document.querySelectorAll('.readingRowThree')

Array.from(replaceImageWithReadingRowThree).forEach(element => element.addEventListener('click', switchWithReadingRowThree))

function switchWithReadingRowThree(click){
    let Image_Id = document.getElementById('getImage3');
    if (Image_Id.src.match("images/placeholder-image3.png")) {
        Image_Id.src = "images/reading.png.variant-medium.png";
        document.querySelectorAll('.showImageRowThree').forEach(x=>x.classList.toggle('hidden'));
    }
    else {
        Image_Id.src = "images/placeholder-image3.png";
    }
}

// click on reading to replace the 4th placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithReadingRowFour = document.querySelectorAll('.readingRowFour')

Array.from(replaceImageWithReadingRowFour).forEach(element => element.addEventListener('click', switchWithReadingRowFour))

function switchWithReadingRowFour(click){
    let Image_Id = document.getElementById('getImage4');
    if (Image_Id.src.match("images/placeholder-image4.png")) {
        Image_Id.src = "images/reading.png.variant-medium.png";
        document.querySelectorAll('.showImageRowFour').forEach(x=>x.classList.toggle('hidden'));
    }
    else {
        Image_Id.src = "images/placeholder-image4.png";
    }
}

// click on reading to replace the 5th placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithReadingRowFive = document.querySelectorAll('.readingRowFive')

Array.from(replaceImageWithReadingRowFive).forEach(element => element.addEventListener('click', switchWithReadingRowFive))

function switchWithReadingRowFive(click){
    let Image_Id = document.getElementById('getImage5');
    if (Image_Id.src.match("images/placeholder-image5.png")) {
        Image_Id.src = "images/reading.png.variant-medium.png";
        document.querySelectorAll('.showImageRowFive').forEach(x=>x.classList.toggle('hidden'));
    }
    else {
        Image_Id.src = "images/placeholder-image5.png";
    }
}

// --- PARK PICTURE --

// click on park to replace the 1st placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithParkRowOne = document.querySelectorAll('.parkRowOne')

        Array.from(replaceImageWithParkRowOne).forEach(element => element.addEventListener('click', switchWithParkRowOne))

        function switchWithParkRowOne(click){
            let Image_Id = document.getElementById('getImage1');
            if (Image_Id.src.match("images/placeholder-image1.png")) {
                Image_Id.src = "images/park.png";
                document.querySelectorAll('.showImageRowOne').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image1.png";
            }
        }

// click on park to replace the 2nd placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithParkRowTwo = document.querySelectorAll('.parkRowTwo')

        Array.from(replaceImageWithParkRowTwo).forEach(element => element.addEventListener('click', switchWithParkRowTwo))

        function switchWithParkRowTwo(click){
            let Image_Id = document.getElementById('getImage2');
            if (Image_Id.src.match("images/placeholder-image2.png")) {
                Image_Id.src = "images/park.png";
                document.querySelectorAll('.showImageRowTwo').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image2.png";
            }
        }

// click on park to replace the 3rd placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithParkRowThree = document.querySelectorAll('.parkRowThree')

        Array.from(replaceImageWithParkRowThree).forEach(element => element.addEventListener('click', switchWithParkRowThree))

        function switchWithParkRowThree(click){
            let Image_Id = document.getElementById('getImage3');
            if (Image_Id.src.match("images/placeholder-image3.png")) {
                Image_Id.src = "images/park.png";
                document.querySelectorAll('.showImageRowThree').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image3.png";
            }
        }

// click on park to replace the 4th placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithParkRowFour = document.querySelectorAll('.parkRowFour')

        Array.from(replaceImageWithParkRowFour).forEach(element => element.addEventListener('click', switchWithParkRowFour))

        function switchWithParkRowFour(click){
            let Image_Id = document.getElementById('getImage4');
            if (Image_Id.src.match("images/placeholder-image4.png")) {
                Image_Id.src = "images/park.png";
                document.querySelectorAll('.showImageRowFour').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image4.png";
            }
        }

// click on park to replace the 5th placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithParkRowFive = document.querySelectorAll('.parkRowFive')

        Array.from(replaceImageWithParkRowFive).forEach(element => element.addEventListener('click', switchWithParkRowFive))

        function switchWithParkRowFive(click){
            let Image_Id = document.getElementById('getImage5');
            if (Image_Id.src.match("images/placeholder-image5.png")) {
                Image_Id.src = "images/park.png";
                document.querySelectorAll('.showImageRowFive').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image5.png";
            }
        }

// --- SPEECH THERAPY PICTURE --

// click on speech therapy to replace the 1st placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithSpeechTherapyRowOne = document.querySelectorAll('.speechTherapyRowOne')

        Array.from(replaceImageWithSpeechTherapyRowOne).forEach(element => element.addEventListener('click', switchWithSpeechTherapyRowOne))

        function switchWithSpeechTherapyRowOne(click){
            let Image_Id = document.getElementById('getImage1');
            if (Image_Id.src.match("images/placeholder-image1.png")) {
                Image_Id.src = "images/speech therapy_3.png";
                document.querySelectorAll('.showImageRowOne').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image1.png";
            }
        }

// click on speech therapy to replace the 2nd placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithSpeechTherapyRowTwo = document.querySelectorAll('.speechTherapyRowTwo')

        Array.from(replaceImageWithSpeechTherapyRowTwo).forEach(element => element.addEventListener('click', switchWithSpeechTherapyRowTwo))

        function switchWithSpeechTherapyRowTwo(click){
            let Image_Id = document.getElementById('getImage2');
            if (Image_Id.src.match("images/placeholder-image2.png")) {
                Image_Id.src = "images/speech therapy_3.png";
                document.querySelectorAll('.showImageRowTwo').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image2.png";
            }
        }

// click on speech therapy to replace the 3rd placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithSpeechTherapyRowThree = document.querySelectorAll('.speechTherapyRowThree')

        Array.from(replaceImageWithSpeechTherapyRowThree).forEach(element => element.addEventListener('click', switchWithSpeechTherapyRowThree))

        function switchWithSpeechTherapyRowThree(click){
            let Image_Id = document.getElementById('getImage3');
            if (Image_Id.src.match("images/placeholder-image3.png")) {
                Image_Id.src = "images/speech therapy_3.png";
                document.querySelectorAll('.showImageRowThree').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image3.png";
            }
        }

// click on speech therapy to replace the 4th placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithSpeechTherapyRowFour = document.querySelectorAll('.speechTherapyRowFour')

        Array.from(replaceImageWithSpeechTherapyRowFour).forEach(element => element.addEventListener('click', switchWithSpeechTherapyRowFour))

        function switchWithSpeechTherapyRowFour(click){
            let Image_Id = document.getElementById('getImage4');
            if (Image_Id.src.match("images/placeholder-image4.png")) {
                Image_Id.src = "images/speech therapy_3.png";
                document.querySelectorAll('.showImageRowFour').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image4.png";
            }
        }

// click on speech therapy to replace the 5th placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithSpeechTherapyRowFive = document.querySelectorAll('.speechTherapyRowFive')

        Array.from(replaceImageWithSpeechTherapyRowFive).forEach(element => element.addEventListener('click', switchWithSpeechTherapyRowFive))

        function switchWithSpeechTherapyRowFive(click){
            let Image_Id = document.getElementById('getImage5');
            if (Image_Id.src.match("images/placeholder-image5.png")) {
                Image_Id.src = "images/speech therapy_3.png";
                document.querySelectorAll('.showImageRowFive').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image5.png";
            }
        }

// --- LUNCH PICTURE --

// click on lunch to replace the 1st placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithLunchRowOne = document.querySelectorAll('.lunchRowOne')

        Array.from(replaceImageWithLunchRowOne).forEach(element => element.addEventListener('click', switchWithLunchRowOne))

        function switchWithLunchRowOne(click){
            let Image_Id = document.getElementById('getImage1');
            if (Image_Id.src.match("images/placeholder-image1.png")) {
                Image_Id.src = "images/lunch.png.variant-medium.png";
                document.querySelectorAll('.showImageRowOne').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image1.png";
            }
        }

// click on lunch to replace the 2nd placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithLunchRowTwo = document.querySelectorAll('.lunchRowTwo')

        Array.from(replaceImageWithLunchRowTwo).forEach(element => element.addEventListener('click', switchWithLunchRowTwo))

        function switchWithLunchRowTwo(click){
            let Image_Id = document.getElementById('getImage2');
            if (Image_Id.src.match("images/placeholder-image2.png")) {
                Image_Id.src = "images/lunch.png.variant-medium.png";
                document.querySelectorAll('.showImageRowTwo').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image2.png";
            }
        }

// click on lunch to replace the 3rd placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithLunchRowThree = document.querySelectorAll('.lunchRowThree')

        Array.from(replaceImageWithLunchRowThree).forEach(element => element.addEventListener('click', switchWithLunchRowThree))

        function switchWithLunchRowThree(click){
            let Image_Id = document.getElementById('getImage3');
            if (Image_Id.src.match("images/placeholder-image3.png")) {
                Image_Id.src = "images/lunch.png.variant-medium.png";
                document.querySelectorAll('.showImageRowThree').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image3.png";
            }
        }

// click on lunch to replace the 4th placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithLunchRowFour = document.querySelectorAll('.lunchRowFour')

        Array.from(replaceImageWithLunchRowFour).forEach(element => element.addEventListener('click', switchWithLunchRowFour))

        function switchWithLunchRowFour(click){
            let Image_Id = document.getElementById('getImage4');
            if (Image_Id.src.match("images/placeholder-image4.png")) {
                Image_Id.src = "images/lunch.png.variant-medium.png";
                document.querySelectorAll('.showImageRowFour').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image4.png";
            }
        }

// click on lunch to replace the 5th placeholder image that was clicked with that picture and hide the other pictures

const replaceImageWithLunchRowFive = document.querySelectorAll('.lunchRowFive')

        Array.from(replaceImageWithLunchRowFive).forEach(element => element.addEventListener('click', switchWithLunchRowFive))

        function switchWithLunchRowFive(click){
            let Image_Id = document.getElementById('getImage5');
            if (Image_Id.src.match("images/placeholder-image5.png")) {
                Image_Id.src = "images/lunch.png.variant-medium.png";
                document.querySelectorAll('.showImageRowFive').forEach(x=>x.classList.toggle('hidden'));
            }
            else {
                Image_Id.src = "images/placeholder-image5.png";
            }
        }