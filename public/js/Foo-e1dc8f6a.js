System.register([], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            var Foo = exports('F', /** @class */ (function () {
                function Foo() {
                    console.log("this is foo");
                }
                return Foo;
            }()));

        })
    };
}));
//# sourceMappingURL=Foo-e1dc8f6a.js.map
