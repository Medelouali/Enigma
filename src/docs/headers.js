
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
		"Semicolons": `
			Any Enigma command must end with a semicolon, otherwise it's throw an error.
			Thus you can chain multiple commands on single line which is very cool like:
			x=23; t=x-23; w=x*t; val=cos(sin(1/x));`,
		"Operators(Arithemitic+Logical)" :`
				Enigma Interpreter supports all different kind of arithmetic operators that others languages 
				use, and here's a table of all the ops that are supported:
				+, -, /, *		Addition, Substraction, Division, Multiplication
				^				Power
				%				Modulus
				//				Whole part of auclidien division
				!				Not/Negation Or Factorial
				&& 				And
				|| 				Or
				| 				Bitwise Or
				& 				Bitwise And
				~ 				Bitwise Not
				>, <, >=, <=, 	Greater than, less than, gt or equal, lt or equal
				==, != 			Equal, not equal
				=				Assignement
				++, --, +=x,-=x	Increment, decrement, increment by, decrement by certain number x
				`,
		"Variables":{
			"Naming conventions": `
					As convention, Enigma variables must follow the same rules as other programming languages, 
					in other words, they have to start with a letter or underscore and not a number, 
				for example:
				x, value , name, time_0, data_0a are valid Enigma variables while 2_a, 1d are not valid 
				variables so the interpreter will echo an error in such a case.`,
			"Types": {
				"Numbers":{
						"Enigma consider numbers as real numbers and their use is of couse straight forward, for example: x=0; degree=100.023; hash=0xfafffaafffa; bool=1; Enigma supports a variaty of numbers formats:": "",
						"Decimals":`
								These are the numbers humans are familiar with, it's base 10(digits from 0->9)
								, these include numbers like:
								100, 100.23, 1.14, 2021 and so on...`,
						"Hexadecimals":`
								These are the most loved numbers by programmers so excluding them would be a 
								strange thing to do, this is the base 16, it uses digits from 0 to 9 plus 
								letters from a to e, basically 16 values. These numbers include numbers like:
								0xffffff, 0xf100f, 0x1e1e11e, 0xabcde09...`, 
						"Octals":`
								This is base 8, it uses digits from 0 up to 7, they are uses like:
									0o17003, 0o1165, ....`
				},
				"Booleans":`
						Boolean type are true or false:
					accepted=true; 
					right=false; 
					flag=true;`,
				"Strings":`
						Most of the time we deal with strings as data type, strings on Enigma are no different 
					from other programming languages, here's how to use them:
					phrase="I got lucky today!"; 
					word='El Ouali is the creator of enigma';
					As you might have noticed, you can use single or double quotes both do the trick.`,
				"Matrices":`
						Enigma uses the Matrix data type to hold collection of numerical data and manipulate 
					that data in an easy way here how to use it:
					I=[1, 0; 0, 1]; 
					O=[2, 34; 23 -1]; 
					S=O-I; 
					P=O*I; 
					A=2*I+O;
					T=*O; 
					D=I/2  
					^(power), *(product), +(sum), -(sub), /(div by a number), ~(inverse)) are 
					the operators you can use on matrices.`,
				"None": `
					Enigma uses this data type to represent no value.
					noValue=None;`,
				"Objects":`
					Last but not least the kings of Object Oriented Programming(OOP), Enigma lets define your 
					own objects, I am sure OOP is big topic but we're not going to dig down in it, that's not 
					the purpose. To use Enigma, knowing JSON is more than enough, here's an example:
					car={"wheels": 4, "milesAge": 2000, "color": "black"}; num=car.wheels; mAge=car.milesAge/9;`
			},
			"Variables use":{
					"Variables are powerfull feature for storing data in any programming language, Enigma lets you manipulate variables in same fashion but in a flexible way like: t=2.2; M=[-t, t/34; cos(t), sin(cos(t-2))];": "",
					"Commands":`
						$forget(x);// forget a variable it's no longer in memory;
						$variables;//List a table of all the variables in use so far;
					`
			}
		},
		"Printing data":`
				Unlike other programming languages, you would have to explicitly call a function in order to 
			print a variable to the screen, Enigma does that for you, for example to check the value of X, 
			just throw X into the interpreter and it'll echo back it's value and it goes the same expression 
			like:
			x=21; 
			x;//will throw 21
			f(x)=cos(sin(1-cos(x))); 
			f(f(1-f(2021)));// will throw back the exact value no function needed;`,
		"Enigma functions features" :{
			"Math Feature":`
				This feature is purelly mathematical here's the syntax:
					functionName(variable_1, variable_2, ..., variable_n)=Expression;
					Examples:
					G(p)=1/p; 
					H(x, y)=x^2+y^2-1; 
					S(m)=1/(1-m)+cos(m);
					No return value type is needed fairely sample, Enigma does all the rest from determining 
					the definition domaine of the function to plot it if needed.
				Of course there are some limitations to this feature that the next one solve, these are things 
				like:
					*/No Recursion
					**/ One Line Code
					Just a tip, when dealing with mathematical functions and analyzing data, this type is 
					perfect for you but in case of writing more code into your function, consider using the 
					next feature. `,
			"Enigma Functions":`
				This is the way functions are defined in Enigma, here's the syntax:
				functionName(x){
					//Some valid enigma code
				};`
			},
		"Built In Functions":` 
				Enigma supports a range of built in functions, and here's the list:
			cos, sin, tan, floor, arccos, arcsin...., prime(x, y), isPrime(n)...
			basically all the math functions used in JavaScript plus additional functions. Not to mention that
			you can define your own function and use them.`,
		"Enigma Fundamentals":{
				"Variables": `
						To define a variable for later use, use the assignement operator = like:
					x=23; 
					y=3994; 
					name="El Ouali"; 
					gotIt=true; 
					m=x-1; 
					t=name + " Mohammed", name=name*23;
					Before you use any variable you must initialize it, otherwise the interpreter will throw 
					an error.`,
				"Constructing strings with variables":`
						Sometimes you need to inject a variable inside of a string, to do that here's the 
						syntax:
					x=2.2; value="the value of x is \${x}";`
			}
		},

	"Numerical Computing": "Will be built soon",
	"Hacking With Enigma": "Will be built soon",
	"Graphs": "Will be built soon"
};

export default docData;
