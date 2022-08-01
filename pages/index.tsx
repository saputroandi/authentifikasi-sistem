import React from "react";
import Head from "next/head";
import Link from "next/link";

export default class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Head>
          <title>Authentifikasi Sistem</title>
          <meta name="description" content="Authentifikasi Sistem" />
        </Head>
        <main>
          <nav>
            <div>Authentifikasi Sistem Sederhana</div>
            <div>
              <Link href={"/login"}>
                <a>Login</a>
              </Link>
              <Link href={"/register"}>
                <a>Register</a>
              </Link>
            </div>
          </nav>
          <div>
            <div>Halaman Dashboard</div>
          </div>
        </main>
      </div>
    );
  }
}
