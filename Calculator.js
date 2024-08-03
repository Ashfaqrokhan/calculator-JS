let num1= prompt("Enter first number");
let num2=prompt("Enter second number");
let op=prompt("Enter your operator");
switch (op){
         case "+":
          console.log(Number (num1)+Number(num2));
          break;
  case "-":
     console.log(Number (num1)-Number(num2));
    break;
    case "*":
      console.log(Number (num1)*Number(num2));
      break;
      case "/":
        console.log(Number (num1)/Number(num2));
        break;
        case "%":
          console.log(Number (num1)%Number(num2));
      default:
        console.log("Unsupported operator (-,*,/,%)");
}
// 
// 
// 
// /****************************************************************************** 
// let age=prompt("Enter your age");
// console.log("This is my age : " + age);
// let Dateobirth=prompt("Enter your Dateobirth");
// console.log("This is my Dateobirth : " + Dateobirth);
// */
 // let num = 2;
 // let num1++;
    // console.log(num++ + num++ * num++  - --num / num-- + ++num);
    //  console.log    (  2    +  3    *   4    -   4  /   4    + 4)   
//console.log(num++ + num++  * num++  - --num  * ++num )   
 //34  2  -6   39  5  17  10 
// console.log(             2    +  3    *   4     -    4  
//************************************************************************** */
  //   let res = 5
  //   console.log("line one" + res)
  //  console.log("line Two" + res-- ) 
  //   console.log( "line three" + res)