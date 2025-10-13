import Rules from "@/components/Rules";
import SomethingExciting from "@/components/SomethingExciting";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto flex flex-col">
      <Tabs defaultValue="rules" className="flex-1 flex flex-col">
        {/* Tab Navigation */}
        <div className="flex justify-center p-4">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="rules">Rules</TabsTrigger>
            <TabsTrigger value="exciting">Something Exciting</TabsTrigger>
            <TabsTrigger value="mech">Mech</TabsTrigger>
          </TabsList>
        </div>

        {/* Tab Content */}
        <div className="flex-1 p-4">
          <TabsContent value="rules" className="h-full">
            <Rules />
            {/* <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Rules</h2>
                <p className="text-muted-foreground">Rules content will go here</p>
              </div>
            </div> */}
          </TabsContent>
          <TabsContent value="exciting" className="h-full">
            <SomethingExciting />
          </TabsContent>

          <TabsContent value="mech" className="h-full">
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Mech</h2>
                <p className="text-muted-foreground">Mech content will go here</p>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </main>
  );
}
