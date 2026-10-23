import ThemeProvider from "@/context/theme-provider";
import LayoutContent from "@/layout/layout";


export default function RootLayout() {

  return (
   <ThemeProvider>
    <LayoutContent />
   </ThemeProvider>
  )
}
