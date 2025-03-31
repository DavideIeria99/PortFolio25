export default function NameMode(text: string) {

    const testName = text.split("");

    for (let i = 0; i < testName.length; i++) {
        if (testName[i].includes("%") && i < testName.length) {
            testName.splice(i, 3, " ");
        } else if (testName[i].includes("%") && i == testName.length) {
        }
    }
    const stringName = testName.join("").trimEnd();
    return stringName;
}
