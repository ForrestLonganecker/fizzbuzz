// % 3 = fizz
// % 5 = buzz
// % 3 && 5 = fizzbuzz
// else the number

const fizzBuzz = () => {
  i = 1;
  while(i <= 100){
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizz buzz');
    } else if(i % 5 === 0){
      console.log('buzz');
    } else if(i % 3 === 0){
      console.log('fizz');
    } else {
      console.log(i)
    }
    i++
  }
}