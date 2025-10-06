"use client";
import { useEffect, useState } from "react";


export default function Countdown({ target }: { target: string }) {
const [left, setLeft] = useState("");
useEffect(() => {
function tick() {
const d = +new Date(target) - +new Date();
if (d <= 0) { setLeft("Live now"); return; }
const days = Math.floor(d / 86400000);
const hours = Math.floor((d % 86400000) / 3600000);
const mins = Math.floor((d % 3600000) / 60000);
setLeft(`${days}d ${hours}h ${mins}m`);
}
tick();
const t = setInterval(tick, 30000);
return () => clearInterval(t);
}, [target]);
return <span>{left}</span>;
}