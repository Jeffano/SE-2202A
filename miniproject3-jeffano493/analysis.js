const fs = require("fs");
const words = require("./words.json");

function getDataPromise(fileName, dataType)
{
    let promise = new Promise((resolve, reject) => 
    {
        fs.readFile(fileName, dataType, (error,data) => 
        {
            if(data)
            {
                resolve(data);
            }
            else
                reject(error);
        });
    });
    return promise;
}

let dataset = [];

//Using Promise to read the article and passing a function if succeessfull and creating a catch statement if there is an arror
let dataPromise = getDataPromise("Optimism_and_your_health.txt", "utf8");
dataPromise.then(result => gettingNumberofWords(result))
            .catch(() => {console.log("File Not Found")});

let dataPromise2 = getDataPromise("results.txt", "utf8");
dataPromise2.then(() => {outputData()})
            .catch(() => {console.log("File Not Found")});

//Initialzing the arrays and setting the counters
let synonyms, related, nearAntonyms, antonyms = [];
let synCounter = 0, relatedCounter = 0, nearAntCounter = 0, antCounter = 0;

//Storing the words from the JSON file into an array
synonyms = words.Synonyms;
related = words.Related;
nearAntonyms = words["Near Antonyms"];
antonyms = words.Antonyms;

//Function to check the number of times the specifc words show up in the article

function gettingNumberofWords (input)
{
    //Input is the full article
    //Dataset is the article wihtout the spaces
    dataset = input.split(" ");

    //For each word in the article(dataset)
    for (let item of dataset)
    {
        //Checks if each word in the synoonyms match up the to first word of the article, if yes, adds to the counter, same 
        //method is used for the other words
        for (let index of synonyms)
        {
            if (item.toLowerCase().includes(index))
            {
                synCounter++;
            }
        }
        for (let index of related)
        {
            if (item.toLowerCase().includes(index))
            {
                relatedCounter++;
            }
        }
        for (let index of nearAntonyms)
        {
            if (item.toLowerCase().includes(index))
            {
                nearAntCounter++;
            }
        }
        for (let index of antonyms)
        {
            if (item.toLowerCase().includes(index))
            {
                antCounter++;
            }
        }
    }
}

//Function to output display the number of times the words occur
function outputData ()
{
    let output = {Synonyms:synCounter, Related:relatedCounter, ["Near Antonyms"]:nearAntCounter, Antonyms:antCounter};
    console.log(JSON.stringify(output));

    fs.writeFile("result.txt", JSON.stringify(output), () => {});
}