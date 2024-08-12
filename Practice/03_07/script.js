/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const phone = {
    model: "Galaxy S-21 5G",
    model_name: "SM-G991U",
    apps: {
        snapchat: {
            username: "LFC_96",
            snapscore: 124356
        },
        facebook: {
            username: "The_Dude",
        }
    }

};

console.log("Model:", phone.model)
console.log("Model Name:", phone["model_name"])