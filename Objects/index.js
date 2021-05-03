//object literal syntax
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log("draw");
  },
};

//factories ------------------
//if key and value are the same, dont repeat

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
// created the circle
const circle = createCircle(1);

//constructor function ------------------
// pascal case
function Circle(radius) {
  (this.radius = radius),
    (this.draw = () => {
      console.log("draw");
    });
}
//creates new circle object
const anotherCircle = new Circle(1);
