System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var Dog = exports('default', /** @class */ (function () {
                function Dog() {
                }
                Dog.prototype.bark = function () {
                    console.log("woof woof");
                };
                return Dog;
            }()));

        })
    };
}));
//# sourceMappingURL=Dog-d7912478.js.map
