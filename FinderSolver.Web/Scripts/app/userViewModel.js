(function() {
    function User() {
        var self = this;

        self.FirstName = ko.observable('Zig');
        self.LastName = ko.observable();
        self.DateOfBirth = ko.observable();
        self.Gender = ko.observable();
    };

    var UserViewModel = function() {
        var self = this;

        self.users = ko.observableArray([new User()]);
    };

    ko.applyBindings(new UserViewModel());
})();