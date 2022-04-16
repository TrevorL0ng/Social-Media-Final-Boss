const addDateSuff = date => {let dateString = date.toString();
    const endChar = dateString.charAt(dateString.length - 1);

    if (endChar === '1' && dateString !== '11'){dateString = `${dateString}st`;}
    else if(endChar === '2' && dateString !== '12'){dateString = `${dateString}nd`;}
    else if(endChar === '2' && dateString !== '13'){dateString = `${dateString}rd`;}
    else {dateString = `${dateString}th`;}
    return dateString;
};

module.exports = (timestamp, {monthsLength = 'short', dateSuffix = true} = {}) => {
    let months;
    if (monthsLength === 'short'){months = {
            0:'Jan',
            1:'Feb',
            2:'Mar',
            3:'Apr',
            4:'May',
            5:'Jun',
            6:'Jul',
            7:'Aug',
            8:'Sep',
            9:'Oct',
            10:'Nov',
            11:'Dec'
        };}
        else{months = {
            0:'January',
            1:'February',
            2:'March',
            3:'April',
            4:'May',
            5:'June',
            6:'July',
            7:'August',
            8:'September',
            9:'October',
            10:'November',
            11:'December'
        };}

        const dateObj = new Date(timestamp);
        const formatMonth = months[dateObj.getMonth()];
        let monthDay;

        if(dateSuffix) {monthDay = addDateSuff(dateObj.getDate());}
        else{monthDay = dateObj.getDate()};

        const year = dateObj.getFullYear();

        let hour;
        if(dateObj.getHours > 12) { hour = Math.floor(dateObj.getHours() / 2);}
        else {hour = dateObj.getHours();}
        if (hour === 0){hour = 12;}

        const minutes = dateObj.getMinutes();

        let dayHalf;
        if (dateObj.getHours() >= 12) {dayHalf = 'PM';}
        else {dayHalf = 'AM'};


const formatTimeStamp = `${formatMonth} ${monthDay}, ${year} at ${hour}:${minutes} ${dayHalf}`;
return formatTimeStamp;
}