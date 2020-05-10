var arry=[];


function c()
{ 
     if(arry!="")
      {  
          arry=[] ;
         
      alert("Array Cleared");}

     else
     alert("No elements in array");
}


function accept()
{
     var input=document.getElementById("input").value;
    
     if(input!="")
  {
    arry.push(input);
    
   }

   
    else
    alert("Please Enter elements into the array");
  


   
    
   

}

function show()
 
{

        
    
    if(arry!="")
    {    
      var k="";

      for(i=0;i<arry.length;i++)
      {
          k=k+arry[i]+"</br>";
      }
    document.getElementById("ptext").innerHTML=k}

    else
    {
        alert("Please Enter elements into the array");
    }

}

function p() { 

    l=arry.length;
    if(arry!="")
    {

        var  i, flag = true; 
       
        n = arry[0] ;
         
        for(i = 2; i <= n - 1; i++) 
            if (n % i == 0) { 
                flag = false; 
                break; 
            } 
              
            
         if (flag == true) 
            alert(+n + " is a prime number"); 
         else
            alert(+n + " is not prime number"); }
        
              
   else{
       alert("Please Enter  numbers into the array");
         
    }
       
   
    
    }


 


function f()
{
  if(arry!=0)
  
  { let a = 1;
    let b = 0;
    let item;
for (let i=0; i<arry.length; i++)
{
        for (let j=i; j<arry.length; j++)
        {
                if (arry[i] == arry[j])
                 b++;
                if (a<b)
                {
                  a=b; 
                  item = arry[i];
         
         
         
                }
        }
        b=0;
}
  
alert(+item +" is the frequently occuring element in the array with an occurence of "+a +" times")
}

else
    alert("Please Enter elements into the array");

}

function sumsq()
{ 
    if(arry!=0)

   { var s=0,q;

    

    for(i=0;i<arry.length;i++)
    { 
        q=arry[i]*arry[i];

        s=s+q;

    }
    
     alert("Sum of square's of elements of the array is "+s)}

    else
    alert("Please Enter elements into the array");
} 

function oddeve()
{
  
    for (i=1;i<16;i++)
    {  
         

        if(i%2==0)
        {
           
            document.getElementById("ptext").innerHTML=document.getElementById("ptext").innerHTML+"<br>"+i+" - Even number";

        }
        else
        {
            document.getElementById("ptext").innerHTML=document.getElementById("ptext").innerHTML+"<br>"+i+" - Odd number";
        }

         
        
    }

    
}

function trunk()
{
    var N=document.getElementById("input").value;
             
            

    if(arry!="")
    {
        
        if(N!="" &&!isNaN(N * 1))

       

        {
            
            var k="";

            var str=arry[0];

               for(i=0;i<N;i++)
              {
        
           
                 k=k+str[i];
    
               }
        
               document.getElementById("ptext").innerHTML=k;
          
        
    
        }
      else
      alert("Please Enter the Truncation limit ");

       
        

        
    

    }
    
    

  
    
    
    else
    alert("Please Enter the string");


   


}

function large()
{
    if(arry!="")
   {
    
    if(arry[0]>arry[1])
    alert(arry[0]+" is larger than "+arry[1]);
    else
    alert(arry[1]+" is larger than "+arry[0]);}

    else
    alert("Enter the numbers - Max input 2 numbers");

}


function jav()

{
    
var j="Javascript";

 l=j.length; var k="";
  
for(i=0;i<l;i++)
{
 k=k+j[i];

 document.getElementById("ptext").innerHTML=document.getElementById("ptext").innerHTML+k+"<br>";}

}

function nest ()

{
   

    for(i=0;i<4;i++)
    {
        for(j=0;j<i+1;j++)
        document.getElementById("ptext").innerHTML=document.getElementById("ptext").innerHTML+"*";
        document.getElementById("ptext").innerHTML=document.getElementById("ptext").innerHTML+"<br>";
    }


    
}

function uppr()
{
    if(arry!="")
  {
    
    var c='';
    var str= arry[0];

    for(i=0;i<str.length;i++)
   
    {
       


    
        c=str.charAt(i);
       if(c== c.toUpperCase())
        {
         c=c.toLowerCase();
         
        }
         else
        {
        c=c.toUpperCase();
        
        }
        document.getElementById("ptext").innerHTML= document.getElementById("ptext").innerHTML+c;
       
       
 
         

   
    }
    
  }
   else
   alert("Enter the String");

}


function alpodr()

{

    if(arry!="")
    
    {
   var i = 0, j; 
    while (i < arry.length) { 
        j = i + 1; 
        while (j < arry.length) { 
            if (arry[j] < arry[i]) { 
                var temp = arry[i]; 
                arry[i] = arry[j]; 
                arry[j] = temp; 
            } 
            j++; 
        } 
        i++; 
    } 
     document.getElementById("t").innerHTML=document.getElementById("t").innerHTML+"The elements in Alphabetical Order is..";
  
     for(i=0;i<arry.length;i++)
	{

	 document.getElementById("alf").innerHTML=document.getElementById("alf").innerHTML+"<br>"+arry[i];

    }}
    
    else
    alert("Please Enter the Strings into the array");

}

