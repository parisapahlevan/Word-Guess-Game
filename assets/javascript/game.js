let secreteCountry = ''; // expects a string
let countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]
let countryGuess= ''; // By user
let counter = 10; 
let hits=0;

// returns a random country name
// we need to pick a random index between 0-coutries.length() using random function()
function generateSecreteCountryName(secreteCountry){
    let randomIndex = Math.floor(Math.random() * countries.length);
    return secreteCountry = countries[randomIndex]
}

// This function expects the user input country and the random secrete coutnry and compairs them 
function isSameCountry(secreteCountry, countryGuess){
    if(secreteCountry === countryGuess){
        return true 
    }else{
        return false
    }   
}

//Checked if the input letter from the user is in the secrete country 
// This returns a number: If -1 means didn't find the letter in the secret country otherwise if will return the index of the letter in the secrete country
function findLetterIndexInSecreteCountry(letter){
    return secreteCountry.indexOf(letter)
}

// compairs the 2 county and decides if the user wins
function didUserWin(){
    return isSameCountry(secreteCountry, countryGuess)
}

//This function calls the DOM and find the element by ID then gets the VALUE that is the user input.
function getUserInput(userInputLetter){
    var userInputValue = document.getElementById("userInput").value
    userInputLetter = userInputValue
    return userInputValue
}

//Takes length of the secrete and generates X's
function generateSecreteDisplay(countryLength) {
    let x = ''
    for (let index = 0; index < countryLength; index++) {
        x += 'X'
    }
    return x
}


//
function captureUserInputLetter(e){
    let userInputLetter = e.value
    if(findLetterIndexInSecreteCountry(userInputLetter) == -1 ){
        //means letter was not found
        count--;
    }  

}


//------------------------------------------------------------------------------------------------------------------ RUNING THE PROGRAM

//Step 1:

// Generate a secrete country 
secreteCountry = generateSecreteCountryName(secreteCountry)

// get the secrete country length
let guessLength = secreteCountry.length

// change the lenght of our message
document.getElementById('secret-country-xes').innerHTML =  " Country name is : " + generateSecreteDisplay(guessLength);


















