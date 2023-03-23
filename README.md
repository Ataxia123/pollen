
## Executive Summary:

<center   >
  
### **Pollen**
#### Web3 Node Activity Tracking and Incentive Platform

</center>

**Objective:** To create a decentralized system for tracking network participation and rewarding active nodes using web3 technologies, including Tableland for relational data storage and Chainlink for oracle services.

The project aims to provide a decentralized and transparent solution for tracking network participation and rewarding active nodes, leveraging web3-native technologies for data storage and oracle services. The system's design will prioritize scalability and cost efficiency to support long-term growth and adoption.

- Develop a system that allows nodes to store and maintain their own data (e.g., wallet address, activity, and other relevant information) on individual Tableland tables.

- Implement an aggregator service that periodically reads and processes data from all individual tables, calculating summary statistics (e.g., count of active nodes, total throughput).

- Utilize Chainlink oracles to securely and transparently facilitate periodic updates and maintain on-chain records for network activity.

- Create a central Tableland table to store aggregated data, which will be used to determine rewards for participants based on their network participation and activity.

- Develop a smart contract to manage reward distribution, integrating it with the aggregator service and the central Tableland table.

- Optimize the system for gas efficiency and scalability to ensure cost-effective and sustainable operation.
