// code your solution her
function superbowlWin(record) {
    const result = record.find(record => record.result === "W");
    return (result != undefined ? result.year : undefined);
}