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
        icon: "warning"  
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
					
                    if ($('#'+id).is(':checked')==false) {
							
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
function password_match(npassword,confirmpassword)
{
	if(npassword != "" && confirmpassword != "")
	{
		if(npassword != confirmpassword)
		{
		
			alertdata("New password and conform password are not matching",'passmatch')
			return false
		}
	}
	return true
}
	