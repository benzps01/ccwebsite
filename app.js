function display(n1)
{
document.getElementById("d").value+=n1;
}
function c(n1)
  {
     document.getElementById("d").value=n1;
  }
function e() 
  { 
      try 
      { 
        c(eval(document.getElementById("d").value)) 
      } 
      catch(e) 
      {
        c('Error') 
      } 
  }