"use strict";


function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}



function capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
 }

    function isNegative(number) {
        if (number < 0){
            return true;
        } else {
            return false;
        }
    }



function toNumber(strNumber) {
    return +strNumber;
}
console.log(toNumber("1234")); // 1234
console.log(toNumber("ACB")); // NaN





    function convertNameToObject(nameString) {
        var nameArray = nameString.split(" ");
        var nameObject = {
            "firstName":nameArray[0],
            "lastName":nameArray[1]
        };
        return nameObject;
    }

    function average(array){
        var array;
        var total = 0;
        for (var i = 0; i < array.length; i++) {
            total += parseInt(array[i]);
        }
        var averageNum = (total / (array.length));
        return(averageNum);
    }




    function countOdds(array){
        var array;
        var oddArray = [];
        for (var i = 0; i < array.length; i++){
            if (array[i] % 2 != 0) {
                oddArray.push(array[i]);
            }
        }
        return(oddArray.length);
    }



//Default values using || operator

//Today in ES6 there is the default argument feature. In order to simulate this feature in old browsers you can use the || (OR operator) by including the default value as a second parameter to be used. If the first parameter returns false the second one will be used as a default value. See this example:

    function User(name, age) {
        this.name = name || "Oliver Queen";
        this.age = age || 27;
    }
        var user1 = new User();
        console.log(user1.name); // Oliver Queen
        console.log(user1.age); // 27

        var user2 = new User("Barry Allen", 25);
        console.log(user2.name); // Barry Allen
        console.log(user2.age); // 25







function fiveTo(number){
        var max = number;
        var newArray = [];
        for (var i = 5; i < max; ++i) {
            newArray.push(i);
        }
        return newArray;
    }




    function upperCaseLastNames(names){
        names.forEach(function(name){
            var firstLetter = name.lastName[0].toUpperCase() + name.lastName.slice(1);
            name.lastName = firstLetter;
        }); return names;





        function square(number) {
            return number * number;
        }

        var square = function(number) { return number * number; };
        var x = square(4); // x gets the value 16






        function map(f, a) {
            var result = []; // Create a new Array
            var i; // Declare variable
            for (i = 0; i != a.length; i++)
                result[i] = f(a[i]);
            return result;
        }
        var f = function(x) {
            return x * x * x;
        }
        var numbers = [0, 1, 2, 5, 10];
        var cube = map(f,numbers);
        console.log(cube);

        function addSquares(a, b) {
            function square(x) {
                return x * x;
            }
            return square(a) + square(b);
        }
        a = addSquares(2, 3); // returns 13
        // b = addSquares(3, 4); // returns 25
        // c = addSquares(4, 5); // returns 41





        //Caching the array.length in the loop

        //This tip is very simple and causes a huge impact on the performance when processing large arrays during a loop. Basically, almost everybody writes this synchronous for to iterate an array:

            for (var i = 0; i < array.length; i++) {
                console.log(array[i]);
            }

        //If you work with smaller arrays – it’s fine, but if you process large arrays, this code will recalculate the size of array in every iteration of this loop and this will cause a bit of delays. To avoid it, you can cache the array.length in a variable to use it instead of invoking the array.length every time during the loop:

            var length = array.length;
        for (var i = 0; i < length; i++) {
            console.log(array[i]);
        }

        //To make it smaller, just write this code:

            for (var i = 0, length = array.length; i < length; i++) {
                console.log(array[i]);
            }




        //Getting the last item in the array

        //The Array.prototype.slice(begin, end) has the power to cut arrays when you set the begin and end arguments. But if you don’t set the end argument, this function will automatically set the max value for the array. I think that few people know that this function can accept negative values, and if you set a negative number as begin argument you will get the last elements from the array:

            var array = [1, 2, 3, 4, 5, 6];
        console.log(array.slice(-1)); // [6]
        console.log(array.slice(-2)); // [5,6]
        console.log(array.slice(-3)); // [4,5,6]



        //Array truncation

        //This technique can lock the array’s size, this is very useful to delete some elements of the array based on the number of elements you want to set. For example, if you have an array with 10 elements, but you want to get only the first five elements, you can truncate the array, making it smaller by setting the array.length = 5. See this example:

            var array = [1, 2, 3, 4, 5, 6];
        console.log(array.length); // 6
        array.length = 3;
        console.log(array.length); // 3
        console.log(array); // [1,2,3]



        //Replace all

        //The String.replace() function allows using String and Regex to replace strings, natively this function only replaces the first occurrence. But you can simulate a replaceAll() function by using the /g at the end of a Regex:

            var string = "john john";
        console.log(string.replace(/hn/, "ana")); // "joana john"
        console.log(string.replace(/hn/g, "ana")); // "joana joana"





        //Merging arrays

        //If you need to merge two arrays you can use the Array.concat() function:

        var array1 = [1, 2, 3];
        var array2 = [4, 5, 6];
        console.log(array1.concat(array2)); // [1,2,3,4,5,6];

        //However, this function is not the most suitable to merge large arrays because it will consume a lot of memory by creating a new array. In this case, you can use Array.push.apply(arr1, arr2) which instead creates a new array – it will merge the second array in the first one reducing the memory usage:

            var array1 = [1, 2, 3];
        var array2 = [4, 5, 6];
        console.log(array1.push.apply(array1, array2)); // [1,2,3,4,5,6];















        function outside(x) {
            function inside(y) {
                return x + y;
            }
            return inside;
        }
        // fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
        //                         // it
        // result = fn_inside(5); // returns 8
        //
        // result1 = outside(3)(5); // returns 8


        var createPet = function(name) {
            var sex;

            return {
                setName: function(newName) {
                    name = newName;
                },

                getName: function() {
                    return name;
                },

                getSex: function() {
                    return sex;
                },

                setSex: function(newSex) {
                    if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
                            newSex.toLowerCase() === 'female')) {
                        sex = newSex;
                    }
                }
            }
        }

        var pet = createPet('Vivie');
        pet.getName();                  // Vivie

        pet.setName('Oliver');
        pet.setSex('male');
        pet.getSex();                   // male
        pet.getName();                  // Oliver





        function myConcat(separator) {
            var result = ''; // initialize list
            var i;
            // iterate through arguments
            for (i = 1; i < arguments.length; i++) {
                result += arguments[i] + separator;
            }
            return result;
        }


        function multiply(a, b) {
            b = typeof b !== 'undefined' ?  b : 1;

            return a * b;
        }

        multiply(5); // 5





        var a = [
            'Hydrogen',
            'Helium',
            'Lithium',
            'Beryllium'
        ];

        var a2 = a.map(function(s) { return s.length; });

        console.log(a2); // logs [8, 6, 7, 9]

        var a3 = a.map(s => s.length);

        console.log(a3); // logs [8, 6, 7, 9]



       // The once function ensures a given function can only be called once, thus prevent duplicate initialization!

        function once(fn, context) {
            var result;

            return function() {
                if(fn) {
                    result = fn.apply(context || this, arguments);
                    fn = null;
                }

                return result;
            };
        }

// Usage
        var canOnlyFireOnce = once(function() {
            console.log('Fired!');
        });

        canOnlyFireOnce(); // "Fired!"
        canOnlyFireOnce(); // nada




        var getAbsoluteUrl = (function() {
            var a;

            return function(url) {
                if(!a) a = document.createElement('a');
                a.href = url;

                return a.href;
            };
        })();

// Usage
        getAbsoluteUrl('/something'); // https://davidwalsh.name/something



        //Converting NodeList to Arrays

//        If you run the document.querySelectorAll("p") function, it will probably return an array of DOM elements, the NodeList object. But this object doesn’t have all array’s functions, like: sort(), reduce(), map(), filter(). In order to enable these and many other native array’s functions you need to convert NodeList into Arrays. To run this technique just use this function: [].slice.call(elements):

        var elements = document.querySelectorAll("p"); // NodeList
        var arrayElements = [].slice.call(elements); // Now the NodeList is an array
        var arrayElements = Array.from(elements); // This is another way of converting NodeList to Array







        //Shuffling array’s elements

        //To shuffle the array’s elements without using any external library like Lodash, just run this magic trick:

            var list = [1, 2, 3];
        console.log(list.sort(function() {
            return Math.random() - 0.5
        })); // [2,1,3]






        //isNative

        //Knowing if a given function is native or not can signal if you're willing to override it.  This handy code can give you the answer:
        ;(function() {

            // Used to resolve the internal `[[Class]]` of values
            var toString = Object.prototype.toString;

            // Used to resolve the decompiled source of functions
            var fnToString = Function.prototype.toString;

            // Used to detect host constructors (Safari > 4; really typed array specific)
            var reHostCtor = /^\[object .+?Constructor\]$/;

            // Compile a regexp using a common native method as a template.
            // We chose `Object#toString` because there's a good chance it is not being mucked with.
            var reNative = RegExp('^' +
                // Coerce `Object#toString` to a string
                String(toString)
                // Escape any special regexp characters
                    .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
                    // Replace mentions of `toString` with `.*?` to keep the template generic.
                    // Replace thing like `for ...` to support environments like Rhino which add extra info
                    // such as method arity.
                    .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
            );

            function isNative(value) {
                var type = typeof value;
                return type == 'function'
                    // Use `Function#toString` to bypass the value's own `toString` method
                    // and avoid being faked out.
                    ? reNative.test(fnToString.call(value))
                    // Fallback to a host object check because some environments will represent
                    // things like typed arrays as DOM methods which may not conform to the
                    // normal native pattern.
                    : (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
            }

            // export however you want
            module.exports = isNative;
        }());

// Usage
        isNative(alert); // true
        isNative(myCustomFunction); // false







        //matchesSelector

        //Oftentimes we validate input before moving forward; ensuring a truthy value, ensuring forms data is valid, etc.  But how often do we ensure an element qualifies for moving forward?  You can use a matchesSelector function to validate if an element is of a given selector match:

        function matchesSelector(el, selector) {
            var p = Element.prototype;
            var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
                return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
            };
            return f.call(el, selector);
        }

// Usage
        matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute=true]')



       // array.push() function examples

        var characters = ['Darth Vader', 'Yoda', 'Boba Fett'];
        var total = characters.push('Luke Skywalker', 'Han Solo');

        console.log(characters); // ["Darth Vader", "Yoda", "Boba Fett", "Luke Skywalker", "Han Solo"]
        console.log(total);      // 5





        var starwars = ['Episode 4: A New Hope',
            'Episode 5: The Empire Strikes Back',
            'Episode 6: Return of the Jedi',
            'Episode 1: The Phantom Menace',
            'Episode 2: Attack of the Clones',
            'Episode 3: Revenge of the Sith',
            'Episode 7: The Force Awakens'];

        console.log(starwars.indexOf('Episode 7: The Force Awakens'));           // 6
        console.log(starwars.indexOf('Episode 3: Revenge of the Sith'));          // 5
        console.log(starwars.indexOf('Episode 2: Attack of the Clones', 3));     // 4
        console.log(starwars.indexOf('Episode 1: The Phantom Menace', -4));   // 3

        var locatedat = [];
        var enemies = ['Kylo Ren', 'Darth Vader', 'Storm Trooper', 'General Hux', 'Emperor Palpatine', 'Storm Trooper'];
        var enemy = 'Storm Trooper';
        var enemylocation = enemies.indexOf(enemy);
        while (enemylocation != -1) {
            locatedat.push(enemylocation);
            enemylocation = enemies.indexOf(enemy, enemylocation + 1);
        }
        console.log(locatedat); //  2, 5



       // array.forEach() function examples


        var planetsAndMoons = ['Alderaan', 'Bespin', 'Coruscant', 'DQar', 'Dagobah', 'Endor', 'Geonosis', 'Hosnian Prime', 'Hoth', 'Jakku', 'Kamino', 'Kashyyyk', 'Lothal', 'Mustafar', 'Naboo', 'Sullust', 'Takodana', 'Tatooine', 'Utapau', 'Yavin', 'Yavin 4'];

        function listPlanets(element, index, array) {
            console.log('planetsAndMoons[' + index + '] = ' + element);
        }
        planetsAndMoons.forEach(listPlanets);





        var numbers = [2, 4, 6];

        numbers.original = [];

        numbers.forEach(function (element, index, numbers) {
            numbers[index] *= 2;
            numbers.original.push(element);
        });

        function listNumbers(element, index) {
            console.log('index' + index + ' has element ' + element);
        }

        numbers.original.forEach(listNumbers);
        numbers.forEach(listNumbers);






        var starwars = ['star wars', 'the phantom menace', 'the force awakens'];
        var swModified = starwars.map(function (element) {
            return element.toUpperCase();
        });

        console.log(swModified);
//   ["STAR WARS", "THE PHANTOM MENACE", "THE FORCE AWAKENS"]


        var one = [3, 5, 7];
        var two = one.map(function (number) {
            return number * number;
        });

        console.log(one); // [3, 5, 7]
        console.log(two); //  [9, 25, 49]

        var str = 'The Clone Wars';
        var arr = Array.prototype.map.call(str, function (el) {
            return el;
        });

        console.log(str); // The Clone Wars
        console.log(arr); //  ["T", "h", "e", " ", "C", "l", "o", "n", "e", " ", "W", "a", "r", "s"]






        var usefulFunctions = ['push', 'indexOf', 'slice', 'toString', 'filter', 'join'];

        console.log('usefulFunctions initially has: ' + usefulFunctions);
//  usefulFunctions initially has: push,indexOf,slice,toString,filter,join

        var firstpop = usefulFunctions.pop();

        console.log('after one pop, usefulFunctions has: ' + usefulFunctions);
//  after one pop, usefulFunctions has: push,indexOf,slice,toString,filter

        var poptwo = usefulFunctions.pop();

        console.log('after two pops, usefulFunctions has: ' + usefulFunctions);
//  after two pops, usefulFunctions has: push,indexOf,slice,toString

        console.log('popone contains: ' + firstpop);
//  popone contains: join

        console.log('poptwo contains: ' + poptwo);
//  poptwo contains: filter





        var skills = [
            {
                name: 'Tom',
                skill: 'CSS',
                yearsExperience: 3,
                category: 'Web Design'
            },
            {
                name: 'Jim',
                skill: 'HTML',
                yearsExperience: 10,
                category: 'Web Design'
            },
            {
                name: 'Sue',
                skill: 'JavaScript',
                yearsExperience: 5,
                category: 'Web Development'
            },
            {
                name: 'Maria',
                skill: 'PHP',
                yearsExperience: 7,
                category: 'Web Development'
            },
            {
                name: 'John',
                skill: 'Photoshop',
                yearsExperience: 1,
                category: 'Web Design'
            },
            {
                name: 'David',
                skill: 'Writing',
                yearsExperience: 12,
                category: 'Content'
            },
            {
                name: 'Ellen',
                skill: 'Editor',
                yearsExperience: 5,
                category: 'Content'
            }
        ];


        var totalexperience = skills.reduce(function (prev, current) {
            return prev + current.yearsExperience;
        }, 0);

        console.log('The team has a cumulative experience of: ' + totalexperience + ' years!');
//  The team has a cumulative experience of: 43 years!

        var categoryExperienceTotals = skills.reduce(function (groupedByCategory, worker) {
            var category = worker.category;
            if (!groupedByCategory[category]) {
                groupedByCategory[category] = 0;
            }
            groupedByCategory[category] += worker.yearsExperience;
            return groupedByCategory;
        }, {});

        console.log('Our workers have ' + categoryExperienceTotals['Web Design'] + ' years of Web Design Experience, '
            + categoryExperienceTotals['Web Development'] + ' years of Web Development Experience, and '
            + categoryExperienceTotals['Content'] + ' years of Content production Experience!'
        );
//  Our workers have 14 years of Web Design Experience, 12 years of Web Development Experience,
//  and 17 years of Content production Experience!

        var workersByCategory = skills.reduce(function (groupedByWorkers, worker) {
            if (!groupedByWorkers[worker.category]) {
                groupedByWorkers[worker.category] = 0;
            }
            groupedByWorkers[worker.category]++;
            return groupedByWorkers;
        }, {});

        console.log('We have ' + workersByCategory['Web Design'] + ' employees in Web Design, '
            + workersByCategory['Web Development'] + ' in Web Development, and '
            + workersByCategory['Content'] + ' working in Content production!'
        );
//  We have 3 employees in Web Design, 2 in Web Development, and 2 working in Content production!



       // Maximum width or height in a set of elements

       // This script is very useful to make equal height columns or equal width rows easily:

        var getMaxHeight = function ($elms) {
            var maxHeight = 0;
            $elms.each(function () {
                // In some cases you may want to use outerHeight() instead
                var height = $(this).height();
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });
            return maxHeight;
        };

       // Usage:
        $(elements).height( getMaxHeight($(elements)) );






       // Validating a date effectively

        //The date library in JavaScript is often too simple and usually not enough for advanced date formatting. Although there are many JS libraries that make working with dates much easier, sometimes you just want something simple that validates a date from a string. In that case you can use the following script. It lets you validate a date with any delimiter character and 4 digit year.


        function isValidDate(value, userFormat) {

            // Set default format if format is not provided
            userFormat = userFormat || 'mm/dd/yyyy';

            // Find custom delimiter by excluding
            // month, day and year characters
            var delimiter = /[^mdy]/.exec(userFormat)[0];

            // Create an array with month, day and year
            // so we know the format order by index
            var theFormat = userFormat.split(delimiter);

            // Create array from user date
            var theDate = value.split(delimiter);

            function isDate(date, format) {
                var m, d, y, i = 0, len = format.length, f;
                for (i; i < len; i++) {
                    f = format[i];
                    if (/m/.test(f)) m = date[i];
                    if (/d/.test(f)) d = date[i];
                    if (/y/.test(f)) y = date[i];
                }
                return (
                    m > 0 && m < 13 &&
                    y && y.length === 4 &&
                    d > 0 &&
                    // Check if it's a valid day of the month
                    d <= (new Date(y, m, 0)).getDate()
                );
            }

            return isDate(theDate, theFormat);
        }

       // Usage:
           // The following will return false because November doesn’t have 31 days.

        isValidDate('dd-mm-yyyy', '31/11/2012')




        //Setting breakpoints for responsive design
        //This utility is a simple approach to set width breakpoints when working on responsive designs. It’s a quick way to relate CSS media queries in your JavaScript code as you go.


        function isBreakPoint(bp) {
            // The breakpoints that you set in your css
            var bps = [320, 480, 768, 1024];
            var w = $(window).width();
            var min, max;
            for (var i = 0, l = bps.length; i < l; i++) {
                if (bps[i] === bp) {
                    min = bps[i-1] || 0;
                    max = bps[i];
                    break;
                }
            }
            return w > min && w <= max;
        }

        Usage:
        if ( isBreakPoint(320) ) {
            // breakpoint at 320 or less
        }
        if ( isBreakPoint(480) ) {
            // breakpoint between 320 and 480
        }

//The following demo shows the script in action with some CSS media queries. When a box is clicked it will alert the device that matches the current window width. As the window is resized, the CSS media queries will change the color of the boxes and the JS breakpoints will make sure the correct device is alerted. It’s a very simple example but try to imagine the possibilities.






        //Highlighting text
        //There are many jQuery plugins to highlight text but I find this technique powerful, easy to implement and customize and it can work without any libraries, just plain JavaScript. The script returns the original text with the terms wrapped in a tag so they can be styled with CSS.

        function highlight(text, words, tag) {

            // Default tag if no tag is provided
            tag = tag || 'span';

            var i, len = words.length, re;
            for (i = 0; i < len; i++) {
                // Global regex to highlight all matches
                re = new RegExp(words[i], 'g');
                if (re.test(text)) {
                    text = text.replace(re, '<'+ tag +' class="highlight">$&</'+ tag +'>');
                }
            }

            return text;
        }

       // You may also want to unhighlight text.

        function unhighlight(text, tag) {
            // Default tag if no tag is provided
            tag = tag || 'span';
            var re = new RegExp('(<'+ tag +'.+?>|<\/'+ tag +'>)', 'g');
            return text.replace(re, '');
        }

        //These two snippets would make a great start to build your own text highlighting plugin.
            //Usage:

        $('p').html( highlight(
            $('p').html(), // the text
            ['foo', 'bar', 'baz', 'hello world'], // list of words or phrases to highlight
            'strong' // custom tag
        ));






       // Animated text effects
        //Simple yet powerful script to animate text properties. It yields some intersting results when combined with CSS3 transitions. This snippet is provided as a jQuery plugin for ease of use:

        $.fn.animateText = function(delay, klass) {

            var text = this.text();
            var letters = text.split('');

            return this.each(function(){
                var $this = $(this);
                $this.html(text.replace(/./g, '<span class="letter">$&</span>'));
                $this.find('span.letter').each(function(i, el){
                    setTimeout(function(){ $(el).addClass(klass); }, delay * i);
                });
            });

        };

        //Usage:
           // Create a class in CSS with some styles and run the plugin on an element that contains some raw text, like a paragraph.

        $('p').animateText(15, 'foo');





        //Fading elements one by one
        //jQuery plugin to fade a collection of elements one by one with custom delay:

        $.fn.fadeAll = function (ops) {
            var o = $.extend({
                delay: 500, // delay between elements
                speed: 500, // animation speed
                ease: 'swing' // other require easing plugin
            }, ops);
            var $el = this;
            for (var i=0, d=0, l=$el.length; i<l; i++, d+=o.delay) {
                $el.eq(i).delay(d).fadeIn(o.speed, o.ease);
            }
            return $el;
        }

      //  Usage:

        $(elements).fadeAll({ delay: 300, speed: 300 });







        //Counting clicks
       // Sometimes you need to know how many times the user clicks on an element. The most common solution is to create a counter as a global variable but with jQuery you can prevent polluting the global scope by using data() to store the counter.

        $(element)
            .data('counter', 0) // begin counter at zero
            .click(function() {
                var counter = $(this).data('counter'); // get
                $(this).data('counter', counter + 1); // set
                // do something else...
            });






       // Embedding Youtube videos from links

       // Useful script to create embedded Youtube videos from links with custom parameters. It works with mostly every Youtube link format since it uses a pretty forgiving regex, but it may not work for every single case. This script also fixes the tedious “super z-index” issue that you may have experienced when embedding Youtube videos.


        function embedYoutube(link, ops) {

            var o = $.extend({
                width: 480,
                height: 320,
                params: ''
            }, ops);

            var id = /\?v\=(\w+)/.exec(link)[1];

            return '<iframe style="display: block;"'+
                ' class="youtube-video" type="text/html"'+
                ' width="' + o.width + '" height="' + o.height +
                ' "src="http://www.youtube.com/embed/' + id + '?' + o.params +
                '&amp;wmode=transparent" frameborder="0" />';
        }

       // Usage:
           // Check out the Youtube API parameters for more info on params.

        embedYoutube(
            'https://www.youtube.com/watch?v=JaAWdljhD5o',
            { params: 'theme=light&fs=0' }
        );




        //Reducing text by word limit

        //This script is similar to the excerpt function in WordPress. It allows you to truncate a string to a particular number of words and it adds ellipsis if necessary. It works with text that may have other inline tags such as strong or em or links.

        function excerpt(str, nwords) {
            var words = str.split(' ');
            words.splice(nwords, words.length-1);
            return words.join(' ') +
                (words.length !== str.split(' ').length ? '&hellip;' : '');
        }




      //  Creating dynamic menus

      //  Create any type of menu dynamically, like ordered lists, unordered lists, select dropdowns… It’s a very simple script with lots of potential.

        function makeMenu(items, tags) {

            tags = tags || ['ul', 'li']; // default tags
            var parent = tags[0];
            var child = tags[1];

            var item, value = '';
            for (var i = 0, l = items.length; i < l; i++) {
                item = items[i];
                // Separate item and value if value is present
                if (/:/.test(item)) {
                    item = items[i].split(':')[0];
                    value = items[i].split(':')[1];
                }
                // Wrap the item in tag
                items[i] = '<'+ child +' '+
                    (value && 'value="'+value+'"') +'>'+ // add value if present
                    item +'</'+ child +'>';
            }

            return '<'+ parent +'>'+ items.join('') +'</'+ parent +'>';
        }

        //Usage:
// Dropdown select month
        makeMenu(
            ['January:JAN', 'February:FEB', 'March:MAR'], // item:value
            ['select', 'option']
        );

// List of groceries
        makeMenu(
            ['Carrots', 'Lettuce', 'Tomatos', 'Milk'],
            ['ol', 'li']
        );















    }