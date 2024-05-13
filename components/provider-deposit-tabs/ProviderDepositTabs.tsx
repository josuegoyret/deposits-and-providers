import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const ProviderDepositTabs = () => {
  return (
    <Tabs defaultValue="provider" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="provider">Crear Solicitud</TabsTrigger>
        <TabsTrigger value="deposit">Límite de depósito</TabsTrigger>
      </TabsList>
      <TabsContent value="provider">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="deposit">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default ProviderDepositTabs;
