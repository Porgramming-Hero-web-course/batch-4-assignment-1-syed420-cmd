// Define the types for Circle and Rectangle with unique shape properties
type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  // Union type for Circle and Rectangle
  type Shape = Circle | Rectangle;
  
  // Function to calculate area using type guards
  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      // Circle area: π * r^2
      return Math.PI * shape.radius ** 2;
    } else {
      // Rectangle area: width * height
      return shape.width * shape.height;
    }
  }
  
  // Sample Input 1:
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);  // Output: 78.53981633974483 (approximately 78.54)
  
  // Sample Input 2:
  const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
  console.log(rectangleArea);  // Output: 24
  