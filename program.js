$(document).ready(function(){
            $('#bookingSources').chosen();
        });

// For adding IP address field for multiple values
        $(document).ready(function(){
            var maxField = 10; //Input fields increment limitation
            var addButton = $('.add_button'); //Add button selector
            var wrapper = $('.field_wrapper'); //Input field wrapper
            var fieldHTML = '<div><input type="text" class="form-control unique" name="field_name[]" minlength="7" maxlength="15" size="15" pattern="^((\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\.){3}(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$" required><a href="javascript:void(0);" class="add_button" title="Add field"></a></div>';
            var x = 1; //Initial field counter is 1
            
            //Once add button is clicked
            $(addButton).click(function(){
                //Check maximum number of input fields
                if(x < maxField){ 
                    x++; //Increment field counter
                    $(wrapper).append(fieldHTML); //Add field html
                }
            });
            
            //Once remove button is clicked
            $(wrapper).on('click', '.remove_button', function(e){
                e.preventDefault();
                $(this).parent('div').remove(); //Remove field html
                x--; //Decrement field counter
            });
        });

    // For multiple secondary sources
        function secondaryBooking()
        {
            var selectedValues = $("#bookingSources").val();
            // var ipValues = $("#field_name[]").val();
            var finalV = selectedValues.join(",");
            // var ipV = ipValues.join(",");
            console.log("value of multiples="+finalV);
            // console.log("value of IPs="+ipV);
            document.getElementById("secSource").value = finalV;
            // document.getElementById("ipAddr").value = ipV;
            console.log("ha ha  ha"+document.getElementById("secSource").value);
        }
        
var queryString = location.search;
//Query string printing for reference in console
console.log("Query string value in another page"+queryString);
var urlParams = new URLSearchParams(queryString);

function autoFillDevPartner(){
    if(autoCheckbox.checked == false){
        // $("#filledDisabled *").prop("disabled" ,false);
        $("#filledDisabled *").attr("disabled", false).on('click');
        dCompany.value      = document.getElementById("dCompany").value       
        dContactName.value  = document.getElementById("dContactName").value   
        dEmail.value        = document.getElementById("dEmail").value         
        dPhone.value        = document.getElementById("dPhone").value         

    }else if(autoCheckbox.checked == true){
            document.getElementById("dCompany").value = pName.value;
            document.getElementById("dContactName").value = pContactName.value;
            document.getElementById("dEmail").value = pEmail.value;
            document.getElementById("dPhone").value = pPhone.value;
            $("#filledDisabled *").attr("disabled", "disabled").off('click');
            // alert("pname: " + pName.value);
    } 

}

function disableAll(){
    $(".disabledBlock *").attr("disabled", "disabled").off('click');
};

function enableFew(){
    if(hCheckbox.checked == true){
        $(".showHertz").prop('disabled', false);
        showFutureDate("hertzLivedate");
        // $(".showHertz").prop('required',true);
        
      
    }else{
        $(".showHertz").prop('disabled', true);
        doNull("hertzLivedate")
    }
    if(dCheckbox.checked == true){
        $(".showDollar").prop('disabled', false);  
        showFutureDate("dollarLivedate");
        // $(".showDollar").prop('required',true);
       
    }else{
        $(".showDollar").prop('disabled', true);
        doNull("dollarLivedate")
    }
    if(tCheckbox.checked == true){
        $(".showThrifty").prop('disabled', false);
        showFutureDate("thriftyLivedate");
        // $(".showThrifty").prop('required',true);
       
    }else{
        $(".showThrifty").prop('disabled', true);
        doNull("thriftyLivedate")
    }
    if(fCheckbox.checked == true){
        $(".showFirefly").prop('disabled', false);
        showFutureDate("fireflyLivedate");
        // $(".showFirefly").prop('required',true);
       
    }else{
        $(".showFirefly").prop('disabled', true);
        doNull("fireflyLivedate")
    }
};

function todayDate(){ 
    var today = new Date();
    var date = document.getElementById('tDate');

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    date.value = tDate + " " + monthNames[tMonth] + " " + tYear;

};      

function showFutureDate(elementID){

    var id = elementID;

    var t = new Date();
    var today = t.toISOString().split('T')[0];
   
    var year = t.getFullYear();
    var month = t.getMonth();
    var day = t.getDay();
    var oneYearFromNow = new Date(year + 1, month, day).toISOString().split('T')[0];
    
    document.getElementsByName(id)[0].setAttribute('min', today);
    document.getElementsByName(id)[0].setAttribute('max', oneYearFromNow);
    // alert(oneYearFromNow);
}


function toDoc(element,filename = ''){

    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";

    var html, blob, url, css;

    css = (
    '<style>' +
        
    'mso-ansi-font-weight: {bolder} ' +

    '</style>'
    );

    var html = preHtml+document.getElementById(element).innerHTML+postHtml;

    var blob = new Blob(['\ufeff',css, html], {
        type: 'application/msword'
    });

    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

    filename = filename?filename+'.doc':'Appendix-B.doc';

    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        downloadLink.href = url;
        
        downloadLink.download = filename;
        
        downloadLink.click();
    }

    document.body.removeChild(downloadLink);
}


function getVal(key){
    var value = urlParams.get(key);
    if(value==null){
        return "&#x1F5F7";
    }else if(value=="on"){
        return "&#x1F5F9";
    }else if( value ==""){
        return "&#x2718";
    }
    else if(key=='bookingSources' && value != "")  //For printing secondary booking source values in template.html
    {   
        return(urlParams.get("secSource"));   
    }
    else return value;
    }

function doNull(id){
    document.getElementById(id).value = null;
    // alert(document.getElementById(id).value);
}
function isChecked(){

    if( ( (!hCheckbox.checked) && (!dCheckbox.checked) && (!tCheckbox.checked) && (!fCheckbox.checked)) ){
        console.log("Select any one");
        alert("Select any one");
    }else{       
        //do nothing
    }

}
            // if(hCheckbox.checked){        
//                 alert("hertz tick");
//                 makeReqd("showHertz");
                
//             }else if(dCheckbox.checked){
//                 alert("dollar tick");
//                 // makeReqd("showDollar");
//             }
//             else if(tCheckbox.checked){
//                 alert("thrifty tick");
//                 // makeReqd("showThrifty");
        
//             }else if(fCheckbox.checked){
//                 alert("firefox tick");
//                 // makeReqd("showFirefly");
//             }
//             else{
//                 console.log("All fine !");
//                 alert("All fine!");   
//             }

//     } 
    
// }

// function makeReqd(elementClass){
//     alert("in makeReqd function");
    
//     var x = document.getElementsByClassName(elementClass);
//     alert(x.length);
//     alert("success " + x[0].name);

    
//     alert("below");

//     for(i = 0; i < x.length ; i++){
        
//         if ( (!x[i].checked) || ( x[i].value == null || x[i].value =="")){
//             console.log("please do" + x[i]);
//             alert("Please do" + x[i]);

//         // }else if(x[i].value == null){
//         //     console.log("please fill the required info" + x[i]);
//         //     alert("please fill the required info" + x[i]);

//         }
//         else if( (x[i].checked)  || ( !x[i].value == null) ){
//             alert("fine " + x[i]);
//             console.log("fine " + x[i]);
//         }
//     }

// }

// function isCheckbox(elementClass){
//     var x = document.getElementsByClassName(elementClass);
//     if(x.type == "checkbox"){
//         alert();
//     }
// }