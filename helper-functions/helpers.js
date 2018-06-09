
// JUST SOME HELPER FUNCTIONS THAT ARE !!!!OPTIONAL!!!!! TO USE. I GAVE IT A FITTING VARIABLE NAME WHICH MIMICS THAT OF UNDERSCORE.
// HERE IS A LINK TO UNDERSCORE DOCS FOR ANYBODY WHO IS CURIOUS ABOUT WHAT OTHER HEPLERS IT PROVIDES. THEY WON'T BREAK DOWN HOW THESE ARE 
// WORKING UNDER THE HOOD. WRITING THESE FROM SCRATCH IS ALWAYS A GREAT EXERCISE.

// JAVASCRIPT NATIVELY PROVIDES THESE METHODS. I'M PLACING THESE HERE JUST TO DEMONSTRATE A WAY OF HOW THEY GENERALLY BEHAVE UNDER THE HOOD
// TO ANYBODY WHO IS CURIOUS. I'VE LEFT OUT SOME BEHAVIORS LIKE CHECKING FOR CRAZY INVALID INPUTS, OR PROVIDING A CONTEXT PARAMETER.
// I AM ALSO PLACING THESE HERE TO DEMONSTRATE THAT I UNDERSTAND HOW THESE HELPER FUNCTIONS ARE ACTUALLY WORKING, AND NOT JUST BLINDLY USING THEM
// - NICK

var _ = {



  /**
   * Takes a collection/iterable and performs a callback on each element.
   * Doesn't return any values.
   * 
   * @param  {object} col is an iterable which can be either an object or an array.
   * @param  {function(value,index,collection)} callback -is a callback which executes logic on the value, index, and list
   */
  each: function (col, cb) {
    if (Array.isArray(col)) {
      for (var i = 0; i < col.length; i++) {
        cb(col[i], i, col);
      };
    } else if (typeof col === 'object') {
      for (var key in obj) {
        cb(obj[key], key, col);
      };
    };
  },
  /**
   * Performs a callback on each element of an iterable and returns the results in an array
   * 
   * @param  {object} col is an iterable which can be either an object or an array;
   * @param  {function(value,index,collection)} cb -is a callback which executes logic on the value, index, and list
   * 
   * @returns {object} the results yielded from performing a callback on each element e.g. map([1,2,3],function(val){return val + 1}) outputs -> [2,3,4]
   */
  map: function (col, cb) {
    var res = [];
    if (Array.isArray(col)) {
      for (var i = 0; i < col.length; i++) {
        res.push(cb(col[i], i, col));
      };
    } else if (typeof col === 'object') {
      for (var key in obj) {
        res.push(cb(obj[key], key, col));
      };
    };
    return res;
  },
  /**
   * Reduces a collection of values into a single value. Can be used for arrays of numbers, strings, or sub arrays
   * 
   * Array example: reduce([[1,2],[3,4]],function(mem,val) {
   *                 return mem.concat(val);
   *                },[])   outputs -> [1,2,3,4] from an input of [[1,2],[3,4]]
   * 
   * Number example: reduce([1,2,3],function(mem,val) {
   *                  return mem + val;
   *                 },0)  outputs -> 6 from an input of [1,2,3]
   *  
   * String example: reduce(['Hello ','world! ', 'Goodbye world!'],function(mem,val) {
   *                 return mem + val;
   *                },'') outputs -> 'Hello world! Goodbye world!' from ['Hello ','world! ', 'Goodbye world!']
   * 
   * @param  {object} col is an array to perform the callback on
   * @param  {function} cb - a callback performed on each element
   * @param  {} mem
   */
  reduce: function (col, cb, mem) {
    var i;
    var iMax = col.length;

    if (!mem) {
      mem = col[0];
      i = 1;
    } else {
      i = 0;
    }

    if (Array.isArray(col)) {
      for (; i < iMax; i++) {
        mem = cb(mem, col[i], i, col);
      };
    }
    return mem;
  }

};

module.exports = _;
