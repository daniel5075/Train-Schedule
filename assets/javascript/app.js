var firebaseConfig = {
    apiKey: "AIzaSyBcF8t512_Q8UreONnrTI_jNxx19E_BgnA",
    authDomain: "traintime-54725.firebaseapp.com",
    databaseURL: "https://traintime-54725.firebaseio.com",
    projectId: "traintime-54725",
    storageBucket: "traintime-54725.appspot.com",
    messagingSenderId: "316344394790",
    appId: "1:316344394790:web:00c16e89f5677bec32b2e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var trainName = "";
var destination = "";
var trainTime = "";
var trainFreq = "";
var dbtrainName = "";
var dbdestination = "";
var dbtrainTime = "";
var dbtrainFreq = "";

$("#submit").on("click", function (event) {

    event.preventDefault();
    trainName = $("#trainName-input").val().trim();
    destination = $("#destination-input").val().trim();
    trainTime = $("#firstTrainTime-input").val().trim();
    trainFreq = $("#howOften-input").val().trim();
    console.log(trainName);

    database.ref().push({

        trainName: trainName,
        destination: destination,
        trainTime: trainTime,
        trainFreq: trainFreq,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    });

});
database.ref().on("child_added", function (childSnapshot) {
    dbtrainName = (childSnapshot.val().trainName);
    dbdestination = (childSnapshot.val().destination);
    dbtrainTime = (childSnapshot.val().trainTime);
    dbtrainFreq = (childSnapshot.val().trainFreq);
    calculateTime()
    console.log("Train Name: " + dbtrainName)
});

function calculateTime() {
    console.log("train Time: " + dbtrainTime)
    var trainTimeConverted = moment(dbtrainTime, "HH:mm").subtract(1, "years");
    console.log("converted time: " + trainTimeConverted);
};


