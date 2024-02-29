let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this; 
    },
    down: function() {
        this.step--;
        return this; 
    },
    showStep: function() {
        alert(this.step);
        return this; 
    }
};

// Приклад ланцюжкового виклику
ladder.up().up().down().showStep(); // 1
