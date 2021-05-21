
const docData={
	"Brief History": `
		Enigma is a cipher device developed and used in the early- to mid-20th century to protect commercial, 
	diplomatic, and military communication. That's the formel answer if you are asking what the hell is 
	Enigma anyway? But here we've developped a an Enigma Interpreter and we called such a thing because of 
	the amount of math it's built on and it's use simplicity. Generally, when we talk about math we often 
	link it up to complexity, well that's where Enigma comes in, it's just the right tool to bypass this 
	misleading view. In this documentation, we try to keep it sample by explainning in great details each 
	concept and ensuring that you know how to use it in your field using examples. 
 		While using Enigma Interpreter just keep in mind this: "We have built Enigma because we are problem 
		solvers so please use this tool to solve problems"`,
	"Enigma Interpreter": {
		"Operators(Arithemitic+Logical)" :`
				Enigma Interpreter supports all different kind of arithmetic operators that others languages 
				use, and here's a table of all the ops that are supported:
				[[
				+, -, /, *		**Addition, Substraction, Division, Multiplication ***
				^				**Power ***
				%				**Modulus ***
				//				**Whole part of auclidien division ***
				!				**Factorial ***
				&& 				**And ***
				|| 				**Or ***
				| 				**Bitwise Or ***
				& 				**Bitwise And ***
				~ 				**Bitwise Not ***
				>, <, >=, <=, 	**Greater than, less than, gt or equal, lt or equal ***
				==, != 			**Equal, not equal ***
				=				**Assignement ***
				++, --, +=x,-=x	**Increment, decrement, increment by, decrement by certain number x
				]]
				`,
		"Variables":{
			"Naming conventions": `
					As convention, Enigma variables must follow the same rules as other programming languages, 
					in other words, they have to start with a letter or underscore and not a number, 
				for example:
				[[
				x, value , name, time_0, data_0a are valid Enigma variables while 2_a, 1d are not valid 
				variables so the interpreter will echo an error in such a case.]]`,
			"Types": {
				"Numbers":{
						"Enigma consider numbers as real numbers and their use is of couse straight forward, for example: x=0 degree=100.023 hash=0xfafffaafffa bool=1 Enigma supports a variaty of numbers formats:": "",
						"Decimals":`
								These are the numbers humans are familiar with, it's base 10(digits from 0->9)
								, these include numbers like:
								[[
								100, 100.23, 1.14, 2021 and so on...]]`,
						"Hexadecimals":`
								These are the most loved numbers by programmers so excluding them would be a 
								strange thing to do, this is the base 16, it uses digits from 0 to 9 plus 
								letters from a to e, basically 16 values. These numbers include numbers like:
								[[
								0xffffff, 0xf100f, 0x1e1e11e, 0xabcde09...
								]]`, 
						"Octals":`
								This is base 8, it uses digits from 0 up to 7, they are uses like:
									[[
									0o17003, 0o1165, ....
									]]`
				},
				"Booleans":`
						Boolean type are true or false:
						[[
						accepted=true ***
						right=false ***
						flag=true
						]]`,
				"Strings":`
						Most of the time we deal with strings as data type, strings on Enigma are no different 
					from other programming languages, here's how to use them:
					[[
					phrase="I got lucky today!" *** 
					word='El Ouali is the creator of enigma'
					]]
					As you might have noticed, you can use single or double quotes both do the trick.`,
				"Matrices":`
						Enigma uses the Matrix data type to hold collection of numerical data and manipulate 
					that data in an easy way here how to use it:
					[[
					I=[1, 0; 0, 1] *** 
					O=[2, 34; 23 -1] ***
					S=O-I ***
					P=O*I ***
					A=2*I+O ***
					T=*O ***
					D=I/2 ***  
					^(power), *(product), +(sum), -(sub), /(div by a number), ~(inverse)) are 
					the operators you can use on matrices.
					]]`,
				"None": `
					Enigma uses this data type to represent no value.
					noValue=None`,
				"Objects":`
					Last but not least the kings of Object Oriented Programming(OOP), Enigma lets define your 
					own objects, I am sure OOP is big topic but we're not going to dig down in it, that's not 
					the purpose. To use Enigma, knowing JSON is more than enough, here's an example:
					[[
					car={"wheels": 4, "milesAge": 2000, "color": "black"} ***
					num=car.wheels mAge=car.milesAge/9
					]]`
			},
			"Variables use":{
					"Variables are powerfull feature for storing data in any programming language, Enigma lets you manipulate variables in same fashion but in a flexible way like: t=2.2 M=[-t, t/34 cos(t), sin(cos(t-2))]": "",
					"Commands":`
						[[
							$forget(x)// forget a variable it's no longer in memory ***
							$variables//List a table of all the variables in use so far
						]]
					`
			}
		},
		"Printing data":`
				Unlike other programming languages, you would have to explicitly call a function in order to 
			print a variable to the screen, Enigma does that for you, for example to check the value of X, 
			just throw X into the interpreter and it'll echo back it's value and it goes the same expression 
			like:
			[[
			x=21 ***
			x//will throw 21 ***
			f(x)=cos(sin(1-cos(x))) *** 
			f(f(1-f(2021)))// will throw back the exact value no function needed
			]]`,
		"Enigma functions features" :{
			"Math Feature":`
				This feature is purelly mathematical here's the syntax:
					[[
					functionName(variable_1, variable_2, ..., variable_n)=Expression
					]]
					Examples:
					[[
					G(p)=1/p *** 
					H(x, y)=x^2+y^2-1 *** 
					S(m)=1/(1-m)+cos(m) 
					]]
					No return value type is needed fairely sample, Enigma does all the rest from determining 
					the definition domaine of the function to plot it if needed.
				Of course there are some limitations to this feature that the next one solve, these are things 
				like:
					[[
					*/No Recursion***
					**/ One Line Code***
					]]
					Just a tip, when dealing with mathematical functions and analyzing data, this type is 
					perfect for you but in case of writing more code into your function, consider using the 
					next feature. `,
			"Enigma Functions":`
				This is the way functions are defined in Enigma, here's the syntax:
				[[
				functionName(x){***
					//Some valid enigma code***
				}
				]]`
			},
		"Built In Functions And Constants":{
			"Enigma supports a range of built in functions/modules and constants": "",
			"Constants": `
				[[
				Constant	**Description***
				E	**Returns Euler's number (approx. 2.718)***
				LN2	**Returns the natural logarithm of 2 (approx. 0.693)***
				LN10	**Returns the natural logarithm of 10 (approx. 2.302)***
				LOG2E	**Returns the base-2 logarithm of E (approx. 1.442)***
				LOG10E	**Returns the base-10 logarithm of E (approx. 0.434)***
				PI	**Returns PI (approx. 3.14)***
				SQRT1_2	**Returns the square root of 1/2 (approx. 0.707)***
				SQRT2	**Returns the square root of 2 (approx. 1.414)***

				MAX_VALUE	**Returns the largest number possible in JavaScript***
				MIN_VALUE	**Returns the smallest number possible in JavaScript***
				NEGATIVE_INFINITY	**Represents negative infinity (returned on overflow)***
				NaN	**Represents a "Not-a-Number" value***
				POSITIVE_INFINITY	**Represents infinity (returned on overflow)
				]]
			`,
			"Modules":{
				"Math": `
				[[
					Function**	Description***
					abs(x)**	Returns the absolute value of x***
					acos(x)**	Returns the arccosine of x, in radians***
					acosh(x)**	Returns the hyperbolic arccosine of x***
					asin(x)**	Returns the arcsine of x, in radians***
					asinh(x)**	Returns the hyperbolic arcsine of x***
					atan(x)**	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians***
					atan2(y, x)**	Returns the arctangent of the quotient of its arguments***
					atanh(x)**	Returns the hyperbolic arctangent of x***
					cbrt(x)**	Returns the cubic root of x***
					ceil(x)**	Returns x, rounded upwards to the nearest integer***
					clz32(x)**	Returns the number of leading zeros in a 32-bit binary representation of x***
					cos(x)**	Returns the cosine of x (x is in radians)***
					cosh(x)**	Returns the hyperbolic cosine of x***
					exp(x)**	Returns the value of Ex***
					expm1(x)**	Returns the value of Ex minus 1***
					floor(x)**	Returns x, rounded downwards to the nearest integer***
					fround(x)**	Returns the nearest (32-bit single precision) float representation of a number***
					log(x)**	Returns the natural logarithmof x***
					log10(x)**	Returns the base-10 logarithm of x***
					log1p(x)**	Returns the natural logarithm of 1 + x***
					log2(x)**	Returns the base-2 logarithm of x***
					max(x, y, z, ..., n)**	Returns the number with the highest value***
					min(x, y, z, ..., n)**	Returns the number with the lowest value***
					pow(x, y)**	Returns the value of x to the power of y***
					random()**	 a random number between 0 and 1***
					round(x)**	Rounds x to the nearest integer***
					sign(x)**	Returns the sign of a number (checks whether it is positive, negative or zero)***
					sin(x)**	Returns the sine of x (x is in radians)***
					sinh(x)**	Returns the hyperbolic sine of x***
					sqrt(x)**	Returns the square root of x***
					tan(x)**	Returns the tangent of an angle***
					tanh(x)**	Returns the hyperbolic tangent of a number***
					trunc(x)**	Returns the integer part of a number (x)***

					isFinite()	**Checks whether a value is a finite number***
					isInteger()	**Checks whether a value is an integer***
					isNaN()	**Checks whether a value is Number.NaN***
					isSafeInteger()	**Checks whether a value is a safe integer***
					toExponential(x)	**Converts a number into an exponential notation***
					toFixed(x)	**Formats a number with x numbers of digits after the decimal point***
					toLocaleString()	**Converts a number into a string, based on the locale settings***
					toPrecision(x)	**Formats a number to x length***
					toString()	**Converts a number to a string***
					valueOf()	**Returns the primitive value of a number
				]]
				`
			}
		}, 
		"Enigma Fundamentals":{
				"Variables": `
						To define a variable for later use, use the assignement operator = like:
					[[
					x=23 *** 
					y=3994 ***
					name="El Ouali" *** 
					gotIt=true ***
					m=x-1 ***
					t=name + " Mohammed" *** 
					name=name*23
					]]
					Before you use any variable you must initialize it, otherwise the interpreter will throw 
					an error.`,
				"Constructing strings with variables":`
						Sometimes you need to inject a variable inside of a string, to do that here's the 
						syntax:
					[[
					x=2.2 ***
					value="the value of x is \${x}"
					]]`
			}
		},
	"Numerical Computing": "Will be built soon",
	"Hacking With Enigma": "Will be built soon",
	"Graphs": "Will be built soon"
}

export default docData;
