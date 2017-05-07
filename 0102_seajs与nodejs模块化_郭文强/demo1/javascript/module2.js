var module2 = {
    run: function() {
        return $.merge(['module2'],  module3.run());
    }
}