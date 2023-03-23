import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Database } from "@tableland/sdk";
import type { NextPage } from "next";
import { BugAntIcon, SparklesIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  const tableName = "healthbot_80001_1"; // Our pre-defined health check table

  interface HealthBot {
    counter: number;
  }

  interface Schema {
    id: number;
    name: string;
  }

  // const db: Database<HealthBot> = new Database(); // Polygon Mumbai testnet
  const db = new Database<Schema>();
  // async function getData() {
  //   // Type is inferred due to `Database` instance definition
  //   const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
  //   console.log(results);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

  async function handleTableland() {
    // Default to grabbing a wallet connection in a browser
    const db = new Database<Schema>();

    // This is the table's `prefix`; a custom table value prefixed as part of the table's name
    const prefix = "my_sdk_table";

    const { meta: create } = await db.prepare(`CREATE TABLE ${prefix} (id integer primary key, name text);`).run();

    // The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
    console.log(create.txn?.name); // e.g., my_sdk_table_80001_311
  }

  async function handleTableWrite() {
    // Insert a row into the table
    const { meta: insert } = await db
      .prepare(`INSERT INTO ${name} (id, name) VALUES (?, ?);`)
      .bind(0, "Bobby Tables")
      .run();

    // Wait for transaction finality
    await insert.txn?.wait();

    // Perform a read query, requesting all rows from the table
    const { results } = await db.prepare(`SELECT * FROM ${name};`).all();
  }

  return (
    <>
      <Head>
        <title>Pollen App</title>
        <meta name="description" content="Created with 🏗 scaffold-eth" />
      </Head>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Pollen</span>
          </h1>
          Trying ouut tableland first
        </div>
      </div>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleTableland}
          >
            Create Table
          </button>
        </div>
      </div>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleTableWrite}
          >
            Write to Table
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
