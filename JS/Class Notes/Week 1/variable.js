// Basic Data Types

/* Here are the basic data types you'll encounter in JavaScript:

    //Numbers: Used for both integers and floating-point numbers.
    //Strings: Used for text, enclosed in single ('') or double ("") quotes.
    //Booleans: Represents true or false values.
    //Undefined: A variable that has been declared but not assigned a value.
   // Null: Represents the intentional absence of any value.
    //Symbol: A unique and immutable value, used to create unique identifiers.
    //BigInt: Used for numbers that are too large to be represented by the Number type. 


/* Primitive and Non-Primitive Data Types in JavaScript */

// In JavaScript, data types are divided into two main categories: primitive and non-primitive (also known as reference) data types. Understanding the differences between these two categories is crucial for effective programming, as they affect how data is stored and manipulated.

//Primitive Data Types

// Primitive data types are the most basic kinds of data in JavaScript. They are immutable, meaning their actual value cannot be changed. When you manipulate a primitive data type, you are working with the actual value stored in the variable, not a reference to that value.


//Characteristics of Primitive Data Types:

    //Immutable: You cannot change the actual value of a primitive data type. For example, if you change a string, you are creating a new string rather than modifying the original.
   // Stored by Value: When you assign a primitive value from one variable to another, the actual value is copied. Therefore, changing the value in one variable does not affect the other.

//Non-Primitive (Reference) Data Types

//Non-primitive data types are more complex and include objects and arrays. These types are mutable, meaning their contents can change after they are created. Non-primitive data types are also stored by reference, meaning variables store a reference (or address) to the actual data, not the data itself.

    
//Characteristics of Non-Primitive Data Types:

   // Mutable: The contents of objects and arrays can be changed. For example, you can add, delete, or modify properties in an object or elements in an array.
    //Stored by Reference: When you assign an object or array from one variable to another, they both reference the same underlying data. Thus, changes made through one variable affect the data accessed through the other.

    // Understanding the difference between primitive and non-primitive data types is key to avoiding common pitfalls in JavaScript. Knowing that primitives are immutable and stored by value, while non-primitives are mutable and stored by reference, helps you manage data more effectively and predict the behavior of your code.



// string
 let myString = "Go"
// Boolean
 let myBool = true;
 let myBool2 = false;
// undefined
let myHoney; 
// in a variable is assigned but has no value

// absent vaule
let myNully =  null;

let myFirstName = "Divan"
let myLastName = "Jones"
let myMaritaStatus = "single";
let myCountry = "USA";
let myAge = 46;
console.log(typeof myFirstName, myLastName);

let myGOku;
let myVegeta;
let myGohan;
let myBroly;

//let myAge = 46;
let yourAge = 45;
console.log(myAges, yourAge)