
Union Types (|) allow a variable to hold values of multiple types:


let value: string | number;
value = "Hello";  // Valid
value = 42;       // Valid
value = true;     // Error: Type 'boolean' is not assignable to type 'string | number'


Intersection Types (&) combine multiple types into one:

interface Person {
  name: string;
  age: number;
}

interface Address {
  street: string;
  city: string;
}

type PersonWithAddress = Person & Address;

const person: PersonWithAddress = {
  name: "John",
  age: 30,
  street: "123 Main St",
  city: "Cityville"
};
Union types provide flexibility with different types, while intersection types combine multiple types into a single, more complex type.