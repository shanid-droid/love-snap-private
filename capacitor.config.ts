import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.da974b4094f44121991b9f9882a15ffc',
  appName: 'love-snap-private',
  webDir: 'dist',
  server: {
    url: "https://da974b40-94f4-4121-991b-9f9882a15ffc.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;