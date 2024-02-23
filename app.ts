// lower case
let personName: string ="khizra";
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toLocaleUpperCase());

// titile case
console.log("titilecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
