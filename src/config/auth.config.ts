export const msalConfig = {
    auth: {
        clientId: process.env.VITE_AZURE_ACTIVE_DIRECTORY_CLIENT_ID || "00000000-0000-0000-0000-000000000000",
        authority: `https://login.microsoftonline.com/${process.env.VITE_AZURE_ACTIVE_DIRECTORY_TENANT_ID || "00000000-0000-0000-0000-000000000000"}`,
        redirectUri: "/"
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
};

export const loginRequest = {
    scopes: ["user.read"]
};
