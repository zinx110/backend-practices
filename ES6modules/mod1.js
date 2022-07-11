// const commonModule = require("./mod2");

// commonModule();

// ES6 module (Need to change type to "module" in package.json)

import func, { func1, func2, func3, func4 as funcFour } from "./mod3.mjs";

func1();
func2();
func3();
funcFour();
!func.func5 && func(); //if single function as default

func.func5 && func.func5(); //if multiple function as default in a group
func.func6 && func.func6(); //if multiple function as default in a group
