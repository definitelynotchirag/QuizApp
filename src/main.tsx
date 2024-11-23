import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "./components/ui/sidebar.tsx";
import { AppSidebar } from "./components/app-sidebar.tsx";
import { Separator } from "./components/ui/separator.tsx";
import { ModeToggle } from "./components/mode-toggle.tsx";
import { TranscriptProvider } from "./context/Transcriptcontext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TranscriptProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="w-screen m-auto inset-0 mt-0">
            <header className="flex h-5 mb-4 shrink-0 justify-between items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4 text-left">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
              </div>
              <ModeToggle />
            </header>
            <App />
          </SidebarInset>
        </SidebarProvider>
      </TranscriptProvider>
    </ThemeProvider>
  </StrictMode>
);
