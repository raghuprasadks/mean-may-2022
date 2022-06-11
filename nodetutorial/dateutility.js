exports.dateUtil = function(date, dateFormat){
    console.log("inside dateUtil")
    result = ""
    // console.log(dateFormat)
    if (dateFormat == 'dd/mm/yyyy'){
        result =( date.getDate()+"/0"+(parseInt(date.getMonth())+1)+"/" +date.getFullYear())
    }else if (dateFormat == 'mm/dd/yyyy'){
        result = ( "/0"+(parseInt(date.getMonth())+1)+ date.getDate()+ "/" +date.getFullYear())
    }else if (dateFormat == 'dd/mon/yyyy'){
        result = ( date.getDate()+"/0"+(parseInt(date.getMonth())+1)+"/" +date.getFullYear())
    }

    return result
    // console.log(result)
}

// dateUtil(new Date(), 'dd/mm/yyyy')