function completion_fail() {
    let participant = ["mislav", "stanko", "mislav", "ana"];
    let completion =  ["stanko", "ana", "mislav"];

    let completion_fail = '';

    participant.sort();
    completion.sort();

    for(var i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            completion_fail = participant[i];
            return completion_fail;
        }
    }
}