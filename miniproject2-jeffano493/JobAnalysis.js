const dataset = require("./upwork_jobs.json");

//Function to find the time the article was posted
let durationPosted = function(input)
{
    //Stores the "Posted Time" into the tempArray after removing the spaces
    let tempArray = input.Posted.split(" ");

    //Stores just the time of his Posted Time into the time variable
    let time = tempArray[0];

    //Checks if the "Posted Time" contains hour or hours and multiplies it by 60 for the minute
    if (input.Posted.includes('hours') || input.Posted.includes('hour'))
    {
        time *= 60;
    }
    return time;
}

let findingAnother = function(input)
{
    let tempArray = input.Posted.split(" ");
    let time = tempArray[0];

    if (input.Posted.includes('hours') || input.Posted.includes('hour'))
    {
        time *= 60;
    }

    let topTimeArray = job.Posted.split(" ");
    let topTime = topTimeArray[0] * 60;
    if (time == topTime)
    {
        return true;
    }
}

function filter (dataset, findingAnother)
{
    let output = "";
    for (let element of dataset)
    {
        if (findingAnother(element))
        {
            output += element.Title + "\n";
        }
    }
    return output;
}

let job = (dataset.reduce((a, b) => {return durationPosted(a) < durationPosted(b) ? b : a;}));

let answer = (filter(dataset, findingAnother));
console.log(answer)