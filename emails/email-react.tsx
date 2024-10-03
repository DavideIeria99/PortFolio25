import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";

const main = {
    padding: "10px",
    width: "100 %",
    height: " 100vh",
};
const div = {
    fontSize: "xx-large",
    fontWeight: " bold",
    display: "flex",
    justifyContent: "center",
};
const icon = {
    color: "red",
};

export default function EmailReact(message: string) {
    return (
        <Html lang="en" dir="ltr">
            <Head />
            <Body style={main}>
                <Section>
                    <Section style={div}>
                        <Text>WEB</Text>
                        <Text style={icon}>{"&#x003c;"}</Text>
                        <Text>TAG</Text>
                        <Text style={icon}>{`&#x003e;`}</Text>
                        <Text>DEV</Text>
                    </Section>
                </Section>
                <Section>
                    <Text>testo ${message}</Text>
                </Section>
            </Body>
        </Html>
    );
}
