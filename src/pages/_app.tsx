import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { ruRU } from "@clerk/localizations";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider localization={ruRU} {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
