var display= document.getElementById("display")
var calculator=document.getElementById("calculator")
function appendtodisplay(input)
{
    display.value += input;

}
function calculate()
{
    try{
        display.value=eval(display.value)
    }
    catch(error)
    {
        display.value="Error";
    }

}
function cleardisplay()
{
    display.value="";

}