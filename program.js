$(document).ready(function(){
            $('#bookingSources').chosen();
            
        });

        
function preventBack(){window.history.forward();}
setTimeout("preventBack()", 0);
window.onunload=function(){null};

function redirectToEditHTML() {
    redirectPage = "edit.html" + queryString;
    window.location = redirectPage;
    return false;
}

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

    // if (hCheckbox.checked == true){
    //     alert("check 1");
    //     $(":disableID").not("[id=hCheckbox]").prop("disabled", true);
    // }
    // else{
    //     alert("check 2");
    //     $(":disableID *").attr("disabled", true).off('click');
    // }

    $(".disabledBlock *").attr("disabled", "disabled").off('click');
    enableFew();
};

function enableFew(){
    if(hCheckbox.checked == true){
        $(".showHertz").prop('disabled', false);

        if(developBookH.checked == false){
        $("#developCancelH").prop('disabled', true);
        $("#developViewH").prop('disabled', true);
        $("#developModifyH").prop('disabled', true);

        }

    
    showFutureDate("hertzLivedate");
    makeReqd("showHertz");
        // $(".showHertz").prop('required',true);


    }else{
        $(".showHertz").prop('disabled', true);
        doNull("hertzLivedate")
    }
    if(dCheckbox.checked == true){
        $(".showDollar").prop('disabled', false);

        
        if(developBookD.checked == false){
        $("#developCancelD").prop('disabled', true);
        $("#developViewD").prop('disabled', true);
        $("#developModifyD").prop('disabled', true);

        }   

        showFutureDate("dollarLivedate");
        makeReqd("showDollar");
        // $(".showDollar").prop('required',true);

    }else{
        $(".showDollar").prop('disabled', true);
        doNull("dollarLivedate")
    }
    if(tCheckbox.checked == true){
        $(".showThrifty").prop('disabled', false);

        
        if(developBookT.checked == false){
        $("#developCancelT").prop('disabled', true);
        $("#developViewT").prop('disabled', true);
        $("#developModifyT").prop('disabled', true);

        }           

        showFutureDate("thriftyLivedate");
        makeReqd("showThrifty");
        // $(".showThrifty").prop('required',true);

    }else{
        $(".showThrifty").prop('disabled', true);
        doNull("thriftyLivedate")
    }
    if(fCheckbox.checked == true){
        $(".showFirefly").prop('disabled', false);

        if(developBookF.checked == false){
        $("#developCancelF").prop('disabled', true);
        $("#developViewF").prop('disabled', true);
        $("#developModifyF").prop('disabled', true);    
      
        }  

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
    // var today = t.toISOString().split('T')[0];

    // var s = new Date();  //S is seven days from noww
    // s.setDate(s.getDate()+7);
    // alert("7 days from now: "+ s);

    var year = t.getFullYear();
    var month = t.getMonth();
    var day = t.getDay();
    var oneYearFromNow = new Date(year + 1, month, day).toISOString().split('T')[0];
    var s = new Date(year, month + 1, day -2).toISOString().split('T')[0];

    document.getElementsByName(id)[0].setAttribute('min', s);
    document.getElementsByName(id)[0].setAttribute('max', oneYearFromNow);
  
    // alert(oneYearFromNow);
}


function toDoc(element){

    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";

    var html, blob, url, css;

    css = (
        '<style>' +
        '@page WordSection1{size: 841.95pt 595.35pt;mso-page-orientation: landscape;}' +
        'div.WordSection1 {page: WordSection1;}' +
        '</style>'
      );

    // css = (
    // '<style>' +

    // 'mso-ansi-font-weight: {bolder} ' +

    // 'p {font-family: "Times New Roman", Georgia, Serif; font-size: 14pt;}' +

    // '</style>'
    // );

    var html = preHtml+document.getElementById(element).innerHTML+postHtml;

    var blob = new Blob(['\ufeff',css + html], {
        type: 'application/msword'
    });

    // var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    var url = URL.createObjectURL(blob);

    // filename = filename?filename+'.doc':'Appendix-B.doc';

    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    downloadLink.href = url;
    downloadLink.download = "Appendix-B";

    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, "Appendix-B.doc" );
    }else{
        // downloadLink.href = url;

        // downloadLink.download = "Appendix-B";

        downloadLink.click();
    }

    document.body.removeChild(downloadLink);
}


function getVal(key){
    var value = urlParams.get(key);
    if(value==null){
        // return "&#x1F5F7"; // cross box
        // &#9744; is for blank box
        return "&#9744";
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
    if( (x[i].type == "date" ) || (x[i].type == "number" ) || (x[i].type == "text") ){
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

// function makeEnvReqd(){
//     $(".env").prop('required',true);   
// }

function callOnSubmit(){
  return  checkBrand() && validateRequiredFields() && makeEnvReqd();
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


    // var autocheckbox = document.getElementById("autoCheckbox"); 
    // if(autocheckbox.value == "on"){
        // alert((getVal("autoCheckbox")) )   ;
        if(getVal("autoCheckbox") == "&#x1F5F9"){
        
        document.getElementById("autoCheckbox").checked = true;

         var dcompany = document.getElementById("dCompany");  
         dcompany.setAttribute( "value", (getVal("pName")) );

         var dcontactname = document.getElementById("dContactName");
         dcontactname.setAttribute( "value", (getVal("pContactName")) );

         var demail = document.getElementById("dEmail");
         demail.setAttribute( "value", (getVal("pEmail")) );
         
         var dphone = document.getElementById("dPhone");
         dphone.setAttribute( "value", (getVal("pPhone")) );

    }else{
        document.getElementById("autoCheckbox").checked = false;
    } 
       
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

    

    // var hcheckbox = document.querySelector.getVal("hCheckbox");  
    // alert(getVal("hCheckbox"));
    if(getVal("hCheckbox") == "&#x1F5F9"){
        document.getElementById("hCheckbox").checked = true;
    }
    else{
        document.getElementById("hCheckbox").checked = false;
    }

    // var dcheckbox = document.getElementById("dCheckbox");   
    // if(dcheckbox.value == "on"){
    //     dcheckbox.checked = true;
    // } 
    if(getVal("dCheckbox") == "&#x1F5F9"){
        
        document.getElementById("dCheckbox").checked = true;
    }else{
        document.getElementById("dCheckbox").checked = false;
    }
    

    if(getVal("tCheckbox") == "&#x1F5F9"){
        
        document.getElementById("tCheckbox").checked = true;
    }else{
        document.getElementById("tCheckbox").checked = false;
    }



    if(getVal("fCheckbox") == "&#x1F5F9"){
        
        document.getElementById("fCheckbox").checked = true;
    }else{
        document.getElementById("fCheckbox").checked = false;
    }

    // var tcheckbox = document.getElementById("tCheckbox"); 
    // if(tcheckbox.value == "on"){
    //     tcheckbox.checked = true;
    // }   

    // var fcheckbox = document.getElementById("fCheckbox");  
    // if(fcheckbox.value == "on"){
    //     fcheckbox.checked = true;
    // }  


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

    
    function setSelectedValue(selectObj, valueToSet) {
        if (valueToSet.indexOf(',') > -1){
            var segments = valueToSet.split(','); 
            for (var i = 0; i < selectObj.options.length; i++) {
                for( j in segments){
                    if (selectObj.options[i].text== segments[j]) {
                        selectObj.options[i].selected = true;
                      
                    } 
                }
                
            }

        }else{
            for (var i = 0; i < selectObj.options.length; i++) {
                if (selectObj.options[i].text== valueToSet) {
                    selectObj.options[i].selected = true;
                   
                }
            }
        }
    }

    var bsp = document.getElementById("bookingSourcep");  
    setSelectedValue(bsp, getVal("bookingSourcep"));

    var bss = document.getElementById("bookingSources");  
    setSelectedValue(bss, getVal("bookingSources"));

// alert(getVal("bookingSources"));
// alert(getVal("secSource"));
    // CHECKBOXES

    // alert(getVal("methodNone"));
    if(getVal("methodNone") == "&#x1F5F9"){
        
        document.getElementById("methodNone").checked = true;
    }else{
        document.getElementById("methodNone").checked = false;
    }

    if(getVal("methodExcal") == "&#x1F5F9"){
        
        document.getElementById("methodExcal").checked = true;
    }else{
        document.getElementById("methodExcal").checked = false;
    }

    if(getVal("methodHertz") == "&#x1F5F9"){
        
        document.getElementById("methodHertz").checked = true;
    }else{
        document.getElementById("methodHertz").checked = false;
    }

    if(getVal("methodDollar") == "&#x1F5F9"){
        
        document.getElementById("methodDollar").checked = true;
    }else{
        document.getElementById("methodDollar").checked = false;
    }

    if(getVal("methodThrifty") == "&#x1F5F9"){
        
        document.getElementById("methodThrifty").checked = true;
    }else{
        document.getElementById("methodThrifty").checked = false;
    }


    if(getVal("methodXml") == "&#x1F5F9"){
        
        document.getElementById("methodXml").checked = true;
    }else{
        document.getElementById("methodXml").checked = false;
    }

    
    if(getVal("methodGds") == "&#x1F5F9"){
        
        document.getElementById("methodGds").checked = true;
    }else{
        document.getElementById("methodGds").checked = false;
    }


    
    if(getVal("methodHttps") == "&#x1F5F9"){
        
        document.getElementById("methodHttps").checked = true;
    }else{
        document.getElementById("methodHttps").checked = false;
    }

// functionality

    // alert(getVal("developPolicyH") );
    if(getVal("developRateH") == "&#x1F5F9"){
        $("#developRateH").prop('disabled', false);
        document.getElementById("developRateH").checked = true;
    }else{
        document.getElementById("developRateH").checked = false;
    }

    if(getVal("developBookH") == "&#x1F5F9"){
        $("#developBookH").prop('disabled', false);
        document.getElementById("developBookH").checked = true;
    }else{
        document.getElementById("developBookH").checked = false;
    }

    
    if(getVal("developViewH") == "&#x1F5F9"){
        $("#developViewH").prop('disabled', false);
        document.getElementById("developViewH").checked = true;
    }else{
        document.getElementById("developViewH").checked = false;
    }
    
    
    if(getVal("developModifyH") == "&#x1F5F9"){
        $("#developModifyH").prop('disabled', false);
        document.getElementById("developModifyH").checked = true;
    }else{
        document.getElementById("developModifyH").checked = false;
    }

    
    if(getVal("developCancelH") == "&#x1F5F9"){
        $("#developCancelH").prop('disabled', false);
        document.getElementById("developCancelH").checked = true;
    }else{
        document.getElementById("developCancelH").checked = false;
    }


    if(getVal("developLocationH") == "&#x1F5F9"){
        $("#developLocationH").prop('disabled', false);
        document.getElementById("developLocationH").checked = true;
    }else{
        document.getElementById("developLocationH").checked = false;
    }

    if(getVal("developDeliveryH") == "&#x1F5F9"){
        $("#developDeliveryH").prop('disabled', false);
        document.getElementById("developDeliveryH").checked = true;
    }else{
        document.getElementById("developDeliveryH").checked = false;
    }

    if(getVal("developPrepayH") == "&#x1F5F9"){
        $("#developPrepayH").prop('disabled', false);
        document.getElementById("developPrepayH").checked = true;
    }else{
        document.getElementById("developPrepayH").checked = false;
    }


    if(getVal("developTourH") == "&#x1F5F9"){
        $("#developTourH").prop('disabled', false);
        document.getElementById("developTourH").checked = true;
    }else{
        document.getElementById("developTourH").checked = false;
    }

    
    if(getVal("developPolicyH") == "&#x1F5F9"){
        $("#developPolicyH").prop('disabled', false);
        document.getElementById("developPolicyH").checked = true;
    }else{
        document.getElementById("developPolicyH").checked = false;
    }

    // dollar
    if(getVal("developRateD") == "&#x1F5F9"){
        $("#developRateD").prop('disabled', false);
        document.getElementById("developRateD").checked = true;
    }else{
        document.getElementById("developRateD").checked = false;
    }
    
    if(getVal("developBookD") == "&#x1F5F9"){
        $("#developBookD").prop('disabled', false);
        document.getElementById("developBookD").checked = true;
    }else{
        document.getElementById("developBookD").checked = false;
    }

    if(getVal("developViewD") == "&#x1F5F9"){
        $("#developViewD").prop('disabled', false);
        document.getElementById("developViewD").checked = true;
    }else{
        document.getElementById("developViewD").checked = false;
    }

    if(getVal("developModifyD") == "&#x1F5F9"){
        $("#developModifyD").prop('disabled', false);
        document.getElementById("developModifyD").checked = true;
    }else{
        document.getElementById("developModifyD").checked = false;
    }

    if(getVal("developCancelD") == "&#x1F5F9"){
        $("#developCancelD").prop('disabled', false);
        document.getElementById("developCancelD").checked = true;
    }else{
        document.getElementById("developCancelD").checked = false;
    }

    if(getVal("developLocationD") == "&#x1F5F9"){
        $("#developLocationD").prop('disabled', false);
        document.getElementById("developLocationD").checked = true;
    }else{
        document.getElementById("developLocationD").checked = false;
    }

    if(getVal("developTourD") == "&#x1F5F9"){
        $("#developTourD").prop('disabled', false);
        document.getElementById("developTourD").checked = true;
    }else{
        document.getElementById("developTourD").checked = false;
    }


// thrifty

if(getVal("developRateT") == "&#x1F5F9"){
    $("#developRateT").prop('disabled', false);
    document.getElementById("developRateT").checked = true;
}else{
    document.getElementById("developRateT").checked = false;
}


if(getVal("developBookT") == "&#x1F5F9"){
    $("#developBookT").prop('disabled', false);
    document.getElementById("developBookT").checked = true;
}else{
    document.getElementById("developBookT").checked = false;
}

if(getVal("developViewT") == "&#x1F5F9"){
    $("#developViewT").prop('disabled', false);
    document.getElementById("developViewT").checked = true;
}else{
    document.getElementById("developViewT").checked = false;
}

if(getVal("developModifyT") == "&#x1F5F9"){
    $("#developModifyT").prop('disabled', false);
    document.getElementById("developModifyT").checked = true;
}else{
    document.getElementById("developModifyT").checked = false;
}

if(getVal("developCancelT") == "&#x1F5F9"){
    $("#developCancelT").prop('disabled', false);
    document.getElementById("developCancelT").checked = true;
}else{
    document.getElementById("developCancelT").checked = false;
}

if(getVal("developLocationT") == "&#x1F5F9"){
    $("#developLocationT").prop('disabled', false);
    document.getElementById("developLocationT").checked = true;
}else{
    document.getElementById("developLocationT").checked = false;
}

if(getVal("developTourT") == "&#x1F5F9"){
    $("#developTourT").prop('disabled', false);
    document.getElementById("developTourT").checked = true;
}else{
    document.getElementById("developTourT").checked = false;
}


// firefly

if(getVal("developRateF") == "&#x1F5F9"){
    $("#developRateF").prop('disabled', false);
    document.getElementById("developRateF").checked = true;
}else{
    document.getElementById("developRateF").checked = false;
}



if(getVal("developBookF") == "&#x1F5F9"){
    $("#developBookF").prop('disabled', false);
    document.getElementById("developBookF").checked = true;
}else{
    document.getElementById("developBookF").checked = false;
}


if(getVal("developViewF") == "&#x1F5F9"){
    $("#developViewF").prop('disabled', false);
    document.getElementById("developViewF").checked = true;
}else{
    document.getElementById("developViewF").checked = false;
}



if(getVal("developModifyF") == "&#x1F5F9"){
    $("#developModifyF").prop('disabled', false);
    document.getElementById("developModifyF").checked = true;
}else{
    document.getElementById("developModifyF").checked = false;
}


if(getVal("developCancelF") == "&#x1F5F9"){
    $("#developCancelF").prop('disabled', false);
    document.getElementById("developCancelF").checked = true;
}else{
    document.getElementById("developCancelF").checked = false;
}

if(getVal("developLocationF") == "&#x1F5F9"){
    $("#developLocationF").prop('disabled', false);
    document.getElementById("developLocationF").checked = true;
}else{
    document.getElementById("developLocationF").checked = false;
}


if(getVal("developTourF") == "&#x1F5F9"){
    $("#developTourF").prop('disabled', false);
    document.getElementById("developTourF").checked = true;
}else{
    document.getElementById("developTourF").checked = false;
}



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

    // var iph = document.getElementById("ipH");   
    // // iph.setAttribute( "value", (getVal("ipH")) );
    // if (getVal("ipH") == "&#9744"){
    //     iph.setAttribute( "value", "");
    //     $("#ipH").prop('disabled', true);
    //     // console.log("A1");
    // }else{
    //     iph.setAttribute( "value", (getVal("ipH")) );
    //     // console.log("B1");
    // }

    // var ipd = document.getElementById("ipD");   
    // if (getVal("ipD") == "&#9744"){
    //     ipd.setAttribute( "value", "");
    //     $("#ipD").prop('disabled', true);
    // }else{
    //     ipd.setAttribute( "value", (getVal("ipD")) );
    // }

    // var ipt = document.getElementById("ipT");   
    // if (getVal("ipT") == "&#9744"){
    //     ipt.setAttribute( "value", "");
    //     $("#ipT").prop('disabled', true);
    // }else{
    //     ipt.setAttribute( "value", (getVal("ipT")) );
    // }

    // var ipf = document.getElementById("ipF");   
    // if (getVal("ipF") == "&#9744"){
    //     ipf.setAttribute( "value", "");
    //     $("#ipF").prop('disabled', true);
    // }else{
    //     ipf.setAttribute( "value", (getVal("ipF")) );
    // }

    
    document.getElementById("PROD").innerHTML = getVal("PROD") ;
    document.getElementById("QUAL").innerHTML = getVal("QUAL") ;
    document.getElementById("TEST").innerHTML = getVal("TEST") ;
    // alert(" prod val: " + getVal("PROD"));

}
