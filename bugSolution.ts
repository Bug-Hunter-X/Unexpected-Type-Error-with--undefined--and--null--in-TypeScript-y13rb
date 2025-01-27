function printName(name: string | null | undefined): void {
  if (name) {
    console.log(name.toUpperCase());
  }
}

printName(null); // This will execute correctly
printName(undefined); // This will also execute correctly now