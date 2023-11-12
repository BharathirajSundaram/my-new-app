let userData = {
    name: "Bharathiraj Sundaram",
    courseDetails: "Full Stack Development - MERN",
    institute: "GUVI",
    mobileNumber: 8667366326,
    residentCity: "Coimbatore"
}

let keys = Object.keys(userData);
//console.log(keys)

//Using for loop
for (i = 0; i < keys.length; i++) {
    let keyValue = keys[i];
    console.log(userData[keyValue])
}


//Using for in

for (const key in userData) {
    console.log(userData[key]);
}

let users = ['Bharathiraj', 'John', 'Hemanth']
for (const key in users) {


    console.log(users[key])
}


//Using for of

for (const key of users) {
    console.log(">>>>>>>>>>>>"+key);
}


//using forEach
keys.forEach((value)=>{
    console.log(userData[value])
})

//Resume data

let myResume={
    "basics": {
      "name": "Bharathiraj Sundaram",
      "email": "sbharathiraj12@gamil.com",
      "phone": 8667366326,
      "degree": "B.E",
      "location": {
        "address": "5/C-2,Balaji Garden,Bayappanoor Road",
        "postalCode": 641305,
        "city": "Coimbatore",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/bharathiraj-sundaram-1b7b4692/",
          "github":"https://github.com/BharathirajSundaram"
        }
      ]
    },
    "work": [
      {
        "company": "Infovision",
        "position": "Software Engineer",
        "startDate": "2022-09-27",
        "endDate": "Present",
        "summary": "Automation Engineer handled both web and desktop",
      },
    ],
    "education": [
      {
        "institution": "Info Institute of Engineering",
        "department": "Computer Science & Engineering",
        "studyType": "fulltime",
        "batch start year": 2007,
        "batch end year": 2011,
        "gpa": 6.5,
      }
    ],
    "skills": [
      {
        "name": "javascript",
        "level": "beginner",
        "project": {
          "project1":"none",
        }
      }
    ],
    "languages": [
      {
        "language": "Tamil,English",
      }
    ],
    "interests": [
      {
        "name": "Playing football",
      }
    ]
  }
  console.log(myResume);
  