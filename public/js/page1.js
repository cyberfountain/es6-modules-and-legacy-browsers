System.register(['./Foo-e1dc8f6a.js'], (function () {
	'use strict';
	var Foo;
	return {
		setters: [function (module) {
			Foo = module.F;
		}],
		execute: (function () {

			new Foo();
			console.log("page 1");

		})
	};
}));
//# sourceMappingURL=page1.js.map
