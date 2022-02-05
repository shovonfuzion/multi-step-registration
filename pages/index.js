import Head from "next/head";
import Image from "next/image";
import Form from "../components/StoreRegistration/Form";
import RegistrationType from "../components/StoreRegistration/RegistrationType";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <Form></Form>
    </div>
  );
}
