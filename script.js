function lenth(str) { 
    var z = 0; 
    while (str[z] !== undefined){ 
       z++; 
    } 
    return z; 
 }
   console.log(lenth("I am the worlds best full stack developer"))
 

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("abolf"));



function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }
  
  console.log(countWords('One two three')); 
  console.log(countWords('This   is   a long string'));
  
console.log('hello world'.split(' '));


console.log('one two three'.split(' '));


console.log('hello  world'.split(' '));


console.log('one  two  three'.split(' '));

  
  