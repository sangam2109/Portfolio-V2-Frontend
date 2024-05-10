import { useToast as useChakraToast } from "@chakra-ui/react";

const useToast = () => {
  const toast = useChakraToast();

  const showToast = (severity, message) => {
    toast({
      position: "top-right",
      title: message,
      status: severity,
      duration: 3000,
      isClosable: true,
    });
  };

  return { showToast };
};

export default useToast;
