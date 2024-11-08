function getProperty<T, K extends keyof T>(obj: T, propName: K): T[K] {
    return obj[propName];
  }
  
  // Sample Input:
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));  // Output: Alice
  