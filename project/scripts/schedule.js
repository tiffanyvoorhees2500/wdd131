/* ------------------------------------------------ */
/* CONSTANTS */
/* ------------------------------------------------ */
const scheduleCard = document.getElementById("scheduleCard");
const daySelector = document.getElementById("daySelector");

/* ------------------------------------------------ */
/* DATA ARRAYS */
/* ------------------------------------------------ */
let scheduledLessons = {
    // Lessons start Monday (1) - Friday(5) 9AM - 7:30PM
    9 : {"Monday": "Tiffany Voorhees"},
    11 : {"Wednesday": "Child in Array"}
};


/* ------------------------------------------------ */
/* JUST RUN ME NOW */
/* ------------------------------------------------ */



/* ------------------------------------------------ */
/* FUNCTIONS */
/* ------------------------------------------------ */
function createScheduleCard(){
    // Clear preivous card HTML
    scheduleCard.innerHTML = "";

    let value = daySelector.value;

    // Hold time of the day I teach piano from 9AM to 7:30PM at 30 minute intervals
    const startHour = 9;
    const endHour = 19.5;
    const interval = 0.5;

    //Unordered List to hold times and appointments
    let list = document.createElement("ul");

    for(let hour = startHour; hour <= endHour; hour += interval){
        // Format Time as needed
        let timeFloat = hour;
        let displayTime;
        let timePeriod;
        if(timeFloat < 12){
            timePeriod = "AM";
            displayTime = timeFloat;
        }else{
            timePeriod = "PM";
            displayTime = timeFloat < 13 ? timeFloat : timeFloat - 12;
        }
        displayTime = displayTime % 1 === 0 ? `${Math.floor(displayTime)}:00` : `${Math.floor(displayTime)}:30`;
        
        // Create the time for list-item
        let itemTime = document.createElement("div");
        itemTime.classList.add("item-time");
        itemTime.textContent = `${displayTime} ${timePeriod}`;
        
        // Create a button to schedule and delete for list item
        let submitButton; //Element build if appointment not in local storage
        let localElement; //Element is only built if appointment in local storage
        let deleteButton; //Delete button only built if appointment in local storage
        let editName; //Edit name only if appointment in local storage or in javascript array, but disabled if not in local storage
        
        //Get local storage values to see what current client has scheduled.
        const clientAppointment = localStorage.getItem(hour);
        const clientObject = JSON.parse(clientAppointment);

        // Create elements needed for card
        if((hour in scheduledLessons && value in scheduledLessons[hour]) || ((clientObject) && value in clientObject)){
            localElement = document.createElement("div");
            localElement.classList.add("item-student-section")
            editName = document.createElement("input");
            editName.setAttribute("type","text");
            editName.classList.add("item-student");
            if(scheduledLessons[hour] && value in scheduledLessons[hour]){
                editName.setAttribute("disabled","disabled");
                editName.value = scheduledLessons[hour][value];
            }else if(value in clientObject){
                editName.value = clientObject[value];
                deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.classList.add("delete-btn");
                deleteButton.addEventListener("click", deleteAppointment)
            }
        }else{
            submitButton = document.createElement("button");
            submitButton.classList.add("schedule-btn");
            submitButton.textContent = "Schedule";
            submitButton.addEventListener("click",scheduleAppointment);
        }

        // Append items to list-item element
        let listItem = document.createElement("li");
        listItem.appendChild(itemTime);
        if(localElement){
            localElement.appendChild(editName);
            if(deleteButton){
                localElement.appendChild(deleteButton);
            }
            listItem.appendChild(localElement);
        }
        if(submitButton){
            listItem.appendChild(submitButton);
        }

        //Append listItem to list
        list.appendChild(listItem);
    }
    //Append list to card
    scheduleCard.appendChild(list);
}

function scheduleAppointment(el){
    const row = el.target.closest("li");
    const time = row.querySelector(".item-time").textContent;
    const day = daySelector.value;
    const studentName = prompt(`Enter name of student for ${day} @ ${time}`);

    timeKey = time.slice(0, time.indexOf(":"));
    timeEnding = time.slice(time.indexOf(":") + 1, time.indexOf(":") + 3);
    if(timeEnding === "30"){
        timeKey = parseInt(timeKey) + 0.5;
    }

    localItem = localStorage.getItem(timeKey);
    currentLocalItemObject = JSON.parse(localItem);
    
    // console.log(Object.keys(currentLocalItemObject)[0]);
    if(localItem){
        currentLocalItemObject[`${day}`] = `${studentName}`;
        localStorage.setItem(timeKey, JSON.stringify(currentLocalItemObject));
    }else{
        localStorage.setItem(timeKey, `{"${day}": "${studentName}"}`);
    }

    createScheduleCard();
}

function deleteAppointment(el){
    const row = el.target.closest("li");
    const time = row.querySelector(".item-time").textContent;
    const day = daySelector.value;

    timeKey = time.slice(0, time.indexOf(":"));
    timeEnding = time.slice(time.indexOf(":") + 1, time.indexOf(":") + 3);
    if(timeEnding === "30"){
        timeKey = parseInt(timeKey) + 0.5;
    }

    localItem = localStorage.getItem(timeKey);
    currentLocalItemObject = JSON.parse(localItem);
    
    // console.log(Object.keys(currentLocalItemObject)[0]);
    delete currentLocalItemObject[`${day}`];
    localStorage.setItem(timeKey, JSON.stringify(currentLocalItemObject));

    createScheduleCard();
}

/* ------------------------------------------------ */
/* EVENT LISTENERS */
/* ------------------------------------------------ */    
daySelector.addEventListener("change", createScheduleCard);
    