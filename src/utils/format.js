export const dateParser = val => {
    // let date = new Date(val);
    // let year = date.getFullYear();
    // let month = date.getMonth() + 1;
    // date = date.getDate();

    // if (date < 10) {
    //     date = '0' + date;
    // }
    // if (month < 10) {
    //     month = '0' + month;
    // }

    // console.log(year + '-' + month + '-' + date);
    // return year + '-' + month + '-' + date;var date = new Date("2013-03-10T02:00:00Z");
    let date = new Date(val);
    return date.toISOString().substring(0, 10);
};
