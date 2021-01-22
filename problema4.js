function palindromeReorganizar(inputString) {
    var palindrome=true;
    var centro=0;
    var array=inputString.split("");
    while(palindrome&&array.length>0){
        if(array.indexOf(array[0],1)>0){
            array.splice(array.indexOf(array[0],1),1);
            array=array.slice(1);

        }
        else{
            if(centro<1){
                array=array.slice(1);
                centro++;
            }
            else 
                palindrome=false;

        }
    }
    return palindrome;
} 