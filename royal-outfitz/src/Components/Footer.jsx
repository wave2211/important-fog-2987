
import { Stack, Heading, Input, Button, HStack, Text, Center, Image } from "@chakra-ui/react";
import { PhoneIcon, LockIcon } from '@chakra-ui/icons';

function Footer() {
    return (
        <>
            <HStack display='flex' border="1px solid black" justifyContent={"center"} backgroundColor="#ebedf3" height="85px">
                <Text fontSize='sm' color='grey'>We will keep you posted on new products and great offers</Text>
                <HStack>
                    <Input placeholder="Email address" border="1px solid black" />
                    <Button backgroundColor="#001f49" color="white">B</Button>
                </HStack>
            </HStack>
            <div style={{
                display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: (4), borderBottom: "1px solid grey", width: "70%", margin: "auto",
            }}>
                <Stack align={'flex-start'}>
                    <Heading size='sm'>HELP</Heading>
                    <Text fontSize='sm' color='grey'>FAQS</Text>
                    <Text fontSize='sm' color='grey'>DELIVERY</Text>
                    <Text fontSize='sm' color='grey'>RETURNS</Text>
                    <Text fontSize='sm' color='grey'>PAYPAL</Text>
                    <Text fontSize='sm' color='grey'>SIZE GUIDES</Text>
                    <Text fontSize='sm' color='grey'>SHIRT MULTIBUY</Text>
                    <Text fontSize='sm' color='grey'>FIND A STORE</Text>
                    <Text fontSize='sm' color='grey'>CONTACT US</Text>
                    <Text fontSize='sm' color='grey'>WHERE IS MY ORDER?</Text>
                </Stack>

                <Stack align={'flex-start'}>
                    <Heading size='sm'>LEGAL</Heading>
                    <Text fontSize='sm' color='grey'>TERMS AND CONDITIONS</Text>
                    <Text fontSize='sm' color='grey'>PRIVACY POLICY</Text>
                    <Text fontSize='sm' color='grey'>COOKIE POLICY</Text>
                    <Text fontSize='sm' color='grey'>CARBON NEUTRALITY STATEMENT</Text>
                    <Text fontSize='sm' color='grey'>ETHICAL TRADING POLICY</Text>
                    <Text fontSize='sm' color='grey'>MODERN SLAVERY STATEMENT</Text>
                    <Text fontSize='sm' color='grey'>INCLUSIVE WORKING STATEMENT</Text>
                    <Text fontSize='sm' color='grey'>TAX STRATEGY</Text>
                    <Text fontSize='sm' color='grey'>GENDER PAY REPORT</Text>
                </Stack>

                <Stack align={'flex-start'}>
                    <Heading size='sm'>MORE INFO</Heading>
                    <Text fontSize='sm' color='grey'>ABOUT US</Text>
                    <Text fontSize='sm' color='grey'>CUSTOM SHIRTS</Text>
                    <Text fontSize='sm' color='grey' >GIFT VOUCHERS</Text>
                    <Text fontSize='sm' color='grey'>WHOLESALE PARTNERSHIPS</Text>
                    <Text fontSize='sm' color='grey'>REFER A FRIEND</Text>
                    <Text fontSize='sm' color='grey'>AFFILIATE PROGRAMME</Text>
                    <Text fontSize='sm' color='grey'>DISCOUNT CODES</Text>
                    <Text fontSize='sm' color='grey'>STUDENT & 16-26 DISCOUNT</Text>
                    <Text fontSize='sm' color='grey'>REQUEST A CATALOGUE</Text>
                    <Text fontSize='sm' color='grey' >DOING THINGS PROPERLY</Text>
                </Stack>


                <Stack align={'flex-start'}>
                    <Heading size='sm'>CAREERS</Heading>
                    <Text fontSize='sm' color='grey' >UK VACANCIES</Text>
                    <Text fontSize='sm' color='grey'>US VACANCIES</Text>
                    <Text fontSize='sm' color='grey'>OUR BELIEFS</Text>
                    <Text fontSize='sm' color='grey'>OUR BENEFITS</Text>
                    <Text fontSize='sm' color='grey'>OUR PEOPLE</Text>
                    <PhoneIcon />
                </Stack>
            </div>
            <Center h='100px' fontSize='sm' color='black'><LockIcon />Shopping is secure with Charles Tyrwhitt.</Center>
            <Center fontSize='sm' color='black'>We accept:</Center>
            <HStack display="grid" gridTemplateColumns="repeat(5,1fr)" gap="10px" width="20%" margin="auto">
                <Image
                    width="30px"
                    src='data:image/png;base64,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'
                    alt='visa'
                />
                <Image
                    width="30px"


                    src='data:image/png;base64,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'
                    alt='amex'
                />
                <Image
                    width="30px"
                    src='data:image/png;base64,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'
                    alt='mastercard'
                />
                <Image
                    width="30px"


                    src='data:image/png;base64,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'
                    alt='paypal'
                />
                <Image
                    width="30px"

                    src='data:image/png;base64,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'
                    alt='applepay'
                />
            </HStack>
        </>
    )
}

export default Footer;