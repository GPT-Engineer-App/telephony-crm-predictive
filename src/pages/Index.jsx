import React from "react";
import { Box, Heading, Text, Stack, Container, Button, Icon, useColorModeValue, createIcon } from "@chakra-ui/react";
import { FaPhoneVolume, FaChartBar, FaCode } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW={"3xl"}>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Servicios de Telefonía IP <br />
          <Text as={"span"} color={"green.400"}>
            para tu Call Center
          </Text>
        </Heading>
        <Text color={"gray.500"}>Ofrecemos soluciones de telefonía IP, CRM para llamadas predictivas, reportes personalizados y desarrollo de aplicaciones a medida para optimizar las operaciones de tu call center.</Text>
        <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"}>
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
          >
            Contáctanos
          </Button>
        </Stack>

        <Stack direction={"row"} spacing={4} justify={"center"}>
          <Box p={6} maxW={"330px"} w={"full"}>
            <Icon as={FaPhoneVolume} w={10} h={10} mb={4} color={"green.400"} />
            <Heading size="md" mb={2}>
              Telefonía IP
            </Heading>
            <Text fontSize={"sm"}>Soluciones de voz sobre IP escalables y confiables para tu call center.</Text>
          </Box>
          <Box p={6} maxW={"330px"} w={"full"}>
            <Icon as={FaChartBar} w={10} h={10} mb={4} color={"green.400"} />
            <Heading size="md" mb={2}>
              CRM y Reportes
            </Heading>
            <Text fontSize={"sm"}>CRM con llamadas predictivas y reportes personalizados para medir el rendimiento.</Text>
          </Box>
          <Box p={6} maxW={"330px"} w={"full"}>
            <Icon as={FaCode} w={10} h={10} mb={4} color={"green.400"} />
            <Heading size="md" mb={2}>
              Desarrollo a Medida
            </Heading>
            <Text fontSize={"sm"}>Creamos aplicaciones personalizadas para integrar con tus sistemas existentes.</Text>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
