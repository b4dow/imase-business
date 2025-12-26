import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Tailwind,
  Img,
} from "@react-email/components";

interface Props {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate = ({ name, email, phone, message }: Props) => {
  const baseUrl = process.env.BASE_URL;
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="font-sans">
          <Container className="mx-auto my-10 p-6 rounded-lg shadow">
            <Img
              src={`${baseUrl}/_next/image?url=%2Fimages%2Flogo-oficial.png&w=384&q=75`}
              width="170"
              height="75"
              alt="Imase"
              className="mx-auto"
            />

            <Heading className="text-gray-600 mb-4 text-center">
              Has recibido un nuevo mensaje desde el formulario web.
            </Heading>

            <Hr className="my-4" />

            <Section className="space-y-2 text-sm text-gray-700">
              <Text>
                <span className="font-semibold">Nombre:</span> {name}
              </Text>

              <Text>
                <span className="font-semibold">Email:</span> {email}
              </Text>

              <Text>
                <span className="font-semibold">Teléfono:</span> {phone}
              </Text>

              <Hr className="my-4" />

              <Text className="font-semibold text-gray-800 mb-2">Mensaje:</Text>
              <Text className="bg-gray-50 border border-gray-200 rounded-md p-4 text-sm text-gray-700 whitespace-pre-line">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
