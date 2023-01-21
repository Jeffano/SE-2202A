/** The clean point function take an array of objects that represent the coordinates of 3D points
 * some objects in the array may require cleaning to make sure that each object has only 3 properties
 * representing the three coordinates (x, y and z)
 * This function does all the necessary cleaning by removing properties that don't represent the coordinates
 * and if any of the corrdinates was missing it would add it with a value equal to 0
*/

let cleanPoints = function (points){
        
    for (let point of points) // this loop iterates over the elements of the array
    {
        /**
         * A Flag is a boolean variable that you can use to indicate whether a condition is  met (e.g. found or not found)
          * in one part of the code in order to decide on an action in another part of the code.
        */

        // the following three variables are flags to check the existance of the three dimentions in the object
        let xFound=false; 
        let yFound=false;
        let zFound=false;   
        for (let prop in point) // This loop iterates over the properties of each point object
        {
            /**
             * Create a conditional block that checks the name of the property
             * if the name is either x, y or z the corresponding flag should be set to true
             * otherwise the property should be deleted from the object.
             */
            if (prop.includes('x')){
                xFound = true;
            }
            else if(prop.includes('y')){
                yFound = true;
            }
            else if (prop.includes('z')){
                zFound = true;
            }
            else{
                delete point[prop];
            }
        }
        // Now use the flags to check wether the (x, y and z) properties where found
        // if any of them was not found then add it to the object with a value 0
        if (xFound == false){
            point.x = 0;
        }
        if (yFound == false){
            point.y = 0;
        }
        if (zFound == false){
            point.z = 0;
        }
    }
    return points;
}

// Please don't change the values in this array.
let points = [
    {x:5, y:7, z:6},
    {y:17, z:10},
    {y:17},
    {y:17, dist:10},
    {x:5, y:7, z:6, w:9},
    {a:5, b:7, c:6},
    {c:6, x:8, y:5},
    {},
    {x:9},
    {x:5}
];

let points_cleaned = cleanPoints(points);


function printPoint() // this function doesn't take any argument
{
    // Expecting to be use with objects (one object at a time) that have x,y and z properties
    // print the corrdinates and thier values on the console.
    console.log(`x = ${this.x} , y = ${this.y} , z = ${this.z}`)
}

for (let point of points_cleaned) // create a loop that iterates over the elements of the cleaned array
{
    // Execute the printPoint function so that it would print the the point at the current element of the array
    // without changing the structures of the objects themselves. 
    printPoint.call(point);
}