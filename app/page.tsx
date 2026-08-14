import type { Metadata } from "next";
import Showcase from "./showcase";

export const metadata: Metadata = {
  title: "Northline Auto — Honest work. Clear answers.",
  description: "Three client-ready website directions for an independent auto repair shop.",
};

export default function Home() {
  return <Showcase />;
}
