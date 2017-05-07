var module1 = {
    run: function() {
        return $.merge(['module1'], module2.run());
    }
}
