# Unexpected Type Error with 'undefined' and 'null' in TypeScript

This example demonstrates a common error in TypeScript related to type checking of null and undefined values.  The function `printName` expects a string or null. While it correctly handles a null value, it throws an error if you try to pass an undefined value. This behavior is due to TypeScript's strict type system, which doesn't automatically consider undefined as a subtype of null.

The solution involves using the | operator to explicitly include undefined in the type definition. 

This repository contains:
- `bug.ts`: Demonstrates the problem.
- `bugSolution.ts`: Shows the corrected code.