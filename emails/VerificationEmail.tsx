import{
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button,

    
} from '@react-email/components';

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
    return (
        <Html lang='en' dir="ltr">
            <Head >
            <title>Verification Code</title>
           
            <Font fontFamily="Inter" fallbackFontFamily="Verdana" webFont={{url:'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2', format:'woff2'}} fontWeight={400} fontStyle='normal' />

            </Head>
            <Preview>Here&apos;s your Verification code : {otp}</Preview>
            <section>
                <Row>
                    <Heading as="h2">Hello{username},</Heading>
                </Row>
                <Row>
                <Text>
                    Thank you for signing up! Your verification code is {otp}. Please use this code to verify your email address.
                </Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                    </Row>
                <Row>
                    <Text>If you did not request this code, please ignore this email</Text>
                </Row>
            </section>
        </Html>
    );
}

