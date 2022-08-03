import { AnaLog } from "./AnaLog";

export function ProcessImage(file: File, callback: (res:ArrayBuffer)=> void) {
    AnaLog();
    new Response(file).arrayBuffer().then(res => callback(res));
}