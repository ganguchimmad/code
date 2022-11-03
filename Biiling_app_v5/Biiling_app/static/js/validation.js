    /* validation  */
// version 1.0
// Required
function ValidateRequired(data) {
    if (data.trim() == "") {
        return false
    }
    return true
}
// Number only
function ValidateNumberOnly(data) {
    var expression = /^\d+$/
    if (!expression.test(data) && data.trim() != "") {
        return false
    }
    return true
}
// Alpha only
function ValidateAlphaOnly(data) {
    var expression = /^[a-zA-Z '.-]+$/
    if (!expression.test(data) && data.trim() != "") {
        return false
    }
    return true
}
function ValidateAlphaNumeric(data) {
    var expression = /^[a-zA-Z0-9 ]+$/
    if (!expression.test(data) && data.trim() != "") {
        return false
    }
    return true
}
function ValidateDecimal(data) {
    var expression = /^[0-9]*(?:\.\d{1,2})?$/
    if (!expression.test(data) && data.trim() != "") {
        return false
    }
    return true
}
// Max length
function ValidateMaxLenght(data, maxLength) {
    if (data.length > maxLength && data.trim() != "") {
        return false
    }
    return true
}
// Min length
function ValidateMinLenght(data, minLength) {
    if (data.length < minLength && data.trim() != "") {
        return false
    }
    return true
}
// Max Value
function ValidateMaxValue(data, maxValue) {
    if (data > maxValue && data.trim() != "") {
        return false
    }
    return true
}
// Max Value
function ValidateMinValue(data, minValue) {
    if (data < minValue && data.trim() != "") {
        return false
    }
    return true
}
//PhoneNumber 10 digit
function ValidatePhoneNumber(data) {
    var expression = /^[6789]\d{9}$/
    if (!expression.test(data) && data.trim() != "") {
        return false
    }
    return true
}
//Email validate
function ValidateEmailId(data) {
    //var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   //hangs
    var expression = /^\w+([\.-]\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!expression.test(data) && data.trim() != "") {
        return false
    }
    return true
}
/* start Date validation */
//dateformat validate
function ValidateDateFormat(data) {
    var expression = /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/
    //var expression = /^\d{1,2}\/\d{1,2}\/\d{4}$/;    //working expression same as above
    if (!expression.test(data) && data.trim() != "") {
        return false
    }
    return true
}
//validate isdate
function ValidateIsDate(data) {
    if (data.trim() != "") {
        var bits = data.split('/')
        var d = new Date(bits[2], bits[1] - 1, bits[0])
        return d && (d.getMonth() + 1) == bits[1]
    }
    return true
}
// date range validate
function ValidateDateRange(data, minDate, maxDate) {
    if (data.trim() != "") {
        if (minDate == null) {
            minDate = "01/09/2016"
        }
        if (maxDate == null) {
            maxDate = "31/12/9999"
        }
        /*if(!ValidateDateFormat(data) || !ValidateDateFormat(minDate) || !ValidateDateFormat(maxDate))
        {
            console.log("Passed parameter date format is wrong");
            return false;
        }
        else if(!ValidateIsDate(data) || !ValidateIsDate(minDate) || !ValidateIsDate(maxDate))
        {
            console.log("Passed parameter date is invalid");
            return false;
        }
        else
        {*/
        var dataDate = new Date(data.split("/").reverse().join("/"))
        var minDateDate = new Date(minDate.split("/").reverse().join("/"))
        var maxDateDate = new Date(maxDate.split("/").reverse().join("/"))
        if (dataDate < minDateDate || dataDate > maxDateDate) {
            return false
        }
        return true
        /*}*/
    }
    return true
}

 // url validation function
 function ValidateUrl(url)
 {
     if(/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url)) {
         return true;
       } else {
         return false;
       }
 }
/* End Common validation function  */
/* end Date validation */
/* Show error message in sweet alert */
function ErrorMessage(ctrl, message) {
    if (ctrl != null) {
        ctrl.focus()
        ctrl.val("")
    }
    Swal.fire({
        text: message,
        icon: "error",
        toast: true,
        position: 'top-right'
    })
}
/* Show error message in sweet alert */
/* start common onchange validation*/
$(document).ready(function () {
    $("#password,#confirmpassword").on("keypress", function (event) {
        if (event.which == 32) {
            event.preventDefault()
            //Swal.fire('Space not accepted');
            ErrorMessage($(this), "Space not accepted")
        }
        if ($(this).val().length === 0 && (event.which == 32) && !$(this).is('[readonly]')) {
            event.preventDefault()
            //Swal.fire('Space not accepted');
            ErrorMessage($(this), "Space not accepted")
        }
    })
    // Age Validation
    $(document).on("change", ".vld_age", function () {
        if ($(this).hasClass('vld_age')) {
            if (!ValidateMinValue($(this).val(), 18) || !ValidateMaxValue($(this).val(), 100) && !$(this).is('[readonly]')) {
                ErrorMessage($(this), "Age must be 18 - 100")
            }
        }
    })
    // contact no
    $(document).on("change", ".vld_phoneno", function () {
        if ($(this).hasClass('vld_phoneno')) {
            if (!ValidatePhoneNumber($(this).val())) {
                ErrorMessage($(this), "Phone number must be 10 digits and starts with 6,7,8,9 only")
            }
        }
    })
    //pincode validate
    $(document).on("change", ".vld_pincode", function () {
        if ($(this).hasClass('vld_pincode')) {
            if (!ValidateMaxLenght($(this).val(), 6) || !ValidateMinLenght($(this).val(), 6)) {
                ErrorMessage($(this), "Pincode must be 6 digits only")
            }
            else if (Number($(this).val()) == 0) {
                ErrorMessage($(this), "Invalid pincode")
            }
        }
    })
    //pincode validate
    $(document).on("change", ".vld_minlength", function () {
        if (!$(".sweet-alert").is(":visible")) {
            if (!ValidateMinLenght($(this).val(), $(this).attr('data-minlength'))) {
                ErrorMessage($(this), "Minimum " + $(this).attr('data-minlength') + " character")
            }
        }
    })
    //Email Id validate
    $(document).on("change", ".vld_email", function () {
        if (!ValidateEmailId($(this).val())) {
            ErrorMessage($(this), "Invalid Email Id format")
        }
    })
    //Date Validate
    $(document).on("change", ".vld_date", function (e) {
        if (e.originalEvent !== undefined) {
            var curDate = new Date()
            curDate = curDate.getDate() + '/' + (curDate.getMonth() + 1) + '/' + curDate.getFullYear()
            if (!ValidateDateFormat($(this).val())) {
                ErrorMessage($(this), "Wrong date format. date format must be dd/mm/yyyyy")
            }
            else if (!ValidateIsDate($(this).val())) {
                ErrorMessage($(this), "Invalid Date")
            }
            else if (!ValidateDateRange($(this).val(), '01/08/2017', curDate)) {
                ErrorMessage($(this), "Minimum date should be 01/08/2017 and maximum date should be today")
            }
        }
    })
    //Date Validate with no max limit if want max validate in the form itselft
    $(document).on("change", ".vld_date_follow_up", function (e) {
        if (e.originalEvent !== undefined) {
            var curDate = new Date()
            curDate = curDate.getDate() + '/' + (curDate.getMonth() + 1) + '/' + curDate.getFullYear()
            if (!ValidateDateFormat($(this).val())) {
                ErrorMessage($(this), "Wrong date format. date format must be dd/mm/yyyyy")
            }
            else if (!ValidateIsDate($(this).val())) {
                ErrorMessage($(this), "Invalid Date")
            }
        }
    })
    //Month And Year Validator
    $(document).on("change", ".vld_month_year", function (e) {
        if (e.originalEvent !== undefined) {
            var curDate = new Date()
            curDate = curDate.getDate() + '/' + (curDate.getMonth() + 1) + '/' + curDate.getFullYear()
            var selectedDate = '01/' + $(this).val()
            if (!ValidateDateFormat(selectedDate)) {
                ErrorMessage($(this), "Wrong date format. date format must be dd/mm/yyyyy")
            }
            else if (!ValidateIsDate(selectedDate)) {
                ErrorMessage($(this), "Invalid Date")
            }
            else if (!ValidateDateRange(selectedDate, '01/09/2016', curDate)) {
                ErrorMessage($(this), "Minimum date should be 01/09/2016 and Maximum date should be today")
            }
        }
    })

    $(document).on("change", ".onlyalpha", function () {
        
        if (!ValidateAlphaOnly($(this).val())) {
            ErrorMessage($(this), "Please enter Character only")
        }
    })
    
})
/* end common onchange validation*/

/* start common keypress validation*/
$(document).ready(function () {
    $(document).on("keypress", ".onlydigits , .vld_weight", function (event) {
        if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57) && !$(this).is('[readonly]')) {
            event.preventDefault()
            ErrorMessage(null, "Please enter only numbers")
        }
    })
    $(document).on("keypress", ".vld_age", function () {
        if (!ValidateMaxLenght($(this).val(), 3 - 1)) {
            event.preventDefault()
        }
        else if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57) && !$(this).is('[readonly]')) {
            event.preventDefault()
            $(this).removeClass("vld_age")
            ErrorMessage(null, "Please enter only numbers")
            $(this).addClass("vld_age")
        }
        
    })

    $(document).on("keyup", ".vld_weight", function () {
        if (!ValidateNumberOnly($(this).val())) {
            ErrorMessage($(this), "Weight must be number only")
        }
        else if (!ValidateMinValue($(this).val(), 1) || !ValidateMaxValue($(this).val(), 150) && !$(this).is('[readonly]')) {
            ErrorMessage($(this), "Weight must be 1 - 150")
        }
    })
    $(document).on("keypress", ".onlyalpha", function (event) {
        var inputValue = event.charCode
        if (!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && (inputValue != 32 && inputValue != 0) && !$(this).is('[readonly]')) {
            event.preventDefault()
            ErrorMessage(null, "Please enter alphabets only")
        }
    })
    $(document).on("keyup", ".onlyalphanumeric", function (event) {
        
        // var inputValue = event.charCode
        if (!ValidateAlphaNumeric($(this).val())) {
            event.preventDefault()
            ErrorMessage(null, "Please enter alphabetsnumerics only")
        }
    })
    $(document).on("change", ".onlydecimal", function (event) {
        
        // var inputValue = event.charCode
        if (!ValidateDecimal($(this).val())) {
            event.preventDefault()
            ErrorMessage(null, "Please enter valid numbers only")
        }
    })
    // url validate 
    $(document).on("change", ".vld_url", function () {
            if (!ValidateUrl($(this).val())) {
                event.preventDefault() // prevent the default action and remove the entered data
                ErrorMessage($(this), "Please enter valid url")
            }
    })
    $(document).on("keypress", '.vld_maxlength', function (event) {
        if (!ValidateMaxLenght($(this).val(), $(this).attr('data-maxlength') - 1)) {
            event.preventDefault()
            ErrorMessage(null,"maximum "+ $(this).attr('data-maxlength') + " character");   
        }
    })
    $(document).on("keypress", ".vld_phoneno", function (event) {
        //debugger;
        if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57) && !$(this).is('[readonly]')) {
            event.preventDefault()
            $(this).removeClass("vld_phoneno")
            ErrorMessage(null, "Please enter only numbers")
            $(this).addClass("vld_phoneno")
        }
        else if ($(this).val().length === 0 && (event.which !== 54 && event.which !== 55 && event.which !== 56 && event.which !== 57) && !$(this).is('[readonly]')) {
            event.preventDefault()
            $(this).removeClass("vld_phoneno")
            ErrorMessage(null, "Contact Number must start from 6,7,8,9")
            $(this).addClass("vld_phoneno")
        }
        else if (!ValidateMaxLenght($(this).val(), 14 - 1) && !$(this).is('[readonly]')) {
            event.preventDefault()
            $(this).removeClass("vld_phoneno")
            //ErrorMessage(null,"Must be 10 digits only");
            $(this).addClass("vld_phoneno")
        }
    })
    $(document).on("keypress", ".vld_pincode", function (event) {
        if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57) && !$(this).is('[readonly]')) {
            event.preventDefault()
            $(this).removeClass("vld_pincode")
            ErrorMessage(null, "Please enter only numbers")
            $(this).addClass("vld_pincode")
        }
        else if (!ValidateMaxLenght($(this).val(), 6 - 1)) {
            event.preventDefault()
            $(this).removeClass("vld_pincode")
            ErrorMessage(null, "Pincode must be 6 digits only")
            $(this).addClass("vld_pincode")
        }
        else if (Number($(this).val()) == 0 && $(this).val().length == 5) {
            event.preventDefault()
            $(this).removeClass("vld_pincode")
            ErrorMessage($(this), "Invalid pincode")
            $(this).addClass("vld_pincode")
        }
    })
})
/* end common onkeydown validation*/

/*common validation */
    function alertdata(errorinfo,type)
    {
            
        var data = ""
        if(type == "text" || type == "password" || type == "email" || type == "textarea")
        {
            data = 'Please enter ' + errorinfo
        }
        
        if(type == "select" || type == "select-one" || type == "select-multiple" || type=="radio")
        {
            data = "Please select " + errorinfo
        }
        
        if (type == "checkbox")
        {
            data = 'Please check ' + errorinfo
        }
        
        if (type == "file")
        {
            data = 'Please select image for ' + errorinfo
        }
        
        if (type == "number")
        {
            data = 'Please enter the count for' + errorinfo
        }
        
        if (type == "date")
        {
            data = 'Please select the date for ' + errorinfo
        }
        
        if (type == "time")
        {
            data = 'Please enter the time for ' + errorinfo
        }
        
        if (type == "month")
        {
            data = 'Please select the month for' + errorinfo
        }
        
        if(type=="passmatch")
            data=errorinfo
        
        if(type=="ivpass")
            data=errorinfo
        
        Swal.fire({
            text: data,
            icon: "warning",
            toast: true,
            position: 'top-right'  
        })
        
    }
    
    function validate(FormId) {
    
            var elements = document.getElementById(FormId).elements
    
            for (var i = 0 ; i < elements.length ; i++) {
                var item = elements.item(i)
                var ctrlName = item.name
                var id = item.id
                var type = item.type	
    
                if ($(item).is(":visible") && $(item).is(":enabled")) {
            if ((type == "text" || type == "password" || type == "email" || type == "textarea") && $(item).hasClass("required") && $(item).is(":visible") && $(item).is(":enabled")) {
                        var value = item.value.trim()
                        if (value == "") {
                            var placeholders = item.getAttribute('data-required')
                            placeholders = placeholders.toLowerCase()
                            item.focus()
                            alertdata(placeholders,type)
                            return false
                        }
                    }
                }
                
                     if ((type == "select" || type == "select-one" || type == "select-multiple") && $(item).hasClass("required") && $(item).is(":enabled")) {
                        var value = item.value.trim()
                        if (value == "") {
                            var itemrequiredtext = item.getAttribute('data-required')
                            itemrequiredtext = itemrequiredtext.toLowerCase()
                            item.focus()
                            alertdata(itemrequiredtext,type)
                            return false
                        }
                    }
                  
                   if (type == "checkbox" && $(item).hasClass("required")) {
                        var checkeCount = $('input[name="'+ctrlName+'"]:checkbox:checked').length;
                        if (checkeCount == 0) {
                                
                            var itemrequiredtext = item.getAttribute('data-required')
                            itemrequiredtext = itemrequiredtext.toLowerCase()
                            $("[name='" + ctrlName + "']").focus()
                            alertdata(itemrequiredtext,type)
                            return false
                        }
                    }
    
                     if (type == "radio" && $(item).hasClass("required")) {
                         if($("input[name='"+ctrlName+"']:checked").is(':checked')==false){
                                
                            var itemrequiredtext = item.getAttribute('data-required')
                            itemrequiredtext = itemrequiredtext.toLowerCase()
                            $("[name='" + ctrlName + "']").focus()
                            alertdata(itemrequiredtext,type)
                            return false
                        }
                    }
    
                     if (type == "file" && $(item).hasClass("required")) {
                        var value = item.value.trim()
                        if (value == "") {
                            var itemrequiredtext = item.getAttribute('data-required')
                            itemrequiredtext = itemrequiredtext.toLowerCase()
                            $("[name='" + ctrlName + "']").focus()
                            alertdata(itemrequiredtext,type)
                            return false
                        }
                    }
    
                     if (type == "number" && $(item).hasClass("required")) {
                        var value = item.value.trim()
                        if (value == "") {
                            var itemrequiredtext = item.getAttribute('data-required')
                            itemrequiredtext = itemrequiredtext.toLowerCase()
                            $("[name='" + ctrlName + "']").focus()
                            alertdata(itemrequiredtext,type)
                            return false
                        }
                    }
    
                     if (type == "date" && $(item).hasClass("required")) {
                        var value = item.value.trim()
                        if (value == "") {
                            var itemrequiredtext = item.getAttribute('data-required')
                            itemrequiredtext = itemrequiredtext.toLowerCase()
                            $("[name='" + ctrlName + "']").focus()
                            alertdata(itemrequiredtext,type)
                            return false
                        }
                    }
                    
                    if (type == "time" && $(item).hasClass("required")) {
                        var value = item.value.trim()
                        if (value == "") {
                            var itemrequiredtext = item.getAttribute('data-required')
                            itemrequiredtext = itemrequiredtext.toLowerCase()
                            $("[name='" + ctrlName + "']").focus()
                            alertdata(itemrequiredtext,type)
                            return false
                        }
                    }
    
                     if (type == "month" && $(item).hasClass("required")) {
                         
                         var value = item.value.trim()
                        if (value == "") {
                            var itemrequiredtext = item.getAttribute('data-required')
                            itemrequiredtext = itemrequiredtext.toLowerCase()
                            $("[name='" + ctrlName + "']").focus()
                            alertdata(itemrequiredtext,type)
                            return false
                        }
                    }
            } 
    
            return true
        }