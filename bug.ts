function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  }
}

printName(null); // This will execute correctly
printName(undefined); // This will throw an error because 'undefined' is not assignable to 'string | null'