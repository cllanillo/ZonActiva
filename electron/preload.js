import { contextBridge, ipcRenderer } from "electron";

// Exponer APIs seguras al renderer
contextBridge.exposeInMainWorld("electronAPI", {
    sendPing: () => ipcRenderer.invoke("ping"),
});
