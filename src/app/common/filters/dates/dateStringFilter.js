function dateStringFilter() {
    return function (dateString) {
        var date = new Date(dateString);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        year = year.toString().substring(2);

        return month + "/" + day + "/" + year;
    };
}

angular.module('angulaReminders.common')
    .filter('dateStringFilter', dateStringFilter);