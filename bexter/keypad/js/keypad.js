function keypad() {
    let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
    let hand = 'right';

    let L_position = 10; // keypad *
    let R_position = 12; // keypad #

    let output = '';

    for(let idx = 0; idx < numbers.length; idx++) {
        if(numbers[idx] == 1 || numbers[idx] == 4 || numbers[idx] == 7) {
            output += 'L';
            L_position = numbers[idx];
        }
        else if(numbers[idx] == 3 || numbers[idx] == 6 || numbers[idx] == 9) {
            output += 'R';
            R_position = numbers[idx];
        }
        else {
            if(numbers[idx] == 0) {
                numbers[idx] = 11;
            }

            let L_distance = Math.floor(Math.abs(numbers[idx] - L_position) / 3) + (Math.abs(numbers[idx] - L_position) % 3);
            let R_distance = Math.floor(Math.abs(numbers[idx] - R_position) / 3) + (Math.abs(numbers[idx] - R_position) % 3);

            if(L_distance < R_distance) {
                output += 'L';
                L_position = numbers[idx];
            }
            else if(L_distance > R_distance) {
                output += 'R';
                R_position = numbers[idx];
            }
            else if(L_distance == R_distance) {
                if(hand == 'right') {
                    output += 'R';
                    R_position = numbers[idx];
                }
                else if(hand == 'left') {
                    output += 'L';
                    L_position = numbers[idx];
                }
            }
        }
    }
    document.getElementById("valueInput").innerHTML = output;
}