ebill = parseInt(prompt("Enter Electricity bill: "));


if(ebill < 100)
    {
        bill = 500 + (5/100)*ebill;
        alert("Monthly Bill:" +bill);
    }
    else if(ebill >101 && ebill <500)
        {
            bill = 1200 + (7.5/100)*ebill;
            alert("Monthly Bill:" +bill);
        }
        else if(ebill > 501 && ebill < 750)
        {
            bill = 1500 + (9.5/100)*ebill;
            alert("Monthly Bill:" +bill);
        }
        else if(ebill > 751 && ebill < 1001)
            {
                bill = 2000 + (11.2/100)*ebill;
                alert("Monthly Bill:" +bill);
            }
        else
        {
            bill = 2200 + (12/100)*ebill;
            alert("greater than 1000" +bill);
        }