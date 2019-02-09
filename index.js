function produceDrivingRange(range) {
    return function drivingRange(block1, block2) {
        let num1 = parseInt(block1, 10)
        let num2 = parseInt(block2, 10)
        let blocks;
        num1 > num2 ? blocks = (num1 - num2) : blocks = (num2 - num1);
        if (blocks > range) {
            return `${blocks - range} blocks out of range`
        } else {
            return `within range by ${range - blocks}`
        }
    }
}

function produceTipCalculator(num) {
    return function calculateTip(tip) {
        return tip * num
    }
}

function createDriver() {
    driverId = 0
    return class Driver {
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}