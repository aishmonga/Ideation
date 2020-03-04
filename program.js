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
var urlParams = new URLSearchParams(queryString);
// console.log("............." + queryString);


function autoFillDevPartner(){
    if(autoCheckbox.checked == false){
        // $("#filledDisabled *").prop("disabled" ,false);
        $("#filledDisabled *").attr("disabled", false).on('click');
        dCompany.value      = null;
        dContactName.value  = null;
        dPhone.value        = null;
        dEmail.value        = null;

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
        makeReqd("showHertz");
        // $(".showHertz").prop('required',true);


    }else{
        $(".showHertz").prop('disabled', true);
        doNull("hertzLivedate")
    }
    if(dCheckbox.checked == true){
        $(".showDollar").prop('disabled', false);
        showFutureDate("dollarLivedate");
        makeReqd("showDollar");
        // $(".showDollar").prop('required',true);

    }else{
        $(".showDollar").prop('disabled', true);
        doNull("dollarLivedate")
    }
    if(tCheckbox.checked == true){
        $(".showThrifty").prop('disabled', false);
        showFutureDate("thriftyLivedate");
        makeReqd("showThrifty");
        // $(".showThrifty").prop('required',true);

    }else{
        $(".showThrifty").prop('disabled', true);
        doNull("thriftyLivedate")
    }
    if(fCheckbox.checked == true){
        $(".showFirefly").prop('disabled', false);
        showFutureDate("fireflyLivedate");
        makeReqd("showFirefly");
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

    // document.getElementsByName(id)[0].setAttribute('min', today);
    // document.getElementsByName(id)[0].setAttribute('max', oneYearFromNow);
  
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
        // return "&#x1F5F7"; // cross box
        // &#9744; is for blank box
        return "";
    }else if(value=="on"){
        return "&#x1F5F9";
    }else if( value ==""){
        // return "&#x2718";
        return "";  
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
function checkBrand(){

    if( ( (!hCheckbox.checked) && (!dCheckbox.checked) && (!tCheckbox.checked) && (!fCheckbox.checked)) ){
        console.log("Please select any brand");
        alert("Please select any brand");
        return false;
    }else{
        return true;
    }

}

function makeReqd(elementClass){
var x = document.getElementsByClassName(elementClass);

    for(i = 0; i< x.length; i++){
    if( (x[i].type == "date" ) || (x[i].type == "number" ) ){
            // alert("date/num...");
            x[i].setAttribute("required" , true)
            // alert("made rqd");

        }
    }

}

function checkCount(elementID, elementClass){
  var checkboxElement = document.getElementById(elementID);
  if (checkboxElement.checked){
    var classElements = document.getElementsByClassName(elementClass);
    var count = 0;
    for(i=0; i<classElements.length; i++){
      if(classElements[i].type == "checkbox"){
        if(classElements[i].checked){
          count++;
        }
      }
    }

    if(count<1){

      alert("Please select functionality related to the corresponding brand");
      return false;
    }
  }
  return true;
}

function validateRequiredFields(){
  var hertz = checkCount("hCheckbox", "showHertz");
  var dollar = checkCount("dCheckbox", "showDollar");
  var thrifty = checkCount("tCheckbox", "showThrifty")
  var firefly = checkCount("fCheckbox", "showFirefly");
  return hertz && dollar && thrifty && firefly;
}

function callOnSubmit(){
  return  checkBrand() && validateRequiredFields();
}

function autofill(){

    // alert("check: " +   getVal("pName"));    

    var pname = document.getElementById("pName");   
    pname.setAttribute( "value", (getVal("pName")) );

    var pcontactname = document.getElementById("pContactName");   
    pcontactname.setAttribute( "value", (getVal("pContactName")) );

    var pemail = document.getElementById("pEmail");   
    pemail.setAttribute( "value", (getVal("pEmail")) );

    var pphone = document.getElementById("pPhone");   
    pphone.setAttribute( "value", (getVal("pPhone")) );


    var p = document.getElementById("autoCheckbox"); 
    if(p.value == "on"){
        // alert(p.value);
        document.getElementById("autoCheckbox").checked = true;

         var dcompany = document.getElementById("dCompany");  
         dcompany.setAttribute( "value", (getVal("pName")) );

         var dcontactname = document.getElementById("dContactName");
         dcontactname.setAttribute( "value", (getVal("pContactName")) );

         var demail = document.getElementById("dEmail");
         demail.setAttribute( "value", (getVal("pEmail")) );
         
         var dphone = document.getElementById("dPhone");
         dphone.setAttribute( "value", (getVal("pPhone")) );

    }  
    // p.setAttribute( "checked ", "checked" );

    // alert("pppp"  + p.value);

    // if(p.value == "&#x1F5F9"){
    //     var dcompany = document.getElementById("pName");  
    //     // autoCheckbox.checked = true; 
    //     dcompany.setAttribute( "checked", checked);
        
    // }else{
    //     var dcompany = document.getElementById("dCompany");   
    //     dcompany.setAttribute( "value", (getVal("dCompany")) );
      
    // }
   
    var ccontactName = document.getElementById("cContactName");   
    ccontactName.setAttribute( "value", (getVal("cContactName")) );
    
    var cemail = document.getElementById("cEmail");     
    cemail.setAttribute( "value", (getVal("cEmail")) );
    
    var cphone = document.getElementById("cPhone");   
    cphone.setAttribute( "value", (getVal("cPhone")) );


    // CHANGE CROSS VAL TO EMPTY
    var helpcontactname = document.getElementById("helpContactName");   
    helpcontactname.setAttribute( "value", (getVal("helpContactName")) );
    
    var helpemail = document.getElementById("helpEmail");   
    helpemail.setAttribute( "value", (getVal("helpEmail")) );

    

    var hcheckbox = document.getElementById("hCheckbox");   
    hcheckbox.setAttribute( "value", (getVal("hCheckbox")) );
    
    var dcheckbox = document.getElementById("dCheckbox");   
    dcheckbox.setAttribute( "value", (getVal("dCheckbox")) );

    var tcheckbox = document.getElementById("tCheckbox");   
    tcheckbox.setAttribute( "value", (getVal("tCheckbox")) );

    var fcheckbox = document.getElementById("fCheckbox");   
    fcheckbox.setAttribute( "value", (getVal("fCheckbox")) );   


    var weburl = document.getElementById("webUrl");   
    weburl.setAttribute( "value", (getVal("webUrl")) );   

    
    var hertzLivedate = document.getElementById("hertzLivedate");   
    hertzLivedate.setAttribute( "value", (getVal("hertzLivedate")) );   

    var dollarLivedate = document.getElementById("dollarLivedate");   
    dollarLivedate.setAttribute( "value", (getVal("dollarLivedate")) );   

    var thriftyLivedate = document.getElementById("thriftyLivedate");   
    thriftyLivedate.setAttribute( "value", (getVal("thriftyLivedate")) );   

    var fireflyLivedate = document.getElementById("fireflyLivedate");   
    fireflyLivedate.setAttribute( "value", (getVal("fireflyLivedate")) );   



    var bookingSourcep = document.getElementById("bookingSourcep");   
    bookingSourcep.setAttribute( "value", (getVal("bookingSourcep")) );   

    var bookingSources = document.getElementById("bookingSources");   
    bookingSources.setAttribute( "value", (getVal("bookingSources")) );


    // CHECKBOXES



    var volH = document.getElementById("volH");   
    volH.setAttribute( "value", (getVal("volH")) );

    var volD = document.getElementById("volD");   
    volD.setAttribute( "value", (getVal("volD")) );

    var volF = document.getElementById("volF");   
    volF.setAttribute( "value", (getVal("volF")) );

    var volT = document.getElementById("volT");   
    volT.setAttribute( "value", (getVal("volT")) );


    // REPLACE CROSS WITH EMPTY  
    var expTime = document.getElementById("expTime");   
    expTime.setAttribute( "value", (getVal("expTime")) );
    

    var numVehicles = document.getElementById("numVehicles");   
    numVehicles.setAttribute( "value", (getVal("numVehicles")) )


    var timeout = document.getElementById("timeout");   
    timeout.setAttribute( "value", (getVal("timeout")) );



    // CROSS
    var contactInfoName = document.getElementById("contactInfoName");   
    contactInfoName.setAttribute( "value", (getVal("contactInfoName")) );

    var contactInfoEmail = document.getElementById("contactInfoEmail");   
    contactInfoEmail.setAttribute( "value", (getVal("contactInfoEmail")) );

    var contactInfoPhone = document.getElementById("contactInfoPhone");   
    contactInfoPhone.setAttribute( "value", (getVal("contactInfoPhone")) );


    // CROSS
    var libEmail = document.getElementById("libEmail");   
    libEmail.setAttribute( "value", (getVal("libEmail")) );


    var iata = document.getElementById("iata");   
    iata.setAttribute( "value", (getVal("iata")) );

    var ip = document.getElementById("ip");   
    ip.setAttribute( "value", (getVal("ip")) );

}
