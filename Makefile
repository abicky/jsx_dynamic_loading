all:
	jsx  --executable web main.jsx > main.js
	jsx  Programmer.jsx > Programmer.js
	jsx  Designer.jsx > Designer.js

clean:
	rm *.js *~
