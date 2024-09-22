export default function NameMode(text: string) {
    const testName = text.split("");

    for (let i = 0; i < testName.length; i++) {
        if (testName[i].includes("%")) {
            testName.splice(i, 3, " ");
        }
    }
    const stringName = testName.join("");
    return stringName;
}