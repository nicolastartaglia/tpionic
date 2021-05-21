// Cette fois, nous utilisons le descripteur et modifions sa valeur avec
// notre propre méthode, puis nous renvoyons le descripteur modifié.

export function MethodHijacker() {
  return function (target, propertyKey, descriptor) {
      descriptor.value = function () {
          console.log("All your base are belong to us")
      }
      return descriptor;
  }
}

// home.ts

// @MethodHijacker() // MethodDecorator
// sayGoodBye() {
//   console.log("Good bye");
// }

// ngOnInit(){
// this.sayGoodBye();
// }
