function addtodisplay(value)
        { document.getElementById("display").value+=value;
        }
        function calculate()
        {    document.getElementById("display").value=eval(document.getElementById("display").value);
        }
        function cleardisplay()
        {  document.getElementById("display").value=" ";
        }