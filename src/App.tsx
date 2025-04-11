import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import AppShell from "@/components/sidebar";
function App() {
  return (
    <div className="flex bg-black h-screen w-screen">
      <SidebarProvider>
        <SidebarTrigger />
        <AppShell />
      </SidebarProvider>
    </div>
  );
}

export default App;
